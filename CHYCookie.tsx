/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

export function CHYCookie(): JSX.Element {
    // 设置 Cookie
    fetch('https://httpbin.org/cookies/set/abc/123456', {
        method: 'GET',
    })
    .then(response => {
        // 获取 Cookie
        return fetch('https://httpbin.org/cookies', {
            method: 'GET'
        });
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    return (
        <SafeAreaView>
            <View style={{Headers: '34', asfa: 23}}>
                <Text>23234sdfghjkl3456789dfghjkldfghjkfghjkl</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
