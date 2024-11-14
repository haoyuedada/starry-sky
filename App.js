/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2024-05-06 15:31:33
 * @LastEditors: sueRim
 * @LastEditTime: 2024-06-27 10:25:36
 */
/*
 * @Description: 
 * @version: 
 * @Author: sueRim
 * @Date: 2024-02-02 18:43:22
 * @LastEditors: sueRim
 * @LastEditTime: 2024-04-10 20:33:08
 */
import { StyleSheet, View, Button, Text, Pressable } from 'react-native';
import React from 'react';


export default function App(props) {
    console.log(props, "111");
    return (
        <View style={styles.container}>
            <Pressable
            style={{
                backgroundColor: 'red'
            }}
            onPress={() => {
                console.log("chy view press")
            }}>
                <View>
                    <Text>这是Text</Text>
                    <Button title='button' onPress={() => {
                        console.log("chy button press")
                    }}></Button>
                </View>
            </Pressable>

            {/* <View>
                
            </View> */}

        </View >

        // <View style={styles.container}>
        //     <Button title='button' onPress={() => {
        //             console.log("chy button press")
        //         }}></Button>
        // </View >
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200
    },
});

