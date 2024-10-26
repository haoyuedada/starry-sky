import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

const App = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 100,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{translateY}]}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default App;
