import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    Animated,
    TouchableOpacity,
    Easing
} from 'react-native';


class TestPage extends React.Component<any, any> {
    pages = [];
    testMove:any = new Animated.Value(0);
    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        setTimeout(() => {
            Animated.timing(this.testMove, {
                toValue: 1,
                duration: 370,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start();
        }, 2000);
    }

    render() {
        const translateX = this.testMove.interpolate({
            inputRange: [0, 1],
            outputRange: [190, 0],
        });
        return (
            <Animated.View
                style={[
                    {
                        transform: [{ translateX }],
                        backgroundColor: 'blue',
                        marginTop: 50,
                    },
                ]}
            >
                <TouchableOpacity onPress={() => {
                    console.log("onPress")
                }}>
                    <Text
                    >
                        {'测试点击测试点击测试点击测试点击'}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }


}

export default TestPage;