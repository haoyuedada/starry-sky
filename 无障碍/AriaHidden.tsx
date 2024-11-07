import React, { useState } from 'react';
import { Text, View, Modal, TextInput, StyleSheet, ScrollView } from 'react-native';

const App: React.FC = (): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <ScrollView style={{marginTop: 50}}>
            <Text>View: aria-hidden为true</Text>
            <View
                style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
                accessible={true}
                aria-hidden={true}
            >
                <Text style={{ padding: 10 }}>text one</Text>
                <Text style={{ padding: 10 }}>text one</Text>
            </View>
            <Text>View: aria-hidden为false</Text>
            <View
                style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
                accessible={true}
                aria-hidden={false}
            >
                <Text style={{ padding: 10 }}>text one</Text>
                <Text style={{ padding: 10 }}>text one</Text>
            </View>
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