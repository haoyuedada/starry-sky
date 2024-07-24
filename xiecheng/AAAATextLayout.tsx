import React, { useState, useEffect, useRef } from 'react';
import {
    Animated,
    View,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';

const AAAATextLayout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >abcde</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap'
    },
    title: {
      // 字重增大，文字框没有增大，导致后面的文字被挤走。
      fontWeight: '500',
      //文字变换为大写，也会使文字变大，导致被挤出文字框。
      textTransform:'uppercase',
      fontSize: 40,
      backgroundColor: 'blue'
    }
  })

export default AAAATextLayout;