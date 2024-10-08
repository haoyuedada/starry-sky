import React, { useState, useEffect } from 'react';
import { View, Dimensions, Text } from 'react-native';
import Collapsible from 'react-native-collapsible';

const PriorityView = ({ children, orientation = 'vertical', ...props }) => {
  const { width, height } = Dimensions.get('window');
  const viewWidth = props.style?.width || width;
  const viewHeight = props.style?.height || height;

  const components = React.Children.toArray(children); // 原始子组件数组
  const [measurements, setMeasurements] = useState(Array(components.length).fill(null)); // 子组件布局信息
  const [visibleComponents, setVisibleComponents] = useState(components); // 可视组件数组
  const [isFirstDisplay, setIsFirstDisplay] = useState(true);
  console.log("chy components", components)  
  // 更新子组件的布局信息
  const handleLayout = (index, layout) => {
    // let newVisibleComponents = [];
    // components.map((child, index) => (
    //   newVisibleComponents.push(child),
    //   console.log('testcs isNew:',newVisibleComponents.includes(child))
    // ));
    // setVisibleComponents(newVisibleComponents);
    
    // console.log('testcs layout:', layout);
    measurements[index] = layout;
    setMeasurements(measurements); // 通过 setMeasurements 更新状态，确保触发重新渲染
  };
  useEffect(() => {
    components.map((child, index) => (
      console.log("chy visibleComponents", visibleComponents),
      console.log("chy child", child),
      console.log('testcs is:',visibleComponents.includes(child))
    ));
  }, [visibleComponents]);

  // 监听 viewHeight 或者 measurements 的变化，并重新计算哪些组件可见
  useEffect(() => {
    recalculateVisibleComponents();
  }, [viewHeight]);

  // 根据测量结果重新计算可见组件
  const recalculateVisibleComponents = () => {
    let totalHeight = 0;
    let totalWidth = 0;
    const newVisibleComponents = [];

    components.forEach((child, index) => {
      if (newVisibleComponents.length < 3) {
        newVisibleComponents.push(child);
      }
      
    //   console.log('testcs child:', newVisibleComponents.includes(child));
      const layout = measurements[index];
      if (layout) {
        // console.log('testcs layout:', layout);
        const childWidth = layout.width;
        const childHeight = layout.height;

        if (orientation === 'vertical') {
          if (totalHeight + childHeight <= viewHeight) {
            newVisibleComponents.push(child);
            totalHeight += childHeight;
          }
        } else {
          if (totalWidth + childWidth <= viewWidth) {
            newVisibleComponents.push(child);
            totalWidth += childWidth;
          }
        }
      }
    });
    setVisibleComponents(newVisibleComponents); // 更新可见组件列表
    console.log('testcs newVisibleComponents:', visibleComponents);
  };

  return (
    <View {...props} style={{ flexDirection: orientation === 'vertical' ? 'column' : 'row', ...props.style }}>
      {components.map((child, index) => (
        <View
          key={index}
          onLayout={(event) => handleLayout(index, event.nativeEvent.layout)}
        >
          <Text>23</Text>
          {/* <Collapsible collapsed={isFirstDisplay ? false : !visibleComponents.includes(child)}> */}
          <Collapsible collapsed={false}>
            {child}
          </Collapsible>
        </View>
      ))}
    </View>
  );
};

export default PriorityView;