/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';
import type { ViewToken } from 'react-native/Libraries/Lists/ViewabilityHelper';

import * as React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
} from 'react-native';
const DATA = [
  {
    id: '1',
    title: 'Item_1',
  },
  {
    id: '2',
    title: 'Item_2',
  },
  {
    id: '3',
    title: 'Item_3',
  },
  {
    id: '4',
    title: 'Item_4',
  },
  {
    id: '5',
    title: 'Item_5',
  },
  {
    id: '6',
    title: 'Item_6',
  },
  {
    id: '7',
    title: 'Item_7',
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function FlatList_viewabilityConfigCallbackPairs(): React.Node {
  const ref = React.useRef < any > (null);
  const [outputOne, setOutputOne] = React.useState('');
  const [outputTwo, setOutputTwo] = React.useState('');

  const ItemsChangedHandleOne = React.useCallback(
    (info: { changed: Array<ViewToken>, viewableItems: Array<ViewToken>, }) =>
      setOutputOne(
        info.viewableItems
          .filter(viewToken => viewToken.index != null && viewToken.isViewable)
          .map(viewToken => viewToken.item.title)
          .join(', '),
      ),
    [setOutputOne],
  );
  const ItemsChangedHandleTwo = React.useCallback(
    (info: { changed: Array<ViewToken>, viewableItems: Array<ViewToken>, }) =>
      setOutputTwo(
        info.viewableItems
          .filter(viewToken => viewToken.index != null && viewToken.isViewable)
          .map(viewToken => viewToken.item.title)
          .join(', '),
      ),
    [setOutputTwo],
  );

  const viewabilityConfigPairs = React.useRef([
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
        minimumViewTime: 1000, // 至少停留1000毫秒
        viewAreaCoveragePercentThreshold: 100, // 100%出现在屏幕中认为是show
        waitForInteraction: true,
      },
      onViewableItemsChanged: ItemsChangedHandleTwo
    }]);

  return (
    <View>
      <View style={styles.textStyle}>
        <Text style={{ lineHeight: 20 }}>方法说明: ViewabilityConfig/onViewableItemsChanged的键值对列表，满足ViewabilityConfig条件，回调onViewableItemsChanged</Text>
      </View>
      <View style={{ ...styles.viewStyle, height: 150 }}>
        <View style={styles.noteStyle}>
          <Text style={{ lineHeight: 30 }}>预期效果：</Text>
          <Text style={{ lineHeight: 20 }}>输出一:停留300毫秒且10%出现在屏幕中的Item{'\n'}输出二：停留1000毫秒且100%出现在屏幕中的Item</Text>
        </View>
      </View>
      <View style={styles.viewStyle}>
        <View testID="test_container" style={styles.testContainer}>
          <Button onPress={() => { ref.current.scrollToEnd() }}
            title='scrollToEnd' />
          <Text style={{ paddingTop: 10, paddingLeft: 10 }}>实际效果:</Text>
        </View>
        <Text style={{ paddingTop: 10, paddingLeft: 10, color: 'blue' }}>输出一:{outputOne}</Text>
        <Text style={{ paddingTop: 10, paddingLeft: 10, color: 'blue' }}>输出一:{outputTwo}</Text>
        <FlatList
          ref={ref}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          data={DATA}
          viewabilityConfigCallbackPairs={viewabilityConfigPairs.current}
        />
      </View>
    </View>
  );
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