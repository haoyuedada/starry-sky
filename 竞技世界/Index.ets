/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 */

import {
  RNInstance,
  RNOHCoreContext,
  ResourceJSBundleProvider,
  RNSurface,
  RNComponentContext,
  RNOHContext,
  buildRNComponentForTag,
  RNPackageContext,
  RNPackage,
  ComponentBuilderContext,
  MetroJSBundleProvider,
  RNOHError,
  LogBoxDialog,
  LogBoxTurboModule
} from '@rnoh/react-native-openharmony';

@Builder
function buildCustomComponent(ctx: ComponentBuilderContext) {
  Stack() {}
  .position({ x: 0, y: 0 })
}

function createRNPackages(ctx: RNPackageContext): RNPackage[] {
  return [];
}

const wrappedCustomRNComponentBuilder = wrapBuilder(buildCustomComponent);

@Entry
@Component
export struct Index {
  @StorageLink('RNOHCoreContext') rnohCoreContext: RNOHCoreContext | undefined = undefined
  private instance: RNInstance | undefined;
  private bundlePath = 'bundle.harmony.js'
  private moduleName = 'app_name'
  @State isBundleReady: boolean = false;
  private logBoxDialogController!: CustomDialogController
  private ctx!: RNComponentContext
  public initialProps: Record<string, string> = {}
  private cleanUpCallbacks: (() => void)[] = []

  private surfaceId: string = ''
  private xComponentContext: Record<string, () => void> = {}
  xComponentController: XComponentController = new XComponentController()

  async aboutToAppear() {
    if (!this.rnohCoreContext) {
      return;
    }
    this.instance = await this.rnohCoreContext.createAndRegisterRNInstance({
      createRNPackages: createRNPackages,
      enableNDKTextMeasuring: true,
      enableBackgroundExecutor: false,
      enableCAPIArchitecture: true,
      arkTsComponentNames: []
    });
    this.logBoxDialogController = new CustomDialogController({
      cornerRadius: 0,
      customStyle: true,
      alignment: DialogAlignment.TopStart,
      backgroundColor: Color.Transparent,
      builder: LogBoxDialog({
        ctx: this.ctx,
        rnInstance: this.instance,
        initialProps: this.initialProps
      })
    })
    this.ctx = new RNComponentContext(
      RNOHContext.fromCoreContext(this.rnohCoreContext!, this.instance),
      wrappedCustomRNComponentBuilder,
      wrapBuilder(buildRNComponentForTag),
      new Map()
    )
    this.cleanUpCallbacks.push(this.instance.getTurboModule<LogBoxTurboModule>(LogBoxTurboModule.NAME).eventEmitter.subscribe("SHOW",
      () => {
        this.logBoxDialogController.open()
      }))
    this.cleanUpCallbacks.push(this.instance.getTurboModule<LogBoxTurboModule>(LogBoxTurboModule.NAME).eventEmitter.subscribe("HIDE",
      () => {
        this.logBoxDialogController.close()
      }))
    await this.instance.runJSBundle(new ResourceJSBundleProvider(getContext().resourceManager, this.bundlePath)).then(() => {
      this.isBundleReady = true
      console.log('instance 加载完成' + this.bundlePath)
    })
  }

  build() {
    Stack(){
      if (this.isBundleReady) {
        // X组件
        XComponent({
          id: 'xcomponent',
          type: XComponentType.SURFACE,
          controller: this.xComponentController
        })
        .onLoad(() => {
          this.xComponentController.setXComponentSurfaceSize({ surfaceWidth: 1920, surfaceHeight: 1080 })
          this.surfaceId = this.xComponentController.getXComponentSurfaceId()
          this.xComponentContext = this.xComponentController.getXComponentContext() as Record<string, () => void>
        })
        .backgroundColor(Color.Black)
        .width('640px')
        .height('480px')
        .onTouch(() => {
          console.log("chy XComponent onClick")
        })
          // .margin({bottom: 300})
        // RN组件
        RNSurface({
          surfaceConfig: {
            appKey: this.moduleName,
          },
          ctx: this.ctx,
        })
        .hitTestBehavior(HitTestMode.Transparent)
      }
    }
  }
}
   