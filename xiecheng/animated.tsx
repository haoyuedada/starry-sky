import React, { useRef, useState } from 'react';
import {
    Animated,
    ScrollView,
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ScrollTransformExample() {
    const firstAnimation = useRef(new Animated.Value(0)).current;

    const translateX = firstAnimation.interpolate({
        inputRange: [0, 500],
        outputRange: [width, 0],
        extrapolate: 'clamp',
    });

    const animatedBoxRef = useRef(null);
    const secondBoxRef = useRef(null);

    return (
        <View style={styles.container}>
            <Animated.View
                ref={animatedBoxRef}
                style={[styles.animatedBox, { transform: [{ translateX }] }]}
                onLayout={event => {
                    const { height } = event.nativeEvent.layout;
                    if (height && secondBoxRef.current) {
                        secondBoxRef.current?.setNativeProps({
                            top: height,
                            zIndex: 10,
                        });
                    }
                }}>
                <Text style={styles.boxText}>I'm the first box!</Text>
            </Animated.View>

            <Animated.View
                ref={secondBoxRef}
                style={[styles.animatedBox, { transform: [{ translateX }] }]}>
                <Text style={styles.boxText}>I'm the second box!</Text>
            </Animated.View>

            <Animated.ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: firstAnimation } } }],
                    {
                        useNativeDriver: true,
                    },
                )}
                scrollEventThrottle={16}
                contentContainerStyle={styles.scrollViewContent}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <View key={index} style={styles.scrollItem}>
                        <Text>Page {index + 1}</Text>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animatedBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: 100,
        backgroundColor: 'lightblue',
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxText: {
        fontSize: 18,
        color: 'white',
    },
    scrollViewContent: {
        paddingTop: 100,
    },
    scrollItem: {
        width: width,
        height: height - 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginVertical: 10,
    },
});