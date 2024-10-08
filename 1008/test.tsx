import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PriorityView from './PriorityView';
// import Slider from 'react-native-slider';

const App = () => {
  const [sliderHeight, setSliderHeight] = useState(400);

  return (
    <View style={{ marginTop:100, gap: 10}}>
      {/* <Slider style={{width:'80%', height:40, borderWidth:1, alignSelf:'center'}}
        value={sliderHeight}
        minimumValue={100}
        maximumValue={600}
        minimumTrackTintColor='#1A9274'
        maximumTrackTintColor='#D3D3D3'
        thumbTintColor='#1A9274'
        onValueChange={(val: number) => {
          setSliderHeight(val)
        }}
      /> */}
      <PriorityView orientation="vertical" style={{ width: 200, height: sliderHeight, borderWidth: 1, alignSelf:'center'}}>
        <View displayPriority={1} style={{ padding: 10, backgroundColor: 'lightblue', width: 180, height:60, alignSelf:'center' }}>
          <Text>Component 1 (Low)</Text>
        </View>
        <View displayPriority={3} style={{ padding: 10, backgroundColor: 'lightcoral', width: 180, height:60, alignSelf:'center' }}>
          <Text>Component 3 (High)</Text>
        </View>
        <View displayPriority={2} style={{ padding: 10, backgroundColor: 'lightgreen', width: 180, height:60, alignSelf:'center' }}>
          <Text>Component 2 (Medium)</Text>
        </View>
        <View displayPriority={0} style={{ padding: 10, backgroundColor: 'lightgray', width: 180, height:60, alignSelf:'center' }}>
          <Text>Component 0 (Lowest)</Text>
        </View>
        <View displayPriority={4} style={{ padding: 10, backgroundColor: 'red', width: 180, height:60, alignSelf:'center' }}>
          <Text>Component 4 (Highest)</Text>
        </View>
      </PriorityView>
    </View>
  );
};

export default App;