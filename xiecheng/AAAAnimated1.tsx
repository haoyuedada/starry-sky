import React, { Component } from 'react';
import { View, PanResponder, StyleSheet, Animated, Text, ScrollView } from 'react-native';

class PanResponderExample extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const anim = new Animated.Value(0)
        
        return (
            <View style={styles.container}>
                <Text>8.event动画&&EventConfig</Text>
                <Text>属性值分别为：scale 0.5-2，rotate 0-720°，top -100-400</Text>
                <Text>预期效果：</Text>
                <Text>滑动下方滑块蓝色方块会同步进行旋转</Text>
                <Text>实际效果：</Text>
                <View>
                    <View>
                        <Animated.View
                            style={[
                                styles.viewBlock,
                                {
                                    transform: [
                                        {
                                            rotate: anim.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0deg', '1deg'],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        />
                        <Animated.ScrollView
                            horizontal
                            style={{ height: 100, marginTop: 16 }}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: anim } } }],
                                { useNativeDriver: true },
                            )}>
                            <View
                                style={{
                                    width: 600,
                                    backgroundColor: '#eee',
                                    justifyContent: 'center',
                                    paddingLeft: 100,
                                }}>
                                <Text>Scroll me sideways!</Text>
                            </View>
                        </Animated.ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
    },
    viewButton: {
      flexDirection: 'row',
    },
    viewBlock: {
      padding: 20,
      width: 100,
      height: 100,
      backgroundColor: '#61dafb',
    },
  });

export default PanResponderExample;