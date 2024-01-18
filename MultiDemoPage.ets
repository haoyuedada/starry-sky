/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2023-2023. All rights reserved.
 */

import { RNInstance, RNAbility, ResourceJSBundleProvider } from 'rnoh';
import { BaseRN } from '../rn/BaseRN';
import { createRNPackages } from '../rn/';

@Entry
@Component
struct MultiDemoPage {
  @StorageLink('RNAbility') rnAbility: RNAbility | undefined = undefined
  private instance: RNInstance | undefined;
  private instance2: RNInstance | undefined;
  private instance3: RNInstance | undefined;
  private bundlePath = 'bundle/cp/homepage.harmony.bundle'
  private moduleName = 'HomePage'
  private bundlePath2 = 'bundle/bp/details.harmony.bundle'
  private moduleName2 = 'Details'
  private bundlePath3 = 'bundle/cp/goods.harmony.bundle'
  private moduleName3 = 'Goods'
  @State isBundleReady1: boolean = false;
  @State isBundleReady2: boolean = false;
  @State isBundleReady3: boolean = false;
  container: Record<string, string | number> = {
    "backgroundColor": '#E6E6E6',
    "flex": 1,
    "padding": 20,
  }
  apiFontSize: Record<string, string | number> = {
    'fontSize': 30,
    'color': 'white'
  }
  styles: Record<string, object> = {
    'container': this.container,
    'apiFontSize': this.apiFontSize
  }
  initProps: Record<string, string | object> = {
    'stringParam': 'ArkTs传递给RN的参数',
    'styles': this.styles
  };

  // onBackPress(): boolean | undefined {
  //   console.log('chy onBackPress')
  //   return this.rnAbility?.onBackPress();
  // }

  async aboutToAppear() {
    if (!this.rnAbility) {
      return;
    }
    console.log('TestXXX MultiDemoPage.ets aboutToAppear 创建instance2和instance3, instance3加载基础bundle');

    this.instance = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
    await this.instance.runJSBundle(new ResourceJSBundleProvider(getContext().resourceManager, 'bundle/basic/basic.harmony.bundle'));
    this.isBundleReady1 = true;

    this.instance3 = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
    await this.instance3.runJSBundle(new ResourceJSBundleProvider(getContext()
      .resourceManager, 'bundle/basic/basic.harmony.bundle'));
    this.isBundleReady3 = true;

    this.instance2 = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
    this.isBundleReady2 = true;
  }

  onPageHide() {
    if (!this.rnAbility) {
      return;
    }

    console.log('TestXXX MultiDemoPage.ets onPageHide');

    this.rnAbility.destroyAndUnregisterRNInstance(this.instance);
    this.rnAbility.destroyAndUnregisterRNInstance(this.instance2);
    this.rnAbility.destroyAndUnregisterRNInstance(this.instance3);
  }

  build() {
    // 每个jsbundle加载完去渲染，这种写法没问题，不会出现死锁和某个RN实例无法显示
    // Column() {
    //   if (this.isBundleReady1) {
    //     BaseRN({
    //       rnInstance: this.instance,
    //       moduleName: this.moduleName,
    //       bundlePath: this.bundlePath,
    //     }).align(Alignment.Top)
    //       .margin({ top: 10 })
    //       .width('100%')
    //       .height('30%')
    //   }
    //   if (this.isBundleReady2) {
    //     BaseRN({
    //       rnInstance: this.instance2,
    //       moduleName: this.moduleName2,
    //       bundlePath: this.bundlePath2,
    //       initProps: this.initProps as Record<string, string>
    //     }).align(Alignment.Top)
    //       .margin({ top: 10 })
    //       .width('100%')
    //       .height('30%')
    //   }
    //   if (this.isBundleReady3) {
    //     BaseRN({
    //       rnInstance: this.instance3,
    //       moduleName: this.moduleName3,
    //       bundlePath: this.bundlePath3,
    //     }).align(Alignment.Top)
    //       .margin({ top: 10 })
    //       .width('100%')
    //       .height('30%')
    //   }
    // }
    // .width('100%')
    // .height('100%')
    // 所有bundle加载完毕去渲染，不会出现死锁，但有时会出现某个RN实例无法显示
    Column() {
      if (this.isBundleReady1 && this.isBundleReady2 && this.isBundleReady3) {
        BaseRN({
          rnInstance: this.instance,
          moduleName: this.moduleName,
          bundlePath: this.bundlePath,
        }).align(Alignment.Top)
          .margin({ top: 10 })
          .width('100%')
          .height('30%')
        BaseRN({
          rnInstance: this.instance2,
          moduleName: this.moduleName2,
          bundlePath: this.bundlePath2,
          initProps: this.initProps as Record<string, string>
        }).align(Alignment.Top)
          .margin({ top: 10 })
          .width('100%')
          .height('30%')
        BaseRN({
          rnInstance: this.instance3,
          moduleName: this.moduleName3,
          bundlePath: this.bundlePath3,
        }).align(Alignment.Top)
          .margin({ top: 10 })
          .width('100%')
          .height('30%')
      }
    }
    .width('100%')
    .height('100%')
  }
}
   