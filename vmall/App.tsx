import React from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
// 本地包 没有骨架屏的可以删除这行代码
// import { RnBridge } from '@hw-vmall/vrn-basic-comp';


const App = (props: any) => {
  const { uniqueId } = props;
  // 本地包 没有骨架屏的可以删除这行代码
  // RnBridge.invokeVmallNative('page', 'productDetailLoaded', {
  //   uniqueId: uniqueId,
  // });
  const imgList = [
    {
        "type": "null"
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202112/diyPackage/DP_8061727606355272/B307AC50D34A72FA853E501BB243A83D.png",
        "sbomCode": "3101040012215",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202305/diyPackage/DP_8061727606355272/0C27EA3B625957E28F2E04BA83B7BA31.png",
        "sbomCode": "3101040012234",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202305/diyPackage/DP_8061727606355272/FE5188A0D431322AC81289EA0443E0AA.png",
        "sbomCode": "3101040012233",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202305/diyPackage/DP_8061727606355272/576B7C48AAFB1B66BE3DF936D4B333BB.png",
        "sbomCode": "3101040012228",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202305/diyPackage/DP_8061727606355272/502CB3445B60BC34F7450A64A2893B24.png",
        "sbomCode": "3101040012227",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202305/diyPackage/DP_8061727606355272/4C84C4974E9BF829329C51EA0DC074C4.png",
        "sbomCode": "3101040012226",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202305/diyPackage/DP_8061727606355272/C08D2997096150499F3C634E0761A080.png",
        "sbomCode": "3101040012225",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202307/diyPackage/DP_8061727606355272/8E31289EA2F21B63BD1FFB9D30A9A73A.png",
        "sbomCode": "3101040012240",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202307/diyPackage/DP_8061727606355272/DB7D7B355CCC36AEE50FAFA54980B85D.png",
        "sbomCode": "3101040012238",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202307/diyPackage/DP_8061727606355272/575215A16A5ACFF553D8047631C6E4AC.png",
        "sbomCode": "3101040012237",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202309/diyPackage/DP_8061727606355272/DB4A3AE69CC3F07C7AD106CA41674A12.png",
        "sbomCode": "3101040012252",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202309/diyPackage/DP_8061727606355272/6A1B234F355DFBEF2C1B39C9D7E6BE0C.png",
        "sbomCode": "3101040012251",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202309/diyPackage/DP_8061727606355272/6506204ED44638DA8EBEAA51FAEDA0CA.png",
        "sbomCode": "3101040012250",
        "unitPrice": 139,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202309/diyPackage/DP_8061727606355272/4E238B4DC9CDEEB40C9502725C1F4FB3.png",
        "sbomCode": "3101040012247",
        "unitPrice": 179,
        "originalPrice": 249,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202309/diyPackage/DP_8061727606355272/B2E66F872407A1DB8C8F10F0E42F0804.png",
        "sbomCode": "3101040012245",
        "unitPrice": 179,
        "originalPrice": 249,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202409/diyPackage/DP_8061727606355272/969EACEBC6D55507F27B50A0831EE177.png",
        "sbomCode": "3101040012261",
        "unitPrice": 179,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202409/diyPackage/DP_8061727606355272/3A48F3553F73E236C50F1292D0EA42F9.png",
        "sbomCode": "3101040012262",
        "unitPrice": 179,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202409/diyPackage/DP_8061727606355272/F0B95E70A0F0A4F721733DEEE8EE2584.png",
        "sbomCode": "3101040012263",
        "unitPrice": 179,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202409/diyPackage/DP_8061727606355272/33120742883BE12BCBB87E9D3ABB7640.png",
        "sbomCode": "3101040012264",
        "unitPrice": 179,
        "originalPrice": 199,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202309/diyPackage/DP_8061727606355272/840027CA163F8BF0DD1D93390E73941E.png",
        "sbomCode": "3101040012425",
        "unitPrice": 269,
        "originalPrice": 399,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202112/diyPackage/DP_8061727606355272/EFCE3912FD3759150DC47867CDFE960C.png",
        "sbomCode": "3101040012504",
        "unitPrice": 949,
        "originalPrice": 1299,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202112/diyPackage/DP_8061727606355272/CB71E41CA9046B21A40407BD15A06603.png",
        "sbomCode": "3101040012503",
        "unitPrice": 559,
        "originalPrice": 799,
        "type": "group",
        "zIndex": 3
    },
    {
        "uri": "https://res.vmallres.com/pimages//uomcdn/CN/pms/202112/diyPackage/DP_8061727606355272/FCCEEEAA324951ED563A27244B8EECEA.png",
        "sbomCode": "3101040012502",
        "unitPrice": 559,
        "originalPrice": 799,
        "type": "group",
        "zIndex": 3
    },
    {
        "type": "null"
    }
  ];
  const originWidth: number = Dimensions.get('window').width;
  const originHeight: number = Dimensions.get('window').height;
  const isPad = originWidth > 640;
  const itemWidth = isPad ? 251 : 160;
  const itemHeight = isPad ? 414 : 264;
  
  const imgListView = imgList.map((item: any, tindex: number) => {
    return (
      <View
        key={'renderImg-itemImg' + tindex}
      >
        <Image
          source={{ uri: item.uri}}
          style={[
            { width: itemWidth, height: itemHeight },
          ]}
          // @ts-ignore
          isHighQuality={true}
          resizeWidth={itemWidth}
          imgStyleHeight={itemHeight}
          resizeMode={'contain'}
        />
      </View>
    );
  });
  const boxHeight = { height: itemHeight };
  return (
    <View style={{ width: originWidth, height: originHeight }}>
      <ScrollView
        key={'cardListViewscrollView_'}
        style={[boxHeight, { width: originWidth }]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        overScrollMode={'never'}
        bounces={false}
        snapToInterval={originWidth / 2}
        
        disableIntervalMomentum={false}
        decelerationRate={ 0.8}
        pagingEnabled={ true}
      >
        {imgListView}
      </ScrollView>
    </View>
  );
};
export default App;
