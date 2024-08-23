import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    DeviceEventEmitter,
    Animated,
    Easing,
    Alert,
    TouchableOpacity
} from 'react-native';

export default class AnimatedTest extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef()
        this.state = {
            turnRotateValue: new Animated.Value(0),
            turnShakeValue: new Animated.Value(0),
            macValue: new Animated.Value(0),
        };

    }
    componentDidMount() {
    }

    componentWillUnmount() { }



    render() {
        const macTop = this.state.macValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 150]
        });

        _startAnimated = () => {
            Animated.sequence(
                [
                    Animated.spring(
                        this.state.macValue,
                        {
                            toValue: 1,
                            friction: 3,
                            tension: 10,
                            useNativeDriver: true,
                        }
                    ),
                ]
            ).start();
        }

        return (
            <View style={styles.container}>
                <View style={styles.mainStyle}>
                    <Animated.View
                        style={{
                            width: 300,
                            height: 204,
                            position: 'absolute',
                            top: macTop,
                            left: macTop,
                        }}
                    >
                        <Image ref="image" style={{ width: 375, height: 242 }}
                            source={require('./keli.png')}>
                        </Image>
                    </Animated.View>
                    <Button
                        style={styles.margin}
                        title={'开始动画123'}
                        onPress={_startAnimated}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        /*定义flex容器*/
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        height: '100%',
        marginTop: 400
    },
    margin: {
        marginTop: 10,
        marginBottom: 10,
    },
});