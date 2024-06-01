import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Button, Animated } from 'react-native';



const App = () => {
    const [state, setState] = useState({})
    const viewRef = useRef()
    let scaleRef = useRef(new Animated.Value(0.2)).current;

    const scale = () => {
        Animated.sequence(
            [
                Animated.timing(scaleRef, {
                    toValue: 0.5,
                    duration: 1000,
                    useNativeDriver: true,
                }), Animated.timing(scaleRef, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]
        ).start();
    };

    const measure = ({ nativeEvent }) => {
        const touch = nativeEvent.touches[0];
        viewRef.current.measure((x, y, width, height, pageX, pageY) => {
            setState({
                touchY: touch.pageY,
                x,
                y,
                pageX,
                pageY,
                width,
                height,
            })
        })
    }

    return (
        <View style={{ paddingTop: 100 }}>
            <Text>
                {JSON.stringify(state)}
            </Text>
            <Animated.View style={[styles.container, {
                transform: [{
                    scale: scaleRef
                }]
            }]}
                ref={viewRef}
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={measure}>
                <Text>block</Text>
            </Animated.View>
            <Button onPress={scale} title='缩放'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "pink",
        position: "absolute",
        top: 100,
        right: 100,
        zIndex: 8,
        height: 100,
        width: 100,
        fontSize: 50,
    },
})


export default App