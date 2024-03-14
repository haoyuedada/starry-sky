import { ResourceJSBundleProvider, RNAbility, RNInstance,
  LogBoxDialog, RNOHErrorDialog, LogBoxTurboModule, ComponentBuilderContext } from 'rnoh';
import MultiHome from './MultiHome';
import { createRNPackages, LoadManager } from '../rn/';



@Entry()
@Component
struct Index {
  @StorageLink('RNAbility') rnAbility: RNAbility | undefined = undefined
  @State isBundleReady: boolean = false
  private isMetroAvailable: boolean = false
  private cleanUpCallbacks: (() => void)[] = []
  private logBoxDialogController!: CustomDialogController
  @Builder logBoxBuilder(_: ComponentBuilderContext) {}

  aboutToAppear() {
    if (!this.rnAbility) return;
    this.loadMetroBundle()
  }

  aboutToDisappear() {
    LoadManager.resetLoadedData()
    this.cleanUpCallbacks.forEach(cleanUp => cleanUp())
  }

  subscribeReload() {
    if (!this.rnAbility) return;
    this.cleanUpCallbacks.forEach(cleanUp => cleanUp())
    this.cleanUpCallbacks.push(this.rnAbility.devToolsController.eventEmitter.subscribe("RELOAD", async () => {
      this.isBundleReady = false
      this.isMetroAvailable = false
      LoadManager.resetLoadedData()
      this.loadMetroBundle()
    }))
  }

  subscribeLogBox() {
    this.logBoxDialogController = new CustomDialogController({
      cornerRadius: 0,
      customStyle: true,
      alignment: DialogAlignment.TopStart,
      backgroundColor: Color.Transparent,
      builder: LogBoxDialog({
        rnInstance: LoadManager.rnInstanceShared,
        initialProps: {},
        buildCustomComponent: new WrappedBuilder(this.logBoxBuilder),
      })
    })

    this.cleanUpCallbacks.push(LoadManager.rnInstanceShared.getTurboModule<LogBoxTurboModule>(LogBoxTurboModule.NAME).eventEmitter.subscribe("SHOW", () => {
      this.logBoxDialogController.open()
    }))
    this.cleanUpCallbacks.push(LoadManager.rnInstanceShared.getTurboModule<LogBoxTurboModule>(LogBoxTurboModule.NAME).eventEmitter.subscribe("HIDE", () => {
      this.logBoxDialogController.close()
    }))
  }

  loadMetroBundle() {
    LoadManager.loadMetroBundle().then((flag: boolean) => {
      console.log('SampleApp --- metro 服务是否可用 = ', JSON.stringify(flag))
      AppStorage.setOrCreate('isMetroAvailable', flag)
      this.isMetroAvailable = flag

      this.register().then((instanceMap: Map<string, RNInstance>) => {
        this.isBundleReady = true;
        console.log("registered instance", JSON.stringify(instanceMap))
      });
    })
  }





  async register(): Promise<Map<string, RNInstance>> {
    if (!this.rnAbility)
      return new Map()

    if (this.isMetroAvailable) {
      this.isBundleReady = true
      this.subscribeReload()
      this.subscribeLogBox()
      return new Map()
    }

    let instanceMap: Map<string, RNInstance> =  new Map();
    const cpInstance: RNInstance = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
    const bpInstance: RNInstance = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
    LoadManager.cpInstance = cpInstance;
    LoadManager.bpInstance = bpInstance;
    await cpInstance.runJSBundle(new ResourceJSBundleProvider(getContext().resourceManager, 'bundle/basic/basic.harmony.bundle'));
    instanceMap.set('CPReactInstance', cpInstance);
    instanceMap.set('BPReactInstance', bpInstance);
    return instanceMap
  }

  build() {
    Stack() {
      if (this.rnAbility?.isDebugModeEnabled() && this.isMetroAvailable) {
        RNOHErrorDialog()
      }
      if (this.isBundleReady) {
        MultiHome()
      }
    }
  }
}