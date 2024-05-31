/**
 * Sample Ctrip React Native App
 * http://crn.site.ctripcorp.com/
 * @flow
 */

'use strict';

import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    findNodeHandle,
    Alert
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingHorizontal: 20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#333333',
    },
});

export default class Page1 extends React.Component {
    constructor(props: any) {
        super(props);
    }

    testRef: View | null = null;
    testRef2: View | null = null;

    render() {
        return (
            <View style={{ marginTop: 200 }}>
                <View >
                    <Text style={styles.welcome}>Welcome to Page12</Text>

                    <View
                        ref={ref => (this.testRef = ref)}
                        style={{ width: 100, height: 100, backgroundColor: 'red' }}>
                        <View
                            ref={ref => (this.testRef2 = ref)}
                            style={{ width: 50, height: 50, backgroundColor: 'blue', marginTop: 20 }}
                        />
                    </View>
                    <Button
                        title="测试按钮 一"
                        onPress={() => {
                            this.testRef2?.measureLayout(
                                findNodeHandle(this.testRef)!,
                                (x, y, width, height) => {
                                    //   Toast.show(
                                    //     'measureLayout: ' +
                                    //       x +
                                    //       ' ' +
                                    //       y +
                                    //       ' ' +
                                    //       width +
                                    //       ' ' +
                                    //       height,
                                    //   );
                                    Alert.alert('measureLayout: ' +
                                        x +
                                        ' ' +
                                        y +
                                        ' ' +
                                        width +
                                        ' ' +
                                        height,)
                                },
                                () => {
                                    //   Toast.show('measureLayout failed');
                                    Alert.alert('measureLayout failed');
                                },
                            );
                        }}
                    />
                </View>
            </View>
        );
    }
}
