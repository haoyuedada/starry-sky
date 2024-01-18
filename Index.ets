//
// import { ResourceJSBundleProvider, RNAbility, RNInstance } from 'rnoh';
// import MultiHome from './MultiHome';
// import { createRNPackages, LoadManager } from '../rn/';
//
//
// @Entry()
// @Component
// struct Index {
//   @StorageLink('RNAbility') rnAbility: RNAbility | undefined = undefined
//   @State isBundleReady: boolean = false
//   private isMetroAvailable: boolean = false
//
//   aboutToAppear() {
//     this.getMetroStatus().then((flag: boolean) => {
//       this.isMetroAvailable = flag
//       this.register().then((instanceMap: Map<string, RNInstance>) => {
//         this.isBundleReady = true;
//         console.log("registered instance", JSON.stringify(instanceMap))
//       });
//     })
//   }
//
//   aboutToDisappear() {
//     LoadManager.resetLoadedData()
//   }
//
//   async getMetroStatus() {
//     try {
//       const data = await LoadManager.loadMetroBundle()
//       AppStorage.setOrCreate('isMetroAvailable', true)
//       console.log('metro 服务可用'+data)
//       return true
//     } catch (err) {
//       AppStorage.setOrCreate('isMetroAvailable', false);
//       console.log('metro 服务不可用', err)
//       return false
//     }
//   }
//
//   async register(): Promise<Map<string, RNInstance>> {
//     if (!this.rnAbility)
//       return new Map()
//
//     if (this.isMetroAvailable) {
//       this.isBundleReady = true
//       return new Map()
//     }
//
//     let instanceMap: Map<string, RNInstance> =  new Map();
//     const cpInstance: RNInstance = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
//     const bpInstance: RNInstance = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
//     LoadManager.cpInstance = cpInstance;
//     LoadManager.bpInstance = bpInstance;
//     await cpInstance.runJSBundle(new ResourceJSBundleProvider(getContext().resourceManager, 'bundle/basic/basic.harmony.bundle'));
//     instanceMap.set('CPReactInstance', cpInstance);
//     instanceMap.set('BPReactInstance', bpInstance);
//     return instanceMap
//   }
//
//   build() {
//     Column() {
//       if (this.isBundleReady){
//         MultiHome()
//       }
//     }
//   }
// }
//

import { ResourceJSBundleProvider, RNAbility, RNInstance } from 'rnoh';
import MultiHome from './MultiHome';
import { createRNPackages, LoadManager } from '../rn/';
import router from '@ohos.router';
import hilog from '@ohos.hilog';
import promptAction from '@ohos.promptAction';

@Entry()
@Component
struct Index {
  @StorageLink('RNAbility') rnAbility: RNAbility | undefined = undefined
  @State isBundleReady: boolean = false
  private isMetroAvailable: boolean = false

  aboutToAppear() {
    console.log('TestXXX Index.ets aboutToAppear');
    this.getMetroStatus().then((flag: boolean) => {
      console.log('TestXXX Index.ets aboutToAppear getMetroStatus then');
      this.isMetroAvailable = flag
      this.register().then((instanceMap: Map<string, RNInstance>) => {
        console.log('TestXXX Index.ets aboutToAppear getMetroStatus register then');
        this.isBundleReady = true;
        console.log("registered instance", JSON.stringify(instanceMap))
      });
    })
  }

  aboutToDisappear() {
    LoadManager.resetLoadedData()
  }

  async getMetroStatus() {
    console.log('TestXXX Index.ets getMetroStatus');
    try {
      const data = await LoadManager.loadMetroBundle()
      AppStorage.setOrCreate('isMetroAvailable', true)
      console.log('TestXXX Index.ets getMetroStatus metro 服务可用' + data)
      return true
    } catch (err) {
      AppStorage.setOrCreate('isMetroAvailable', false);
      console.log('TestXXX Index.ets getMetroStatus metro 服务不可用', err)
      return false
    }
  }

  async register(): Promise<Map<string, RNInstance>> {
    console.log('TestXXX Index.ets register');
    if (!this.rnAbility)
      return new Map()

    if (this.isMetroAvailable) {
      this.isBundleReady = true
      return new Map()
    }

    console.log('TestXXX Index.ets register 创建cpInstance和bpInstance, cpInstance加载基础bundle');

    let instanceMap: Map<string, RNInstance> = new Map();
    const cpInstance: RNInstance = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
    const bpInstance: RNInstance = await this.rnAbility.createAndRegisterRNInstance({ createRNPackages });
    LoadManager.cpInstance = cpInstance;
    LoadManager.bpInstance = bpInstance;
    await cpInstance.runJSBundle(new ResourceJSBundleProvider(getContext()
      .resourceManager, 'bundle/basic/basic.harmony.bundle'));
    instanceMap.set('CPReactInstance', cpInstance);
    instanceMap.set('BPReactInstance', bpInstance);
    return instanceMap
  }

  // build() {
  //   Column() {
  //     if (this.isBundleReady){
  //       MultiHome()
  //     }
  //   }
  // }

  build() {
    Row() {
      Column() {
        Text('测试跳转CRN多实例页面')
          .fontSize(24)
          .fontWeight(FontWeight.Bold)
        Button('点击跳转')
          .height(60)
          .margin(24)
          .width('64%')
          .onClick((event: ClickEvent) => {
            console.log('TestXXX Index.ets onClick goto pages/MultiDemoPage');
            hilog.info(0x0000, 'testTag', '%{public}s', 'TestXXX goto pages/MultiDemoPage');
            promptAction.showToast({ message: 'hello', duration: 2000 });
            router.pushUrl({
              url: 'pages/MultiDemoPage'
            });
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
