
# Demo使用说明

1、在MainProject目录下执行 npm install

2、本demo基于官方提供的sample样例实现，为实现问题效果，引入navigation相关三方库

3、改动范围为第一个tab“动画问题”，其余tab页面为原有样例代码


# Demo代码说明

1、示例代码均在 MainProject/src/bundles/HomePage/Demo 目录下，DemoTabPage.js为简化场景示例代码（方便分析），DemoHomePage.js为模拟线上稍复杂场景示例代码，两个页面均可验证问题

2、默认状态为: 打开动画，使用 useNativeDriver:true

3、navigation screenOptions 设置如下，在 MainProject/src/bundles/HomePage/NavigationPage.js 内
```js
 screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
        })}
```


# 动画问题1：useNativeDriver: false 动画卡顿

1、tab首页,点击"打开动画"

2、tab首页,点击“设置useNativeDriver:true”，点击“Go to DemoTabPage”，查看页面动画效果，点击“点我返回”。

3、tab首页,点击“设置useNativeDriver:false”，点击“Go to DemoTabPage”，查看页面动画效果，点击“点我返回”。

3、上面2、3步骤，效果对比，动画在设置useNativeDriver:false时，明显卡顿；或者上面点击“Go to DemoHomePage”效果也一样


# 动画问题3：useNativeDriver: true 多次跳转页面返回，动画元素消失

1、tab首页,点击"打开动画"，点击“设置useNativeDriver:true”

2、点击“Go to DemoHomePage”，此时显示“首页”tab，点击右侧“点我跳转”，然后点击右上角“点我返回”

3、此时返回后页面带动画元素消失，包括：顶部标题，左侧tab，右侧内容区域


# 动画问题2：useNativeDriver: true 多次跳转页面返回，动画元素位置异常

1、tab首页,点击"打开动画"，点击“设置useNativeDriver:true”

2、点击“Go to DemoHomePage”，此时显示“首页”tab；点击“战队”tab，右侧区域显示紫色战队页面，点击“go to DemoHomePage”，跳转新的页面；然后点击“点我返回”

3、此时右侧区域展示的是灰色的“首页”，应该展示紫色的“战队”


