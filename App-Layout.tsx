import React, {Component} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';22

class App extends Component {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  state = {
    fadeAnim: new Animated.Value(0),2
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: this.state.fadeAnim,
            },
          ]}
          onLayout={this._onLayout}>
          <Text style={styles.fadingText} ref={component => this.fakeView = component}>Fading View!</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={this.fadeIn} />
          <Button title="Fade Out View" onPress={this.fadeOut} />
        </View>
      </SafeAreaView>
    );
  }

  _onLayout = () => {
    console.log('_onLayout')
    console.log('_onLayout fakeView', this.fakeView)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default App;