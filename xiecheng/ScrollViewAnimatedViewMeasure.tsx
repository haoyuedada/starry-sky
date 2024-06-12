import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Animated,
  Button
} from 'react-native';

const ScrollViewAnimatedViewMeasure = () => {
  const [pageY, setPageY] = useState(0);
  let outTabBar: any;
  const scrollyChange = () => {
    outTabBar &&
      outTabBar.measure((_x: any, y: any, width, height, pageX, pageY) => {
        console.log(`"pageY is: ", ${JSON.stringify(pageY)}`);
        setPageY(pageY);
      });
  };
  const scrollRef = React.useRef<ScrollView>(null);
  const scrollToTop = () => {
    console.log("scrollToTop");
    scrollRef.current?.scrollTo({y: 0, animated: true});
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} ref={scrollRef}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: 1,
          },
        ]}
        ref={(ref) => {
          outTabBar = ref;
        }}>
        <Text 
          style={styles.fadingText}
          onPress={() => scrollyChange()}>{`Click to measure pageY: ${JSON.stringify(pageY)}`}</Text>
      </Animated.View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <Button
        onPress={scrollToTop}
        title="Back to Top"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginBottom: 20,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 20,
  },
});

export default ScrollViewAnimatedViewMeasure;