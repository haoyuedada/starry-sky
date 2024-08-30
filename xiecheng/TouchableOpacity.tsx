import { TestSuite } from '@rnoh/testerino';
import { Alert, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function AlertTest() {
    return (
        <View
            style={{
                "borderTopColor": "#EEEEEE", "borderTopWidth": 1, "marginTop": 70, "paddingTop": 20, backgroundColor: 'red' 
            }}
        >
            <TouchableOpacity
                // style={{
                //     "borderTopColor": "#EEEEEE", "borderTopWidth": 1, "marginTop": 70, "paddingTop": 20, backgroundColor: 'red' 
                // }}
            >
                <Text style={{ "color": "#CCCCCC", "fontSize": 12 }}>请填写1位乘车人</Text>

                <View
                    style={[{ "position": "absolute", "bottom": 24, "right": 4 }]}
                >
                    <View
                        style={[{ "borderRadius": 4, "backgroundColor": "#111111", }]}
                    >
                        <Text style={[
                            { "color": "#fff", "height": 28 }
                        ]}>请注意核对乘车人信息</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    );
}