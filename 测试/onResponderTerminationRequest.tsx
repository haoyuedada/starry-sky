import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Pressable } from 'react-native';

const App = () => {
    const [timesTouch, setTimesTouch] = useState(0);
    const [touchEventContext, setTouchEventContext] =
        useState<NativeTouchEvent>(null);
    const [log, setLog] = useState('');
    const [changeValue, setChangeValue] = useState(false);
    let textLog = 'ready';
    if (timesTouch > 1) {
        textLog = timesTouch + 'x ' + log;
    } else if (timesTouch > 0) {
        textLog = log;
    }
    return (
        <View style={{marginTop: 200}}>
            <Text>属性值：{'onResponderTerminationRequest={() => changeValue}'}</Text>
            <Text>预期结果：</Text>
            <Text>
                1.当changeValue的值为false时，在蓝色方框内触摸移动，log文本run
                done1前面的次数增加，例如：run done1变为2x run done1
            </Text>
            <Text>
                2.当changeValue的值为true时，在蓝色方框内触摸移动,log文本run
                done2前面的次数增加，例如：run done2变为2x run done2
            </Text>
            <Text>实际结果：</Text>
            <Pressable
                style={{ backgroundColor: '#AFEEEE', borderRadius: 5 }}
                onPress={() => {
                    setChangeValue(!changeValue);
                    setTimesTouch(0);
                    setTouchEventContext(null);
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}
                >
                    按压切换changeValue：{JSON.stringify(changeValue)}
                </Text>
            </Pressable>
            <View
                style={{ flex: 1, borderColor: 'pink', borderWidth: 5 }}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderReject={(event) => {
                    setTimesTouch((current) => current + 1);
                    setTouchEventContext(event.nativeEvent);
                    setLog('run done1');
                }}
            >
                <Text>Touch Me</Text>
                <View
                    style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5 }}
                    onStartShouldSetResponder={() => true}
                    onMoveShouldSetResponder={() => true}
                    onResponderTerminationRequest={() => changeValue}
                    onResponderTerminate={(event) => {
                        setTimesTouch((current) => current + 1);
                        setTouchEventContext(event.nativeEvent);
                        setLog('run done2');
                    }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginRight: 10 }}>B Touch me</Text>
                        <Text>C Touch me</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    padding: 10,
                    width: '100%',
                    height: 'auto',
                    borderColor: '#527FE4',
                    borderWidth: 5,
                    backgroundColor: '#f9f9f9',
                }}
            >
                <Text>log文本：</Text>
                <Text style={{ paddingTop: 5 }}>{textLog}</Text>
            </View>
            <View
                style={{
                    padding: 10,
                    width: '100%',
                    height: 'auto',
                    borderColor: '#527FE4',
                    borderWidth: 5,
                    backgroundColor: '#f9f9f9',
                }}
            >
                <Text>TouchEvent：</Text>
                <Text>{JSON.stringify(touchEventContext)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    child: {
        padding: 20,
        backgroundColor: 'lightgreen',
    },
});

export default App;