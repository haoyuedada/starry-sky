// import React from 'react';
// import { View, ScrollView, StyleSheet, Button } from 'react-native';

// const App = (props) => {
//     // 创建一个包含100个View组件的数组
//     const viewsArray = Array.from({ length: 5000 }, (_, index) => (
//         <View key={index} style={styles.view} />
//     ));
//     const navigate = () => {
//         props.navigation.navigate("index2")
//     }
//     return (
//         <ScrollView style={styles.container}>
//             <View style={{ marginTop: 20, marginBottom: 20 }}>
//                 <Button
//                     onPress={navigate}
//                     title="跳转路由"
//                     color="#841584"
//                     accessibilityLabel="Learn more about this purple button"
//                 />

//             </View>
//             {viewsArray}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     view: {
//         width: 100,
//         height: 100,
//         backgroundColor: 'blue',
//         margin: 5,
//     },
// });

// export default App;

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('index2', { itemId: 42, message: 'Hello from Home!' })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;