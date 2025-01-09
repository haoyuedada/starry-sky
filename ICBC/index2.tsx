// import React, { useRef } from 'react';
// import { View, Text, Button } from 'react-native';

// const App = () => {
//     const viewRef = useRef(null);

//     const measureView = () => {
//         if (viewRef.current) {
//             viewRef.current.measure((x, y, width, height, pageX, pageY) => {
//                 console.log('Relative to parent:', { x, y, width, height });
//                 console.log('Relative to screen:', { pageX, pageY });
//             });
//         }
//     };

//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
//     );
// };

// export default App;

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class DetailsScreen extends Component {
    constructor(props){
        super(props);
        const { params } = this.props.navigation.state;
        // this.props.routes
    }

  render() {
    const { itemId, message } = this.props.route.params || {};
    
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>Item ID: {itemId}</Text>
        <Text>Message: {message}</Text>
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.goBack()}
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

export default DetailsScreen;
