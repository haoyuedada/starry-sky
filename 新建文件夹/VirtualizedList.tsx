import React, { useRef, useState, useEffect } from 'react';

export function VirtualizedList_hasMore(): React.Node {
    const ref = React.useRef<any>(null);
    const window = useWindowDimensions();

    const [output, setOutput] = React.useState('isMore false');
    const [exampleProps, setExampleProps] = React.useState({
      isMore: false,
      });

    const getItemCount = (_data) => 1000;
    const getItem = (_data, index) => ({
      id: Math.random().toString(12).substring(0),
      title: `Item ${index + 1}`,
    });
    const Item = ({title}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

    const _hasMore = () => {
      
      if(ref.current.hasMore()){
        setExampleProps({
          isMore: !exampleProps.isMore,
        });
      }
    }
 
  return (
    <View>
      <View style={styles.textStyle}>
        <Text style={{ lineHeight: 20 }}>属性值:使用ref绑定在VirtualizedList上面,调用hasMore方法</Text>
      </View>
      <View style={styles.viewStyle}>
        <View style={styles.noteStyle}>
          <Text style={{ lineHeight: 30 }}>预期效果：</Text>
          <Text style={{ lineHeight: 20 }}>当点击Toggle的button时,会调用_hasMore方法来判断是否有更多的数据需要加载,返回值为true时,HMLog中会返回字符串:RNOH---hasMore-true</Text>
          <Text style={{ lineHeight: 30 }}>且按钮的title会变为toggle true</Text>
        </View>
      </View>
      <View style={styles.viewStyle}>
        <View testID="test_container" style={styles.testContainer}>
          <Text style={{ paddingTop: 10, paddingLeft: 10 }}>实际效果:</Text>
          <Button
            title='Toggle'
            onPress={_hasMore}
            title={exampleProps.isMore ? 'Toggle true' : 'Toggle false'}
          ></Button>
        </View>
        <VirtualizedList
          ref={ref}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          inverted={exampleProps.inverted}
        />
      </View>

    </View>
  )
}