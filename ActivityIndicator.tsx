import React, { useState } from 'react';
import { ActivityIndicator, View, Modal, Button } from 'react-native';

const App: React.FC = (): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <View style={{ height: 40 }} />
            <Button title='Press to show the modal' onPress={() => setModalVisible(true)} />
            <ActivityIndicator />
            <Modal visible={modalVisible}>
                <View style={{ height: 40 }} />
                <Button title='Press to hide the modal' onPress={() => setModalVisible(false)} />
                <ActivityIndicator />
            </Modal>
        </>
    )
}

export default App;