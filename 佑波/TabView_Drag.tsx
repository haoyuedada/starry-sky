import React, { useRef, useState } from 'react';
import { Animated, View, Text, Dimensions, StyleSheet, PanResponder } from 'react-native';
import { TabView, TabBar, SceneMap, NavigationState, SceneRendererProps } from 'react-native-tab-view';

type State = NavigationState<{
  key: string;
  title: string;
}>;

const FirstRoute = () => (
  <View
    style={{
      alignItems: 'center',
      padding: 10,
      margin: 10,
      width: '100%',
      height: '80%',
      flex: 1,
      backgroundColor: '#62BBD4',
    }}
  >
    <Text
      style={{
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
      }}
    >
      First tab
    </Text>
    <View
      pointerEvents="box-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width:'100%',
        height:'100%'
      }}
    >
      <DragDemo />
    </View>
  </View>
);

const SecondRoute = () => (
  <View
    style={{
      alignItems: 'center',
      padding: 10,
      margin: 10,
      width: '80%',
      height: '80%',
      flex: 1,
      backgroundColor: '#A0D44E',
    }}
  >
    <Text
      style={{
        width: '100%',
        height: '100%',
        fontWeight: 'bold',
      }}
    >
      Second tab
    </Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
const App = () => {
  const initialLayout = { width: Dimensions.get('window').width };
  const [index, setIndex] = React.useState(0);
  const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );

  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <>
      <TabView
        style={{
          flex: 1,
          width: '100%',
          height: 200,
          margin: 10,
          backgroundColor: '#6D8585',
        }}
        overScrollMode={'never'}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};

export default App;

const DragDemo = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log(`zzz onPanResponderGrant`);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        console.log(`zzz onPanResponderRelease`);
        pan.flattenOffset();
      },
      onPanResponderTerminate:()=>{
        console.log(`zzz onPanResponderTerminate`);
      }
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position:'absolute',
          top: 300,
          right:10,
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#3f51b5',
    height: 70,
    width: '100%',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
    width: 175,
    height: 5,
  },
  label: {
    fontWeight: '400',
    fontSize: 20,
    width: 100,
    height: 50,
    color: 'black',
  },
  tabStyle: {
    height: 65,
    width: 175,
    backgroundColor: '#BAFDAD',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 58,
    width: 58,
    backgroundColor: '#00cc00',
    borderRadius: 5,
  },
});
