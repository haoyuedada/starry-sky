import React, { useState, useRef } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
 
const App = () => {
  const [refreshing, setRefreshing] = useState(false);
 
  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);
 
    // 模拟数据刷新的异步操作
    setTimeout(() => {
      setRefreshing(false);
    }, 3000); // 假设刷新数据需要3秒钟
  }, []);
 
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        style={{flex: 1, backgroundColor: 'red'}}
        data={Array(20).fill('Item')} // 示例数据，实际应用中应该是动态数据
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item, index }) => <Text>{item} {index}</Text>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['blue', 'green', 'red']} // 可以设置刷新进度条的颜色
            progressBackgroundColor="#ffffff" // 设置刷新进度条的背景颜色
          />
        }
      />
    </View>
  );
};
 
export default App;