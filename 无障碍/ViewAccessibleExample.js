/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */
const { Text, Pressable, Switch, Alert, TouchableWithoutFeedback, TextInput, Button, StyleSheet, View, ScrollView } = require('react-native');
import { React, useState } from 'react';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';

const roleList = [
    { type: 'alert', expect: '提示alert', value: '警告' },
    { type: 'button', expect: '提示当前内容是一个按钮', value: '按钮' },
    { type: 'checkbox', expect: '提示当前内容是一个复选框', value: '复选框' },
    { type: 'heading', expect: '提示当前内容是一个标题', value: '标题' },
    { type: 'menu', expect: '提示当前内容是一个menu', value: '菜单' },
    { type: 'menubar', expect: '提示当前内容是一个menubar', value: '菜单栏' },
    { type: 'menuitem', expect: '提示当前内容是一个menuitem', value: '菜单项' },
    { type: 'progressbar', expect: '提示当前内容是一个progressbar', value: '进度条' },
    { type: 'radio', expect: '提示当前内容是一个单选按钮', value: '单选' },
    { type: 'radiogroup', expect: '提示当前内容是一个radiogroup', value: '单选按钮组' },
    { type: 'slider', expect: '提示当前内容是一个进度条', value: '	滑动条' },
    { type: 'spinbutton', expect: '提示当前内容是一个spinbutton', value: '微调' },
    { type: 'tab', expect: '提示当前内容是一个tab', value: 'tab标签' },
    { type: 'tablist', expect: '提示当前内容是一个tablist', value: '提示文本' },
    { type: 'timer', expect: '提示当前内容是一个timer', value: '计数' },
    { type: 'toolbar', expect: '提示当前内容是一个toolbar', value: '工具栏' },
]

const ANNOUNCEMENT_BY_PLATFORM_BY_ACCESSIBILITY_ROLE = new Map <
    AccessibilityRole,
    Record< 'harmony' | 'android', string | undefined >
> ()
            .set('none', { android: undefined, harmony: undefined })
            .set('button', { android: 'button', harmony: 'button' })
            .set('togglebutton', {
                android: 'switch',
                harmony: 'not ticked, that is(?) button',
            })
            .set('search', { android: 'edit box', harmony: 'edit box' })
            .set('searchbox', { android: 'searchbox', harmony: 'edit box' })
            .set('img', { android: 'img', harmony: 'edit box' })
            .set('image', { android: 'image', harmony: 'image' })
            .set('adjustable', {
                android: 'slider',
                harmony: 'null %, ...',
            })
            .set('imagebutton', { android: 'button, image', harmony: 'button' })
            .set('checkbox', { android: 'checkbox', harmony: 'not ticked, checkbox' })
            .set('progressbar', { android: 'progressbar', harmony: 'null %, progressbar' })
            .set('radio', { android: 'radio button', harmony: 'option button' })
            .set('scrollbar', { android: 'scrollbar', harmony: 'scrollbar' })
            .set('switch', { android: 'switch', harmony: 'not ticked, that is (?) button' })
            .set('list', { android: 'list', harmony: 'list' })
            .set('slider', { android: 'slider', harmony: undefined });


const ANNOUNCEMENT_BY_PLATFORM_BY_ROLE = new Map <
    Role,
    Record< 'harmony' | 'android', string | undefined >
          > ()
            .set('button', { android: 'button', harmony: 'button' })
            .set('img', { android: 'button', harmony: 'button' })
            .set('checkbox', { android: 'button', harmony: 'button' })
            .set('progressbar', { android: 'button', harmony: 'button' })
            .set('radio', { android: 'button', harmony: 'button' })
            .set('scrollbar', { android: 'button', harmony: 'button' })
            .set('switch', { android: 'button', harmony: 'button' })
            .set('list', { android: 'button', harmony: 'button' })
            .set('searchbox', { android: 'edit box', harmony: 'edit box' })
            .set('slider', {
                android: 'slider',
                harmony:
                    'null %, double tap and hold with one finger and swipe left or right to adjust the value',
            })
          

function ViewAccessibleExample() {
    const [firstChecked, setFirstChecked] = useState < boolean > (false);
    const [secondChecked, setSecondChecked] = useState < boolean > (false);
    const [message, setMessage] = useState('');
    const [escape, setEscape] = useState(false);
    const [isMagicTap, setMagicTap] = useState(false);
    const aria_lives = ['off', 'polite', 'assertive', 'rude'];
    const [aria_live, setAria_live] = useState('none');
    const [aria_checked, setAria_checked] = useState(true);
    const [aria_expanded, setAria_expanded] = useState(false);
    const [aria_hidden, setAria_hidden] = useState(true);
    const [aria_disabled, setAria_disabled] = useState(false);
    const [count, setCount] = useState(0);
    const checked = firstChecked && secondChecked;
    const mixed = firstChecked !== secondChecked;
    const [onAccessibilityTap, setOnAccessibilityTap] = useState('ready');
    const [messages, setMessages] = useState('');
    const accessibilityLiveRegions = ['none', 'polite', 'assertive'];
    const [accessibilityLiveRegion, setAccessibilityLiveRegion] = useState('none');
    const [aria_modal, setAria_modal] = useState(false);
    const [display, setDisplay] = useState("none");
    const [valueNow, setValueNow] = useState([50]);
    return (
        <ScrollView style={styles.container}>
            
            
            {Array.from(
                ANNOUNCEMENT_BY_PLATFORM_BY_ACCESSIBILITY_ROLE.entries(),
            ).map(([role, { android, harmony }]) => {
                return (
                    <View
                        key={role}
                        accessible
                        accessibilityRole={role}
                        style={{
                            padding: 16,
                            flexDirection: 'row',
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: 'silver',
                        }}>
                        <Text style={{ width: '33%' }} importantForAccessibility="no">
                            {role}
                        </Text>
                        <Text style={{ width: '33%' }} importantForAccessibility="no">
                            {android}
                        </Text>
                        <Text style={{ width: '33%' }} importantForAccessibility="no">
                            {harmony}
                        </Text>
                    </View>
                );
            })}
            
            <View style={styles.box}>
                <Text style={{ padding: 3 }, styles.title}>29.role</Text>
                <Text style={{ padding: 3 }}>预期结果：</Text>
                <Text>实际结果：</Text>
                <View>
                    {roleList.map((item, index) => (
                        <View key={index} style={{ paddingBottom: 10 }}>
                            <Text>属性值：{item.type}</Text>
                            <Text>预期结果：{item.expect}</Text>
                            <Text>实际结果：</Text>
                            <View
                                style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
                                accessible={true}
                                role={item.type}>
                                <Text style={{ padding: 10 }} >{ }</Text>
                            </View>
                        </View>
                    ))}
                </View>
                {Array.from(ANNOUNCEMENT_BY_PLATFORM_BY_ROLE.entries()).map(
            ([role, {android, harmony}]) => {
              return (
                <View
                  key={role}
                  accessible
                  role={role}
                  style={{
                    padding: 16,
                    flexDirection: 'row',
                    width: '100%',
                    borderBottomWidth: 1,
                    borderColor: 'silver',
                  }}>
                  <Text style={{width: '33%'}} importantForAccessibility="no">
                    {role}
                  </Text>
                  <Text style={{width: '33%'}} importantForAccessibility="no">
                    {android}
                  </Text>
                  <Text style={{width: '33%'}} importantForAccessibility="no">
                    {harmony}
                  </Text>
                </View>
              );
            },
          )}
            </View>
            
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 30,
        // backgroundColor: '#fff',
    },
    title: {
        fontSize: 18
    },
    box: {
        height: 'auto',
        marginBottom: 30,
        padding: 10,
        borderWidth: 2,
        borderColor: '#c1c1c1',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    squaresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'lightblue',
        margin: 4,
    },
    squareContent: {
        textAlignVertical: 'center',
        textAlign: 'center',
        height: '100%',
    },
    accessibilityContainer: {
        width: '100%',
        backgroundColor: 'gray',
    },
    accessibilityLayout: {
        width: '100%',
        height: 100,
        backgroundColor: 'lightblue',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    gridContainerSquare: {
        width: 150,
        height: 150,
        backgroundColor: 'lightblue',
        margin: 4,
    },
});

export default ({
    title: 'View',
    name: 'ViewAccessible',
    description:
        'Accessiblity about view',
    render: () => <ViewAccessibleExample />,
}: RNTesterModuleExample);
