import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const html = `
<!DOCTYPE html>
<html>
  <head>
    <script>
      window.onload = function() {
        // console.log("chy onload")
        // 设置本地存储键
        window.localStorage.setItem("myCat", "Tom");

        // 读取本地存储键的值
        var myCatValue = window.localStorage.getItem("myCat") || "unknown";
        // var myCatValue = "unknown";

        // 将读取的值显示在页面上
        document.getElementById("display").innerText = "The value of myCat is: " + myCatValue;
      };
    </script>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
    <p id="display"></p>
  </body>
</html>
`;

class MyWebView extends Component {
    render() {
        console.log("chy render")
        return (
            <WebView
                webviewDebuggingEnabled={true}
                source={{ html, baseUrl: "http://localhost" }}
                // style={{ marginTop: 20 }}
                // originWhitelist={["*"]}
                // mixedContentMode={"always"}
                // incognito={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onError={(syntheticEvent) => {
                    console.log("error")
                    const { nativeEvent } = syntheticEvent;
                    console.error('WebView error: ', nativeEvent);
                }}
            />
        );
    }
}

export default MyWebView;
