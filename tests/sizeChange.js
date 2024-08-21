import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

class sizeChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contentWidth: 0,
          contentHeight: 0,
        };
      }
    
    handleContentSizeChange =  event => {
    // console.log(event)
    const { height, width } = event.nativeEvent.contentSize;
    // 确保转换结果是有效的数字
    if (!isNaN(width) && !isNaN(height)) {
        console.log('Content Width:', width);
        console.log('Content Height:', height);
        this.setState({
        contentWidth: width,
        contentHeight: height,
        });
    }
    };
    
    render() {
    const { contentWidth, contentHeight } = this.state;

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.textInput}
            multiline
            onContentSizeChange={this.handleContentSizeChange}
            placeholder="请输入文本..."
        />
        <Text style={styles.dimensionsDisplay}>
            内容宽度: {contentWidth.toFixed(2)} px
        </Text>
        <Text style={styles.dimensionsDisplay}>
            内容高度: {contentHeight.toFixed(2)} px
        </Text>
        </View>
    );
    }
}
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    },
    textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
    width: '100%',
    maxWidth: 300, // Optional: limit the maximum width of the TextInput
    minHeight: 100, // Ensure there's some height to start with
    },
    dimensionsDisplay: {
    fontSize: 16,
    color: '#333',
    },
});

export default sizeChange;