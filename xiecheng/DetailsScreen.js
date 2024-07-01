// DetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigate }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigate('Home')}
      />
    </View>
  );
};

export default DetailsScreen;