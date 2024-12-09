import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: 'b2d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '1 Item',
  },
  {
    id: '3ac683afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '2 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd964-145571e29d72',
    title: '3 Item',
  },
  {
    id: 'bd7a5cbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '4 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f86-fbd91aa97f63',
    title: '5 Item',
  },
  {
    id: '58694a0f-3da1-471f-7bd96-145571e29d72',
    title: '6 Item',
  },
  {
    id: '58694a0f8-3da1-471f-bd96-145571e29d72',
    title: '7 Item',
  },
  {
    id: '58694a0f-3da1-471f-b7d96-145571e29d72',
    title: '8 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d872',
    title: '9 Item',
  },
];

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <View style={{ width: 130, height: 130 }}>
        <Image
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
          source={require('../assets/pravatar-131.jpg')}
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

    </View>
  );
}

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
    width: '100%',
  },
  title: {
    fontSize: 32,
  },
});

export default App;