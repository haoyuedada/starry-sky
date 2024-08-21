import React, { useState } from 'react';  
import { Text, View, StyleSheet } from 'react-native';  
  
const MyTextComponent = () => {  
  const [textLayout, setTextLayout] = useState(null);  
  
  const onTextLayout = (e) => {  
    console.log(e.nativeEvent.layout)
    setTextLayout(e.nativeEvent.layout);  
  };  
  
  return (  
    <View style={styles.container}>  
      <Text  
        style={styles.text}  
        numberOfLines={1} // 限制文本行数为2  
        onTextLayout={onTextLayout}  
      >  
        new message 
      </Text>  
      {textLayout && (  
        <Text>  
          布局信息: {JSON.stringify(textLayout)}  
        </Text>  
      )}  
    </View>  
  );  
};  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    padding: 20,  
  },  
  text: {  
    fontSize: 16,  
    width: 200, // 设定一个宽度以便文本换行  
  },  
});  
  
export default MyTextComponent;