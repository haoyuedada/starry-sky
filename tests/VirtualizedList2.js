import React from 'react';
import { View, Text, ScrollView, useWindowDimensions, Button, VirtualizedList, StyleSheet } from 'react-native';
import type { ViewToken } from 'react-native/Libraries/Lists/ViewabilityHelper';

export default function VirtualizedList_viewabilityConfigCallbackPairs(): React.Node {
  const ref = React.useRef(null);
  const window = useWindowDimensions();
  const [output, setOutput] = React.useState(' ');

  const ItemsChangedHandleOne = React.useCallback(
    (info: { changed: Array<ViewToken>, viewableItems: Array<ViewToken>, ...}) =>
setOutput(
  info.viewableItems
    .filter(viewToken => viewToken.index != null && viewToken.isViewable)
    .map(viewToken => viewToken.item.title)
    .join(', '),
),
  [setOutput],
  );
const onTest = () => {
  ref.current.scrollToEnd();
}

const viewabilityConfigPairs = [
  {
    viewabilityConfig: {
      minimumViewTime: 300, // 至少停留300毫秒
      viewAreaCoveragePercentThreshold: 10, // 10%出现在屏幕中认为是show
      waitForInteraction: true,
    },
    onViewableItemsChanged: ItemsChangedHandleOne
  },
  {
    viewabilityConfig: {
      minimumViewTime: 300, // 至少停留300毫秒
      viewAreaCoveragePercentThreshold: 100, // 100%出现在屏幕中认为是show
      waitForInteraction: true,
    },
    onViewableItemsChanged: ItemsChangedHandleOne
  }];

const getItemCount = (_data) => 12;
const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
return (
  <View>


    <View style={styles.textStyle}>
      <Text style={{ lineHeight: 20 }}>属性值:包含viewabilityConfig和onViewableItemsChanged的两个对象数组</Text>
    </View>
    <View style={styles.viewStyle}>
      <View style={styles.noteStyle}>
        <Text style={{ lineHeight: 30 }}>预期效果：</Text>
        <Text style={{ lineHeight: 20 }}>当滚动视图时,根据配置了viewabilityConfigCallbackPairs可视区域回调，符合其中定义调用对应的属性</Text>
      </View>
      {/* <Image style={{marginTop:8,marginLeft:10}} source={require('../../../assets/VirtualizedList-onViewableItemsChanged.PNG.PNG')}></Image> */}
    </View>
    <View style={styles.viewStyle}>
      <View testID="test_container" style={styles.testContainer}>
        <Text style={{ paddingTop: 10, paddingLeft: 10 }}>实际效果:</Text>
        <Text>{output}</Text>
        <Button
          title='Toggle'
          onPress={onTest}
        ></Button>
      </View>
      <VirtualizedList
        ref={ref}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item, index) => item + index}
        getItemCount={getItemCount}
        getItem={getItem}
        viewabilityConfigCallbackPairs={viewabilityConfigPairs}
      />
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  viewStyle: {
    width: 300,
    height: 240,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    marginLeft: 40,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 40,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  textStyle: {
    padding: 20,
    textAlign: 'left',
    lineHeight: 30
  },
  noteStyle: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  testContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f7ff',
    height: 40,
  },
})
