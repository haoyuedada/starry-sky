import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
// const App1 = () => {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ScrollView style={styles.scrollView}>
//           <Text style={styles.text}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           </Text>
//         </ScrollView>
//       </SafeAreaView>
//     );
//   }

const App1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        //   style={{ flexGrow: 1 }}
        //   contentContainerStyle={{
        //     flexGrow: 1,
        //     flexDirection: 'column',
        //     justifyContent: 'flex-start',
        //   }}
        // eslint-disable-next-line react/no-unstable-nested-components
        StickyHeaderComponent={() => {
          return <Text style={{ height: 56, backgroundColor: 'orange' }}>333</Text>;
        }}
        // StickyHeaderComponent 控制放置的位置
        stickyHeaderIndices={[1]}
      >
        <Text style={{ height: 56, backgroundColor: 'orange' }}>111111</Text>
        <Text style={{ height: 40, backgroundColor: 'freen' }}>222222</Text>
        {/* <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text> */}
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default App1;
