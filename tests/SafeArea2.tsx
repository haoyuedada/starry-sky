import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { NativeTouchEvent } from 'react-native\Libraries\Types\CoreEventTypes';


export default function App() {
    const [timesTouch, setTimesTouch] = useState(0);
    const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
    let textLog = 'ready';
    if (timesTouch > 1) {
      textLog = timesTouch + 'x run done!';
    } else if (timesTouch > 0) {
      textLog = 'run done!';
    }
    return (
      <View>
        <Text>属性值：{'onStartShouldSetResponder={(event) => {setTimesTouch(current => current + 1);}}'}</Text>
        <Text>预期结果：在粉红方框范围内触摸启动，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
        <Text>实际结果：</Text>
        <SafeAreaView
          style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
          onStartShouldSetResponder={(event) => {
            setTimesTouch(current => current + 1);
            setTouchEventContext(event.nativeEvent);
          }}
        >
          <Text>Touch Me</Text>
        </SafeAreaView>
        <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
          <Text>log文本：</Text>
          <Text style={{paddingTop: 5}}>{textLog}</Text>
        </View>
        <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
          <Text>TouchEvent：</Text> 
          <Text>{JSON.stringify(touchEventContext)}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    margin: 10,
    flex: 1,
    height: 100, // 固定高度
    justifyContent: 'center',
    alignItems: 'center',
  },
});