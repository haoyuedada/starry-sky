import { StyleSheet, Text, View, TextInput, Image, TouchableWithoutFeedback } from 'react-native';

export default function TransformTest() {
    const onPress = () => {
        console.log('23423432')
    };

    return (
        <View style={{ marginTop: 300 }}>
            <Image source={require("../assets/expo.png")} style={{ height: 100, width: 100 }} accessibilityLabel="hahaha" accessible={true}></Image>
            <Text accessible={false}>safasfas</Text>
            <TouchableWithoutFeedback onPress={onPress} accessible={false}>
                <View style={styles.button}>
                    <Text>Touch Here</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    },
    countText: {
      color: "#FF00FF"
    }
  });
