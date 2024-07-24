/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

export default class Root extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      keybodyHeight: 0,
    };
  }
  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', (res) => {
      console.log('lijiao keyboardDidShow', res.endCoordinates.height);
      this.setState({ keybodyHeight: res.endCoordinates.height });
    });
    Keyboard.addListener('keyboardDidHide', (res) => {
      console.log('lijiao keyboardDidHide', res.endCoordinates.height);
      this.setState({ keybodyHeight: res.endCoordinates.height });
    });
  }
  render() {
    // 不管加padding还是margin还是空view，都会导致下面区域的位置不对,在scrollview上加也不行
    return (
      <View>
        <View
          style={{
            height: 56,
            backgroundColor: 'blue',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9999,
            width: '100%',
          }}
        ></View>
        <KeyboardAvoidingView behavior="height">
          <ScrollView
            style={{ height: 600, marginTop: 56 }}
            // StickyHeaderComponent={() => {
            //   return <View style={{ height: 56, backgroundColor: 'blue' }}></View>;
            // }}
            // stickyHeaderIndices={[0]}
          >
            {/* <View style={{height:60,width:'100%'}}></View> */}
            {/* <View style={styles.container}> */}
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
            {/* <Text style={styles.instructions}>
                            Press Cmd+R to reload,{'\n'}
                            Cmd+D or shake for dev menu
                        </Text>
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={styles.instructions}>
                            To get started, edit index.ios.js
                        </Text> */}
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
            <Text style={styles.instructions}>
              KeyboardAvoidingView的主要属性behavior PropTypes.oneOf(['height', 'position', 'padding'])
            </Text>
            <TextInput placeholder="输入框" style={{ width: 300, height: 100, borderWidth: 1, margin: 30 }} />
            {/* </View> */}
          </ScrollView>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior={'height'}>
          <View style={{ height: 50, backgroundColor: 'green' ,width:'100%'}}></View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
