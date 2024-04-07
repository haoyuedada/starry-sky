import React, { useRef } from 'react';
import {
  Animated,
  PanResponder,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  const pan = new Animated.ValueXY()

  const panResponder = 
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e) => {
        console.log("onPanResponderMove ~ e:")
      },
      onPanResponderRelease: () => {
      },
      onShouldBlockNativeResponder: () => false,
    });

  return (
    <View style={styles.scrollview} horizontal pagingEnabled>
      <View style={[styles.base, styles.view1]}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            // backgroundColor: `rgba(0,0,0,0)`,
            // backgroundColor: 'transparent',
          }}
          {...panResponder.panHandlers}>
        </View>
      </View>
      <View style={[styles.base, styles.view2]} />
      <View style={[styles.base, styles.view1]} />
      <View style={[styles.base, styles.view2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    backgroundColor: 'transprent',
  },
  view2: {
    backgroundColor: 'powderblue',
  },
  base: {
    height: 400,
    width: 300,
  },
  scrollview: {
    borderWidth: 2,
    borderColor: 'black',
    height: 400,
    width: 300,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default App