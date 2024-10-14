/**
 * Created by Niki on 2024/9/18 19:49.
 * Email: m13296644326@163.com
 */

import React from 'react';
import {
    StyleSheet,
    FlatList,
    RefreshControl,
    Text, View,
} from 'react-native';

const data = [...Array(100).keys()]

export default class FlatListDemo extends React.PureComponent {

    state = {
        isRefreshing: false,
    }

    renderItem = ({ item, index }) => {
        return (
            <Text style={{
                height: 60,
                lineHeight: 50,
                textAlign: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
                backgroundColor: 'white',
                color: '#333',
                fontSize: 16,
            }}>第{item}个元素</Text>
        )
    }

    onRefresh = () => {
        this.setState({
            isRefreshing: true,
        })
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
            })
        }, 2000)
    }

    render() {
        const { isRefreshing } = this.state;
        return (
            <React.Fragment>
                <View style={{ height: 40, backgroundColor: 'cyan' }}/>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    refreshControl={<RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={this.onRefresh}
                    />}
                />
            </React.Fragment>
        )
    }

}
