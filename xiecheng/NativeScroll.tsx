import { TestSuite } from '@rnoh/testerino';
import { Alert, Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function NativeScroll() {
    const handlePress = () => {
        console.log("chy handlePress")
        Alert.alert('点击事件触发')
    }

    return (
        // <ScrollView style={styles.scrollView}>
            <View style={styles.container} style={{ width: '100%' }}>
                {Array.from({ length: 100 }).map((_, i) => (
                    // <TouchableOpacity onPress={handlePress}>
                    <View style={{ width: '100%', height: 100, backgroundColor: "orange" }} key={i}>
                        {/* <Text>item:{i}</Text> */}
                        <Button title='test' onPress={() => { handlePress() }}></Button>
                    </View>
                    // </TouchableOpacity>
                ))}
            </View>
        // </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "100%",
        paddingHorizontal: 8,
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        color: "blue",
    },
});