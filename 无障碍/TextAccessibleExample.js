/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */
import {
    Text,
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
const accessibilityRoleList = [
    { type: 'adjustable', expect: '提示当前内容是一个进度条', value: '元素具有可调整的特性' },
    { type: 'alert', expect: '提示当前内容是一个alert', value: '警告' },
    { type: 'button', expect: '提示当前内容是一个按钮', value: 'button' },
    { type: 'checkbox', expect: '提示当前内容是一个复选框', value: 'checkbox' },
    { type: 'combobox', expect: '提示当前内容是一个combobox', value: 'combobox' },
    { type: 'header', expect: '提示当前内容是一个标题', value: '内容区域的头部' },
    { type: 'image', expect: '提示当前内容是一个image', value: '图片' },
    { type: 'imagebutton', expect: '提示当前内容是一个button、image', value: '元素应被视为按钮并且也是图像时使用' },
    { type: 'link', expect: '提示当前内容是一个link', value: '链接' },
    { type: 'list', expect: '', value: '' },
    { type: 'menu', expect: '提示当前内容是一个menu', value: '菜单' },
    { type: 'menubar', expect: '提示当前内容是一个menubar', value: '菜单栏' },
    { type: 'menuitem', expect: '提示当前内容是一个menuitem', value: '菜单项' },
    { type: 'none', expect: '', value: '' },
    { type: 'keyboardkey', expect: '', value: '' },
    { type: 'progressbar', expect: '提示当前内容是一个progressbar', value: '进度条' },
    { type: 'radio', expect: '提示当前内容是一个单选按钮', value: 'radio' },
    { type: 'radiogroup', expect: '提示当前内容是一个radiogroup', value: '表示一组单选按钮' },
    { type: 'scrollbar', expect: '提示当前内容是一个scrollbar', value: '滚动条' },
    { type: 'search', expect: '提示当前内容是一个编辑框', value: '用作搜索框的文本框' },
    { type: 'spinbutton', expect: '提示当前内容是一个spinbutton', value: '表示打开选项列表的按钮' },
    { type: 'summary', expect: '提示当前内容是一个summary', value: '提供当前的简要总结信息的元素' },
    { type: 'switch', expect: '提示当前内容是一个关闭开关', value: '表示可以打开和关闭的开关' },
    { type: 'tab', expect: '提示当前内容是一个tab', value: 'tab标签' },
    { type: 'tablist', expect: '提示当前内容是一个tablist', value: '选项卡的列表' },
    { type: 'text', expect: '', value: '' },
    { type: 'timer', expect: '提示当前内容是一个timer', value: '定时器' },
    { type: 'togglebutton', expect: '提示当前内容是一个关闭开关', value: '切换按钮' },
    { type: 'toolbar', expect: '提示当前内容是一个toolbar', value: '工具栏' },
]
const roleList = [
    { type: 'alert', expect: '提示alert', value: '警告' },
    { type: 'alertdialog', expect: '', value: '' },
    { type: 'application', expect: '', value: '' },
    { type: 'banner', expect: '', value: '' },
    { type: 'button', expect: '提示当前内容是一个按钮', value: '按钮' },
    { type: 'cell', expect: '', value: '' },
    { type: 'checkbox', expect: '提示当前内容是一个复选框', value: '复选框' },
    { type: 'columnheader', expect: '', value: '' },
    { type: 'combobox', expect: '', value: '' },
    { type: 'complementary', expect: '', value: '' },
    { type: 'contentinfo', expect: '', value: '' },
    { type: 'definition', expect: '', value: '' },
    { type: 'dialog', expect: '', value: '' },
    { type: 'directory', expect: '', value: '' },
    { type: 'document', expect: '', value: '' },
    { type: 'feed', expect: '', value: '' },
    { type: 'figure', expect: '', value: '' },
    { type: 'form', expect: '', value: '' },
    { type: 'grid', expect: '', value: '' },
    { type: 'group', expect: '', value: '' },
    { type: 'heading', expect: '提示当前内容是一个标题', value: '标题' },
    { type: 'img', expect: '', value: '' },
    { type: 'link', expect: '', value: '' },
    { type: 'list', expect: '', value: '' },
    { type: 'listitem', expect: '', value: '' },
    { type: 'log', expect: '', value: '' },
    { type: 'main', expect: '', value: '' },
    { type: 'marquee', expect: '', value: '' },
    { type: 'math', expect: '', value: '' },
    { type: 'menu', expect: '提示当前内容是一个menu', value: '菜单' },
    { type: 'menubar', expect: '提示当前内容是一个menubar', value: '菜单栏' },
    { type: 'menuitem', expect: '提示当前内容是一个menuitem', value: '菜单项' },
    { type: 'meter', expect: '', value: '' },
    { type: 'navigation', expect: '', value: '' },
    { type: 'none', expect: '', value: '' },
    { type: 'note', expect: '', value: '' },
    { type: 'option', expect: '', value: '' },
    { type: 'presentation', expect: '', value: '' },
    { type: 'progressbar', expect: '提示当前内容是一个progressbar', value: '进度条' },
    { type: 'radio', expect: '提示当前内容是一个单选按钮', value: '单选' },
    { type: 'radiogroup', expect: '提示当前内容是一个radiogroup', value: '单选按钮组' },
    { type: 'region', expect: '', value: '' },
    { type: 'row', expect: '', value: '' },
    { type: 'rowgroup', expect: '', value: '' },
    { type: 'rowheader', expect: '', value: '' },
    { type: 'scrollbar', expect: '提示当前内容是一个scrollbar', value: '滚动条' },
    { type: 'searchbox', expect: '', value: '' },
    { type: 'separator', expect: '', value: '' },
    { type: 'slider', expect: '提示当前内容是一个进度条', value: '	滑动条' },
    { type: 'spinbutton', expect: '提示当前内容是一个spinbutton', value: '微调' },
    { type: 'status', expect: '', value: '' },
    { type: 'tab', expect: '提示当前内容是一个tab', value: 'tab标签' },
    { type: 'table', expect: '', value: '' },
    { type: 'tablist', expect: '提示当前内容是一个tablist', value: '提示文本' },
    { type: 'tabpanel', expect: '', value: '' },
    { type: 'term', expect: '', value: '' },
    { type: 'timer', expect: '提示当前内容是一个timer', value: '计数' },
    { type: 'toolbar', expect: '提示当前内容是一个toolbar', value: '工具栏' },
    { type: 'tooltip', expect: '', value: '' },
    { type: 'tree', expect: '', value: '' },
    { type: 'treegrid', expect: '', value: '' },
    { type: 'treeitem', expect: '', value: '' },
]
function TextAccessibleExample() {
    return (
        <ScrollView>
            <View title="1.accessible">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessible</Text>
                    <Text style={{ padding: 3 }}>预期效果:能选中下方黑色背景文本,屏幕朗读“文本1”,不能选中下方天蓝色背景文本 </Text>
                    <Text accessible={true} style={styles.text}>文本1</Text>
                    <Text accessible={false} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="2.aria-label">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:aria-label</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“测试文本” </Text>
                    <Text accessible={true} aria-label="测试文本" style={styles.text}>文本1</Text>
                </View>
            </View>

            <View title="3.aria-busy">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:aria-busy</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“busy”;选中下方天蓝色背景文本,屏幕朗读“文本2” </Text>
                    <Text accessible={true} aria-busy={true} style={styles.text}>文本1</Text>
                    <Text accessible={true} aria-busy={false} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="4.aria-checked">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:aria-checked</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“未选中文本1,单机双击即可选中”;
                        选中下方天蓝色背景文本,屏幕朗读“已选中文本2,单机双击即可取消选中”;
                        选中下方绿背景文本,屏幕朗读“mixed”</Text>
                    <Text accessible={true} aria-checked={false} style={styles.text}>文本1</Text>
                    <Text accessible={true} aria-checked={true} style={styles.text1}>文本2</Text>
                    <Text accessible={true} aria-checked='mixed' style={styles.text2}>文本3</Text>
                </View>
            </View>

            <View title="5.aria-disabled">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:aria-disabled</Text>
                    <Text accessible={true} style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,无屏幕朗读“文本1,不可点击”；选中下方天蓝色背景文本,屏幕朗读“文本2” </Text>
                    <Text accessible={true} aria-disabled={true} style={styles.text}>文本1</Text>
                    <Text accessible={true} aria-disabled={false} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="6.aria-expanded">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:aria-expanded</Text>
                    <Text accessible={true} style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“expanded”;选中下方天蓝色背景文本,屏幕朗读“alive” </Text>
                    <Text accessible={true} aria-expanded={true} style={styles.text}>文本1</Text>
                    <Text accessible={true} aria-expanded={false} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="7.role">
                {roleList.map((item, index) => (
                    <View accessible={true} key={index} style={{ marginVertical: 5 }}>
                        <Text>role属性值:{item.type}</Text>
                        <Text>预期结果:点击黑色背景文本,{item.expect}</Text>
                        <Text>实际结果:</Text>
                        <Text accessible={true} role={item.type} style={styles.text}></Text>
                    </View>
                ))}
            </View>

            <View title="8.accessibilityHint">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityHint</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“这是个Text组件,提示:没有文本” </Text>
                    <Text
                        accessible={true}
                        aria-label="这是个Text组件"
                        accessibilityHint="提示:没有文本"
                        style={styles.text}></Text>
                </View>
            </View>

            <View title="9.accessibilityLanguage">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityLanguage</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“文本1” </Text>
                    <Text accessible={true} accessibilityLanguage="it-IT" style={styles.text}>文本1</Text>
                </View>
            </View>

            <View title="10.accessibilityLabel">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityLabel</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“这是个Text组件” </Text>
                    <Text accessible={true} accessibilityLabel='这是个Text组件' style={styles.text}>文本1</Text>
                </View>
            </View>

            <View title="11.accessibilityRole">
                {accessibilityRoleList.map((item, index) => (
                    <View accessible={true} key={index} style={{ marginVertical: 5 }}>
                        <Text>accessibilityRole属性值:{item.type}</Text>
                        <Text>预期结果:点击黑色背景文本,{item.expect}</Text>
                        <Text>实际结果:</Text>
                        <Text accessible={true} accessibilityRole={item.type} style={styles.text}></Text>
                    </View>
                ))}
            </View>

            <View title="12.accessibilityState-disabled">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityState-disabled</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“文本1,不可点击”;选中下方天蓝色背景文本,屏幕朗读“文本2” </Text>
                    <Text accessible={true} accessibilityState={{ 'disabled': true }} style={styles.text}>文本1</Text>
                    <Text accessible={true} accessibilityState={{ 'disabled': false }} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="13.accessibilityState-selected">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityState-selected</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“已选中文本1”;选中下方天蓝色背景文本,屏幕朗读“文本2” </Text>
                    <Text accessible={true} accessibilityState={{ 'selected': true }} style={styles.text}>文本1</Text>
                    <Text accessible={true} accessibilityState={{ 'selected': false }} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="14.accessibilityState-checked">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityState-checked</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“已选中文本1,单指双击即可取消选中”;
                        选中下方天蓝色背景文本,屏幕朗读“未选中文本2,单指双击即可选中” </Text>
                    <Text accessible={true} accessibilityState={{ 'checked': true }} style={styles.text}>文本1</Text>
                    <Text accessible={true} accessibilityState={{ 'checked': false }} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="15.accessibilityState-busy">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityState-busy</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“busy”;选中下方天蓝色背景文本,屏幕朗读“文本2” </Text>
                    <Text accessible={true} accessibilityState={{ 'busy': true }} style={styles.text}>文本1</Text>
                    <Text accessible={true} accessibilityState={{ 'busy': false }} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="16.accessibilityState-expanded">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityState-expanded</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本,屏幕朗读“expanded”;选中下方天蓝色背景文本,屏幕朗读“alive” </Text>
                    <Text accessible={true} accessibilityState={{ 'expanded': true }} style={styles.text}>文本1</Text>
                    <Text accessible={true} accessibilityState={{ 'expanded': false }} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="17.accessibilityActions&onAccessibilityAction">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:accessibilityActions&onAccessibilityAction</Text>
                    <Text>预期结果:选中下方黑色背景文本执行以下操作，触发对应弹框</Text>
                    <Text style={{ marginVertical: 5 }}>1.双击文本,弹出内容为“activate action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>2.双击文本并在屏幕上按住一根手指,弹出内容为“longpress action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>3.在iOS上,当组件具有角色并且用户将焦点放在该组件上并向上滑动时或
                        在Android上,当用户将辅助功能焦点放在组件上并按下调高音量按钮时,弹出内容为“increment action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>4.在iOS上,当组件具有角色并且用户将焦点放在该组件上并向下滑动时或
                        在Android上,当用户将辅助功能焦点放在组件上并按下调低音量按钮时,弹出内容为“decrement action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>5.双指双击文本,弹出内容为“magicTap action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>6.双指在文本上执行划动手势（左、右、左）,弹出内容为“escape action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>7.执行剪切,弹出内容为“cut action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>8.执行三指双击,弹出内容为“copy action success”的弹框</Text>
                    <Text style={{ marginVertical: 5 }}>9.执行粘贴,弹出内容为“paste action success”的弹框</Text>
                    <Text
                        accessible={true}
                        style={[styles.text, { height: 200 }]}
                        accessibilityActions={[
                            { name: 'activate', label: 'activate' },
                            { name: 'longpress', label: 'longpress' },
                            { name: 'increment', label: 'increment' },
                            { name: 'decrement', label: 'decrement' },
                            { name: 'magicTap', label: 'magicTap' },
                            { name: 'escape', label: 'escape' },
                            { name: 'cut', label: 'cut' },
                            { name: 'copy', label: 'copy' },
                            { name: 'paste', label: 'paste' },
                        ]}
                        onAccessibilityAction={event => {
                            switch (event.nativeEvent.actionName) {
                                case 'activate':
                                    Alert.alert('Alert', 'activate action success');
                                    break;
                                case 'longpress':
                                    Alert.alert('Alert', 'longpress action success');
                                    break;
                                case 'increment':
                                    Alert.alert('Alert', 'increment action success');
                                    break;
                                case 'decrement':
                                    Alert.alert('Alert', 'decrement action success');
                                    break;
                                case 'magicTap':
                                    Alert.alert('Alert', 'magicTap action success');
                                    break;
                                case 'escape':
                                    Alert.alert('Alert', 'escape action success');
                                    break;
                                case 'cut':
                                    Alert.alert('Alert', 'cut action success');
                                    break;
                                case 'copy':
                                    Alert.alert('Alert', 'copy action success');
                                    break;
                                case 'paste':
                                    Alert.alert('Alert', 'paste action success');
                                    break;
                            }
                        }}>文本1</Text>
                </View>
            </View>

            <View title="18.allowFontScaling">
                <View accessible={true}>
                    <Text style={{ padding: 3 }}>属性值:allowFontScaling</Text>
                    <Text style={{ padding: 3 }}>预期效果:下方黑色背景文本会根据设备的字体设置进行缩放;天蓝色背景文本不会根据设备的字体设置进行缩放 </Text>
                    <Text allowFontScaling={true} style={styles.text}>文本1</Text>
                    <Text allowFontScaling={false} style={styles.text1}>文本2</Text>
                </View>
            </View>

            <View title="19.aria-selected">
                <View accessible={true} style={styles.box}>
                    <Text style={{ padding: 3 }}>属性值:aria-selected</Text>
                    <Text style={{ padding: 3 }}>预期效果:选中下方黑色背景文本屏幕朗读“已选中文本1”,选中蓝色背景文本屏幕朗读“文本2” </Text>
                    <Text accessible={true} aria-selected={true} style={styles.text}>文本1</Text>
                    <Text accessible={true} aria-selected={false} style={styles.text1}>文本2</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 24,
        lineHeight: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'black',
    },
    text1: {
        color: 'white',
        fontSize: 24,
        lineHeight: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'skyblue',
    },
    text2: {
        color: 'white',
        fontSize: 24,
        lineHeight: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: 'green',
    },
});

export default TextAccessibleExample;
