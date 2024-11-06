import * as React from 'react';
import { Text, View } from 'react-native';

function TextDemo() {
    return (
        <View>
            <Text
                style={{ height: 200, backgroundColor: 'white', fontSize: 22, marginTop: 50 }}
            //加入importantForAccessibility该属性后，才能进行屏幕朗读
            //IOS不需要该属性
            importantForAccessibility='yes'
            >
                11
            </Text>
            <Text
                style={{ height: 200, backgroundColor: 'white', fontSize: 22, marginTop: 50 }}
            //加入importantForAccessibility该属性后，才能进行屏幕朗读
            //IOS不需要该属性
            importantForAccessibility='yes'
            >
                11
            </Text>
        </View>


    );
};

export default TextDemo;