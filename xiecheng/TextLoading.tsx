import React, { Component } from "react";
import { View, Text, } from 'react-native'

const defaultList = [
    {
        title: 'old'
    },
]

const newList = [
    {
        title: 'new'
    },
]

const TextComp = ({
    type,
    loading,
}) => {

    const productList = type === 'old' ? defaultList : newList

    return (
        <>
            {
                productList.map((item, index) => {
                    if (loading === true) {
                        console.log('chy loading', loading)
                        return (
                            <View key={index}>
                                <Text style={{ fontSize: 26 }} onTextLayout={({ nativeEvent: e }) => {
                                console.log('onTextLayout===1', index)
                            }}>1Loading...</Text>
                            </View>
                        )
                    }

                    return (
                        <Text
                            key={index}
                            style={{ marginRight: 4 }}
                            // @ts-ignore
                            onTextLayout={({ nativeEvent: e }) => {
                                console.log('onTextLayout===2', index)
                            }}
                        >
                            2{item.title}
                        </Text>
                    )
                })
            }
        </>
    )
}

export default class TextLayoutLoading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: defaultList,
            type: 'old',
            loading: false
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 200 }}>
                <Text onPress={() => {
                    if (this.state.type === 'old') {
                        this.setState({
                            type: 'new',
                            loading: true
                        })
                    } else {
                        this.setState({
                            type: 'old',
                            loading: true
                        })
                    }

                    setTimeout(() => {
                        this.setState({
                            loading: false,
                        })
                    }, 500)
                }}>
                    点击切换
                </Text>
                <TextComp type={this.state.type} loading={this.state.loading} />
            </View>
        )
    }
}
