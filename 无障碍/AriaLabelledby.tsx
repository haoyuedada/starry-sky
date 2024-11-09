import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TextInput, StyleSheet, ScrollView } from 'react-native';

const App: React.FC = (): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <ScrollView style={{ marginTop: 50 }}>
            <Text>Image: aria-labelledby</Text>
            <Image
                accessible={true}
                aria-labelledby='First'
                source={require('./assets/expo.png')}
                style={{ width: 200, height: 200 }}
            />
            <Text>ImageBackground: aria-labelledby</Text>
            <ImageBackground
                accessible={true}
                aria-label="React图片背景"
                aria-labelledby='testAria-labelledby'
                style={{ width: 200, height: 200 }}
                source={require('./assets/expo.png')}
                alt=''>
                <TextInput style={{
                    lineHeight: 30,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundColor: '#000000c0',
                }} nativeID='testAria-labelledby' />
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    base: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: 'gray'
    }
})

export default App;