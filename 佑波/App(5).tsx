import React from "react";
import { View, Dimensions, ScrollView, Image } from "react-native";
// import FastImage from "react-native-fast-image";

const App = () => {
  const imgList = [
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202410/displayProduct/10086707901849/800_800_a_mobileEFC513D129AD8FD5F25EDAB3E0617A25.png",
      startDate: 1730376000000,
      endDate: 1731340799000,
      maxSize: 1920,
      isVideo: true,
      video:
        "https://vod.vmall.com/asset/85d17ec7d28593e0e4fa8cf91df667c7/play_video/236d63bfb50ed6f963cf2b335623958e_2.mp4",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_906F8D997AEE5B1F3046A4AD2C8EC0F5.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_17B0441FCB19C9414A366AD661A72354.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_AEB41D4841675B782603DFE0AECE8408.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_5670502FEF5A1F44BAFE2C5A976B082E.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202404/displayProduct/29010100904/group/800_800_C6D820A04B27EF911937C43207535844.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_6B8D5F86EF7732CA36996CDD0C59B407.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_81E8900C7F5DB64899B16D86F333BE54.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_D931F5225ED09A7D1709816B1FB10EFF.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_F33BE6BFE28E9425C206451634F9E40D.jpg",
      btnType: "Picture",
      isPoster: true,
    },
    {
      imgUri:
        "https://res.vmallres.com/pimages/uomcdn/CN/pms/202312/displayProduct/29010100904/group/800_800_C486388BEBF4F7941F14ABBED766060E.jpg",
      btnType: "Picture",
      isPoster: true,
    },
  ];

  const originWidth: number = Dimensions.get("window").width;
  const originHeight: number = Dimensions.get("window").height;
  const itemWidth = originWidth;
  const itemHeight = originWidth;
  let _currentPage = 0;
  const handleMomentumScrollEnd = (e: any) => {
    const scrollOffset = e.nativeEvent.contentOffset.x;
    const activePage = Math.round(scrollOffset / itemWidth);
    if (activePage !== _currentPage) {
      _currentPage = activePage;
    }
  };

  const imgListView = imgList.map((item: any, tindex: number) => {
    return (
      <View key={"renderImg-itemImg" + tindex}>
        <Image
          source={{ uri: item.imgUri }}
          style={[{ width: itemWidth, height: itemHeight }]}
          // @ts-ignore
          isHighQuality={true}
          resizeWidth={itemWidth}
          imgStyleHeight={itemHeight}
          resizeMode={"contain"}
        />
      </View>
    );
  });
  const boxHeight = { height: itemHeight };
  return (
    <View style={{ width: originWidth, height: originHeight }}>
      <ScrollView
        key={"cardListViewscrollView_"}
        style={[boxHeight, { width: originWidth }]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        overScrollMode={"never"}
        bounces={false}
        disableIntervalMomentum={false}
        decelerationRate={0.8}
        pagingEnabled={true}
        contentOffset={{
          x: _currentPage * itemWidth,
          y: 0,
        }}
        onMomentumScrollEnd={(e: any) => {
          handleMomentumScrollEnd(e);
        }}
      >
        {imgListView}
      </ScrollView>
    </View>
  );
};
export default App;
