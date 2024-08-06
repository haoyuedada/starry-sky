import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';


class TestPage extends React.Component<any, any> {
  pages = [];
  constructor(props) {
    super(props);
    for (let i = 0; i < 10; i++) {
      this.pages[i] = i;
    }
  }

  render() {
    const itemWidth = Dimensions.get('window').width;

    return (
      <View style={{ marginTop: 40, marginBottom:100 }}>
        <ScrollView style={{ width: '100%', backgroundColor: '#ccc' }}
        horizontal={true}
        pagingEnabled={true}
        onContentSizeChange={(width, _height) => {
          console.log('123654: scrollView onContentSizeChange ' + width);
        }} 
        onScroll={(e) => {
          console.log('123654: scrollView onScroll ');
        }} 
        onMomentumScrollBegin={(e) => {
            console.log('123654: scrollView onMomentumScrollBegin ');
        }} 
        onMomentumScrollEnd={(e) => {
            console.log('123654: scrollView onMomentumScrollEnd ');
        }} 
        >
          {
            this.pages.map(i => 
            <View style={{width: itemWidth, height:200, alignItems:'center'}}>
              <Text>Item{i+1}</Text>
            </View>
            )
          }
        </ScrollView>
      </View>
    );
  }


}

export default TestPage;