import React, { useRef } from 'react';
import { TextInput, View, Button } from 'react-native';

export function CHYTextInput(){
    const textInputRef = useRef(null);

    const updatePlaceholder = () => {
        // 获取 TextInput 的原生引用
        const input = textInputRef.current;

        // 使用 setNativeProps 直接修改 placeholder属性
        setInterval(() => {
            console.log("excute setNativeProps")
            input.setNativeProps({
                placeholder: 'New Placeholder Text'
            });
        }, 5)
    };

    return (
        <View style={{backgroundColor: '#fff'}}>
            <TextInput style={{width: 200, height: 50}} ref={textInputRef} placeholder="Original Placeholder Text" />
            <Button title="Update Placeholder" onPress={updatePlaceholder} />
        </View>
    );
};