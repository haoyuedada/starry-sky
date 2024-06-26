import React, { Component } from 'react';
import { View, PanResponder, StyleSheet, Animated, Text, ScrollView } from 'react-native';

class PanResponderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panResponder: undefined,
    };
  }

  componentDidMount() {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      // 手指放到屏幕上时
      onPanResponderGrant: (evt, gestureState) => {
        console.log('onPanResponderGrant');
      },

      // 手指在屏幕上移动时
      onPanResponderMove: (evt, gestureState) => {
        console.log('onPanResponderMove');
      },

      // 手指离开屏幕时
      onPanResponderRelease: (evt, gestureState) => {
        console.log('onPanResponderRelease');
      },

      // 如果其他组件想成为响应者，取消它
      onPanResponderTerminationRequest: () => true,

      // 其他组件成为了新的响应者
      onPanResponderTerminate: (evt, gestureState) => {
        console.log('onPanResponderTerminate');
      },

      // 当一个新的触摸点被识别后, 是否让当前响应者成为其他新触摸点的响应者
      onShouldBlockNativeResponder: () => true,
    });

    this.setState({ panResponder: this._panResponder });
  }

  render() {
    return (
        <Animated.View
          {...this.state.panResponder?.panHandlers}
          style={styles.container}
        >
          <Text>123</Text>
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: 'red',
    marginTop: 200,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default PanResponderExample;