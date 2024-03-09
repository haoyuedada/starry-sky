 
 import * as React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';

const Item = ({ item }) => (
  <TouchableOpacity>
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

const onPressLearnMore = () => {
  console.log(DATA.length)
  DATA.push({
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5' + Math.random().toString(36).slice(-8),
    title: '' + DATA.length,
  })
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: '5 Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: '6 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: '7 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: '8 Item',
  },
];
function App(): JSX.Element {
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
      />
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
        />
      </ScrollView>
      <Button 
        title="add items"
        onPress={onPressLearnMore}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginTop: 400,
    height: 100,
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
 
export default App;