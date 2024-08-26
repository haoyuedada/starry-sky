import React, { useContext, useEffect, useState, useRef } from "react";
import { View, Text, FlatList as RNFlatList } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import StickyFlashList from './StickyFlashList';

const generateArray = (size: number) => {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = i;
  }
  return arr;
};
const renderItem = ({ item }) => {
  return (
    <View style={{ width: '100%', height: 40, margin: 10, backgroundColor: 'green', flexDirection: 'row' }}>
      <Text>{item}</Text>
    </View>
  );
}

const headerComponent = ()=>{
  return (
      <StickyFlashList.StickyHeader
        style={{ width: '100%', height: 40, margin: 10, backgroundColor: 'blue', flexDirection: 'row' }}>
        <View >
          <Text>head</Text>
        </View>
      </StickyFlashList.StickyHeader>
  );
}

export default function TopShaked() {
  let listData = generateArray(300);
  const flashListRef = useRef<FlashList<number> | null>(null);
  return (
    <StickyFlashList
      listRef={flashListRef}
      // ref={flashList}
      data={listData}
      keyExtractor={(_item, index) => String(index)}
      renderItem={renderItem}
      estimatedItemSize={40}
      // StickyHeaderComponent={}    
      // stickyHeaderHiddenOnScroll={}
      // stickyHeaderIndices={[0]}  
      // stickyHeaderIndices={[]} 
      invertStickyHeaders={false}
      ListHeaderComponent={ headerComponent }   
    />
  
  );
}