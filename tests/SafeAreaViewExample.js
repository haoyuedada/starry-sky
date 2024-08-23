/**ollapsable
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import {HMLog} from '../../utils/HMLog'

const React = require('react');

const {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} = require('react-native');
import { useState } from 'react';
import { NativeTouchEvent } from 'react-native\Libraries\Types\CoreEventTypes';
class SafeAreaViewExample extends React.Component<
  {...},
  {|
    modalVisible: boolean,
  |},
> {
  state: {modalVisible: boolean} = {
    modalVisible: false,
  };

  _setModalVisible = (visible: boolean) => {
    this.setState({modalVisible: visible});
  };

  render(): React.Node {
    return (
      <View>
        {/* <Modal
          visible={this.state.modalVisible}
          onRequestClose={() => this._setModalVisible(false)}
          animationType="slide"
          supportedOrientations={['portrait', 'landscape']}> */}
          <View style={styles.modal}>
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.safeAreaContent}>
                <Button
                  onPress={this._setModalVisible.bind(this, false)}
                  title="Close"
                />
              </View>
            </SafeAreaView>
          </View>
        {/* </Modal> */}
        <Button
          onPress={this._setModalVisible.bind(this, true)}
          title="Present Modal Screen with SafeAreaView"
        />
      </View>
    );
  }
}

class IsIPhoneXExample extends React.Component<{...}> {
  render(): React.Node {
    return (
      <View>
        <Text>
          Is this an iPhone X:{' '}
          {
            // $FlowFixMe[sketchy-null-bool]
            // DeviceInfo.getConstants().isIPhoneX_deprecated
            //   ? 'Yeah!'
            //   : 'Nope. (Or `isIPhoneX_deprecated` was already removed.)'
          }
        </Text>
      </View>
    );
  }
}


class BorderWidth extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderWidth:5</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 60, width:305}}
        source={require('../../../assets/SafeAreaViewBorderWidth-1.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 50,
          borderWidth: 5, 
          borderColor:'red', 
          borderRadius:10}}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderLeftWidth extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1, height:220}}>
        <Text>属性值：borderLeftWidth:5</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderRightWidth extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderRightWidth:15</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderTopWidth extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderTopWidth:10</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderBottomWidth extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderBottomWidth:20</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderColor:red</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 60, width:305}}
        source={require('../../../assets/SafeAreaViewBorderWidth-1.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 50,
          borderWidth: 5, 
          borderColor:'red', 
          borderRadius:10}}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderLeftColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderLeftColor:red</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderRightColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderRightColor:yellow</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderTopColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderTopColor:pink</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderBottomColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderBottomColor:skyblue</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 75, width:305}}
        source={require('../../../assets/SafeAreaViewBorder-2.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80 ,
          borderTopWidth: 10, 
          borderBottomWidth: 20, 
          borderRightWidth: 15,
          borderLeftWidth: 5,
          borderLeftColor:'red',
          borderRightColor:'yellow',
          borderTopColor:'pink',
          borderBottomColor:'skyblue'
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderStartColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1 }}>
        <Text>属性值：borderStartColor:red</Text>
        <Text>预期结果：</Text>
        <Image
          style={{ height: 85, width: 300 }}
          source={require('../../../assets/SafeAreaView_borderStartColor.png')} />
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 80,
          borderWidth: 5,
          borderStartColor: 'red',
          borderEndColor: 'blue',
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderEndColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1 }}>
        <Text>属性值：borderEndColor:blue</Text>
        <Text>预期结果：</Text>
        <Image
          style={{ height: 85, width: 300 }}
          source={require('../../../assets/SafeAreaView_borderEndColor.png')} />
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 80,
          borderWidth: 5,
          borderStartColor: 'red',
          borderEndColor: 'blue',
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderRadius:10</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 60, width:305}}
        source={require('../../../assets/SafeAreaViewBorderWidth-1.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 50,
          borderWidth: 5, 
          borderColor:'red', 
          borderRadius:10}}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderTopLeftRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderTopLeftRadius:10</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-3.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80,
          borderWidth:5,
          borderTopLeftRadius:10,
          borderTopRightRadius:15,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:25
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderTopRightRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderTopRightRadius:15</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-3.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80,
          borderWidth:5,
          borderTopLeftRadius:10,
          borderTopRightRadius:15,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:25
          }}>
        </SafeAreaView>
      </View>
    );
  }
}


class BorderTopStartRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderTopStartRadius:10</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-4.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{ 
          height: 80,
          borderWidth:5,
          borderStartColor:'red',
          borderEndColor:'blue',
          borderTopStartRadius:10,
          borderTopEndRadius:15,
          borderBottomStartRadius:20,
          borderBottomEndRadius:25
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderTopEndRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderTopEndRadius:15</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-4.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{ 
          height: 80,
          borderWidth:5,
          borderStartColor:'red',
          borderEndColor:'blue',
          borderTopStartRadius:10,
          borderTopEndRadius:15,
          borderBottomStartRadius:20,
          borderBottomEndRadius:25
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderBottomLeftRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderBottomLeftRadius:20</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-3.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80,
          borderWidth:5,
          borderTopLeftRadius:10,
          borderTopRightRadius:15,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:25
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderBottomRightRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderBottomRightRadius:25</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-3.png')}/>
        <Text style={{paddingBottom: 5}}>实际结果：</Text>
        <SafeAreaView style={{
          height: 80,
          borderWidth:5,
          borderTopLeftRadius:10,
          borderTopRightRadius:15,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:25
          }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderBottomStartRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderBottomStartRadius:20</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-4.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{ 
          height: 80,
          borderWidth:5,
          borderStartColor:'red',
          borderEndColor:'blue',
          borderTopStartRadius:10,
          borderTopEndRadius:15,
          borderBottomStartRadius:20,
          borderBottomEndRadius:25
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BorderBottomEndRadius extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1}}>
        <Text>属性值：borderBottomEndRadius:25</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 85, width:300}}
        source={require('../../../assets/SafeAreaViewBorder-4.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{ 
          height: 80,
          borderWidth:5,
          borderStartColor:'red',
          borderEndColor:'blue',
          borderTopStartRadius:10,
          borderTopEndRadius:15,
          borderBottomStartRadius:20,
          borderBottomEndRadius:25
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class BackfaceVisibility_visible extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1, height: 260}}>
        <Text>属性值：backfaceVisibility?: 'visible' </Text>
        <Text>预期结果：显示粉色背景</Text>
        <Image
          source={require('../../../assets/SafeAreaView_BackfaceVisibility_visible.png')} />
        <Text style={{ paddingBottom: 5 }}>实际结果：</Text>
        <View>
          <SafeAreaView style={{
            height: 50,
            width: 200,
            backgroundColor: 'pink',
            backfaceVisibility: 'visible',
            transform: [{ rotateY: '180deg' }],
            position: 'absolute',
            top: 70,
            justifyContent: 'center',
            textAlign: "center"
          }}>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

class BackfaceVisibility_hidden extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1, height: 260 }}>
        <Text>属性值：backfaceVisibility: 'hidden'</Text>
        <Text>预期结果：蓝色SafeAreaView隐藏</Text>
        <Image
          source={require('../../../assets/SafeAreaView_BackfaceVisibility_hidden.png')} />
        <Text style={{ paddingBottom: 5 }}>实际结果：</Text>
        <View>
          <SafeAreaView style={{
            height: 50,
            width: 200,
            backgroundColor: 'blue',
            backfaceVisibility: 'hidden',
            transform: [{ rotateY: '180deg' }],
            position: 'absolute',
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}


class SafeAreaViewBorderCurve extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1,height:360}}>
        <Text>属性值：borderCurve=continuous borderCurve=circular</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 120, width:282}}
        source={require('../../../assets/SafeAreaViewBorderCurve-1.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height:50,
          borderRadius: 20,
          margin: 5,
          borderWidth: 1,
          backgroundColor: 'skyblue',
          borderCurve: 'continuous',
        }}>
        </SafeAreaView>
        <SafeAreaView style={{
          margin: 5,
          height:50,
          borderRadius: 20,
          borderWidth: 1,
          backgroundColor: 'pink',
          borderCurve: 'circular',
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class SafeAreaViewBackgroundColor extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1, }}>
        <Text>属性值：{"backgroundColor='skyblue'"}</Text>
        <Text>预期结果：</Text>
        <Image
          source={require('../../../assets/SafeAreaView_backgroundColor.png')} />
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 50,
          borderRadius: 20,
          margin: 5,
          borderWidth: 1,
          backgroundColor: 'skyblue',
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class SafeAreaViewBorderStyle_solid extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1, }}>
        <Text>属性值：borderStyle: 'solid'</Text>
        <Text>预期结果：</Text>
        <Image
          source={require('../../../assets/SafeAreaView_BorderStyle_solid.png')} />
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 60,
          width: 200,
          margin: 5,
          borderColor: 'red',
          borderRadius: 25,
          borderWidth: 3,
          borderStyle: 'solid',
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class SafeAreaViewBorderStyle_dotted extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1, }}>
        <Text>属性值：borderStyle: 'dotted'</Text>
        <Text>预期结果：</Text>
        <Image
          source={require('../../../assets/SafeAreaView_BorderStyle_dotted.png')} />
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 60,
          width: 200,
          margin: 5,
          borderColor: 'red',
          borderRadius: 25,
          borderWidth: 3,
          borderStyle: 'dotted',
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class SafeAreaViewBorderStyle_dashed extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1, }}>
        <Text>属性值：borderStyle: 'dashed'</Text>
        <Text>预期结果：</Text>
        <Image
          source={require('../../../assets/SafeAreaView_BorderStyle_dashed.png')} />
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 60,
          width: 200,
          margin: 5,
          borderColor: 'red',
          borderRadius: 25,
          borderWidth: 3,
          borderStyle: 'dashed',
        }}>
        </SafeAreaView>
      </View>
    );
  }
}

class SafeAreaViewOpacity extends React.Component {
  render(): React.Node {
    return (
      <View style={{flex:1, height:420}}>
        <Text>属性值：opacity: 0~1(不透明度)</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 180, width:290}}
        source={require('../../../assets/SafeAreaViewOpacity-1.png')}/>
        <Text>实际结果：</Text>
        <SafeAreaView style={{
          height: 50,
          margin:5,
          borderWidth: 5, 
          opacity: 0.3,
          borderColor:'red', 
          borderRadius:10}}>
        </SafeAreaView>
        <SafeAreaView style={{
          height: 50,
          margin:5,
          borderWidth: 5, 
          opacity: 0.6,
          borderColor:'red', 
          borderRadius:10}}>
        </SafeAreaView>
        <SafeAreaView style={{
          height: 50,
          margin:5,
          borderWidth: 5, 
          opacity: 1,
          borderColor:'red', 
          borderRadius:10}}>
        </SafeAreaView>
      </View>
    );
  }
}

class SafeAreaViewElevation extends React.Component {
  render(): React.Node {
    return (
      <View style={{ flex: 1, }}>
        <Text>属性值：elevation:20</Text>
        <Text>预期结果：</Text>
        <Image
          style={{ height: 145, width: 282 }}
          source={require('../../../assets/SafeAreaViewElevation-1.png')} />
        <Text>实际结果：</Text>
        <SafeAreaView
          style={{
            width: 200,
            height: 100,
            backgroundColor: 'skyblue',
            shadowColor: 'red',
            elevation: 20,
          }}
        >
        </SafeAreaView>
      </View>
    );
  }
}

const SafeAreaViewHitSlop = () => {
  const [timesTouch, setTimesTouch] = useState(0);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View style={{ justifyContent: 'center', }}>
      <Text>属性值：hitSlop=top: 30, bottom: 30, left: 60, right: 60</Text>
      <Text style={{ color: 'red' }}>预期效果：天蓝色区域点击，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <View style={{
        borderWidth: 1,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 60,
        paddingRight: 60,
        backgroundColor: 'skyblue'
      }}>
        <SafeAreaView
          style={{ borderWidth: 1, width: 180, height: 80, backgroundColor: 'pink' }}
          hitSlop={{ top: 30, bottom: 30, left: 60, right: 60 }}
          onStartShouldSetResponder={() => {
            setTimesTouch(current => current + 1);
          }}
        >
          <Text>Press Outside This View</Text>
        </SafeAreaView>
      </View>
      <View style={{ padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9', marginTop: 10 }}>
        <Text>log文本：</Text>
        <Text style={{ paddingTop: 5 }}>{textLog}</Text>
      </View>
    </View>
  );
}

const SafeAreaViewNativeID = () => {
    const inputAccessoryViewID = 'uniqueID';
    return (
      <View style={{height:150}}>
        <Text>属性：nativeID</Text>
        <Text>预期效果为: 点击按钮打印日志</Text>
        <Text>实际效果: </Text>
      <SafeAreaView
        nativeID={inputAccessoryViewID}
      >
        <Button
          onPress={() =>{HMLog('id=1')}}
          title="press on"
        />
      </SafeAreaView>
      </View>
  ); 
}


class ExampleBox extends React.Component<ExampleBoxProps, ExampleBoxState> {
  state: ExampleBoxState = {
    log: [],
  };
  handleLog = (msg: string) => {
    // $FlowFixMe
    this.state.log = this.state.log.concat([msg]);
  };

  flushReactChanges = () => {
    this.forceUpdate();
  };
  /**
   * Capture phase of bubbling to append separator before any of the bubbling
   * happens.
   */
  handleTouchCapture = () => {
    // $FlowFixMe
    this.state.log = this.state.log.concat(['---']);
  };

  render(): React.Node {
    const { Component } = this.props;
    return (
      <View>
        <View
          onTouchEndCapture={this.handleTouchCapture}
          onTouchStart={this.flushReactChanges}>
          <Component onLog={this.handleLog} />
        </View>
        <View style={{ padding: 20, margin: 10, borderWidth: 0.5, borderColor: '#f0f0f0', backgroundColor: '#f9f9f9', }}>
          <DemoText style={{ fontSize: 9, }}>
            {this.state.log.join('\n')}
          </DemoText>
        </View>
      </View>
    );
  }
}
class DemoText extends React.Component<$FlowFixMeProps> {
  render(): React.Node {
    return (
      <View pointerEvents="none">
        <Text style={this.props.style}>{this.props.children}</Text>
      </View>
    );
  }
}

class SafeAreaViewNoneExample extends React.Component<$FlowFixMeProps> {
  render(): React.Node {
    return (
      <View style={{ height: 350 }}>
        <Text>值为none时,不能成为点击事件的目标</Text>
        <Text style={{ color: 'red' }}>预期效果为: 点击A打印A touched,点击B打印A touched,点击C打印A touched</Text>
        <Text>实际效果: </Text>
        <SafeAreaView
          onTouchStart={() => this.props.onLog('A touched')}
          style={{
            height: 250,
            backgroundColor: '#aaccff',
            borderWidth: 1,
            borderColor: '#7799cc',
            padding: 10,
            margin: 5,
          }}
        >
          <DemoText style={styles.text}>A:未设置属性值</DemoText>
          <SafeAreaView
            pointerEvents="none"
            onTouchStart={() => this.props.onLog('B touched')}
            style={[{
              height: 150,
              backgroundColor: '#aaccff',
              borderWidth: 1,
              borderColor: '#7799cc',
              padding: 10,
              margin: 5,
            }, styles.boxPassedThrough]}
          >
            <DemoText style={[styles.text, styles.textPassedThrough]}>
              B:属性值:pointerEvents=none
            </DemoText>
            <SafeAreaView
              onTouchStart={() => this.props.onLog('C touched')}
              style={[{
                height: 80,
                backgroundColor: '#aaccff',
                borderWidth: 1,
                borderColor: '#7799cc',
                padding: 10,
                margin: 5,
              }, styles.boxPassedThrough]}
            >
              <DemoText style={[styles.text, styles.textPassedThrough]}>
                C:未设置属性值
              </DemoText>
            </SafeAreaView >
          </SafeAreaView >
        </SafeAreaView >
      </View>
    );
  }
}
class SafeAreaViewBoxNoneExample extends React.Component<$FlowFixMeProps> {
  render(): React.Node {
    return (
      <View style={{ height: 350 }}>
        <Text>值为box-none时,不能成为点击事件的目标但他的子视图可以</Text>
        <Text style={{ color: 'red' }}>预期效果为: 点击A打印A Touched,点击B打印A Touched,点击C打印C Touched、B touched和A Touched</Text>
        <Text>实际效果: </Text>
        <SafeAreaView
          onTouchStart={() => this.props.onLog('A touched')}
          style={{
            height: 250,
            backgroundColor: '#aaccff',
            borderWidth: 1,
            borderColor: '#7799cc',
            padding: 10,
            margin: 5,
          }}
        >
          <DemoText style={styles.text}>A未设置属性值</DemoText>
          <SafeAreaView
            pointerEvents="box-none"
            onTouchStart={() => this.props.onLog('B touched')}
            style={[{
              height: 150,
              backgroundColor: '#aaccff',
              borderWidth: 1,
              borderColor: '#7799cc',
              padding: 10,
              margin: 5,
            }, styles.boxPassedThrough]}
          >
            <DemoText style={[styles.text, styles.textPassedThrough]}>
              B属性值:pointerEvents="box-none"
            </DemoText>
            <SafeAreaView
              onTouchStart={() => this.props.onLog('C touched')}
              style={{
                height: 80,
                backgroundColor: '#aaccff',
                borderWidth: 1,
                borderColor: '#7799cc',
                padding: 10,
                margin: 5,
              }}
            >
              <DemoText style={styles.text}>C属性值: 未设置</DemoText>
            </SafeAreaView >
          </SafeAreaView >
        </SafeAreaView >
      </View>
    );
  }
}

class SafeAreaViewBoxOnlyExample extends React.Component<$FlowFixMeProps> {
  render(): React.Node {
    return (
      <View style={{ height: 350 }}>
        <Text>值为box-only时,可以成为点击事件的目标但他的子视图不可以</Text>
        <Text style={{ color: 'red' }}>预期效果为: 点击A打印A touched,点击B打印B touched和A touched,点击C打印B touched和A touched</Text>
        <Text>实际效果: </Text>
        <SafeAreaView
          onTouchStart={() => this.props.onLog('A touched')}
          style={{
            height: 250,
            backgroundColor: '#aaccff',
            borderWidth: 1,
            borderColor: '#7799cc',
            padding: 10,
            margin: 5,
          }}
        >
          <DemoText style={styles.text}>A未设置属性值</DemoText>
          <SafeAreaView
            pointerEvents="box-only"
            onTouchStart={() => this.props.onLog('B touched')}
            style={{
              height: 150,
              backgroundColor: '#aaccff',
              borderWidth: 1,
              borderColor: '#7799cc',
              padding: 10,
              margin: 5,
            }}
          >
            <DemoText style={styles.text}>B属性值: pointerEvent:box-only</DemoText>
            <SafeAreaView
              onTouchStart={() => this.props.onLog('C touched')}
              style={[{
                height: 80,
                backgroundColor: '#aaccff',
                borderWidth: 1,
                borderColor: '#7799cc',
                padding: 10,
                margin: 5,
              }, styles.boxPassedThrough]}
            >
              <DemoText style={[styles.text, styles.textPassedThrough]}>
                C属性值: auto
              </DemoText>
            </SafeAreaView >
          </SafeAreaView >
        </SafeAreaView >
      </View>
    );
  }
}
class SafeAreaViewAutoExample extends React.Component<$FlowFixMeProps> {
  render(): React.Node {
    return (
      <View style={{height:350}}>
        <Text>值为auto时,视图可以作为触控事件的目标</Text>
        <Text style={{ color: 'red' }}>预期效果为: 点击A打印A touched,点击B打印B touched和A touched,点击C打印C touched、 B touched和A touched</Text>
        <Text>实际效果: </Text>
        <SafeAreaView
          onTouchStart={() => this.props.onLog('A touched')}
          style={{
            height: 250,
            backgroundColor: '#aaccff',
            borderWidth: 1,
            borderColor: '#7799cc',
            padding: 10,
            margin: 5,
          }}
        >
          <DemoText style={styles.text}>A未设置属性值</DemoText>
          <SafeAreaView
            pointerEvents="auto"
            onTouchStart={() => this.props.onLog('B touched')}
            style={{
              height: 150,
              backgroundColor: '#aaccff',
              borderWidth: 1,
              borderColor: '#7799cc',
              padding: 10,
              margin: 5,
            }}
          >
            <DemoText style={styles.text}>B属性值: pointerEvent:auto</DemoText>
            <SafeAreaView
              onTouchStart={() => this.props.onLog('C touched')}
              style={[styles.boxPassedThrough,{
                height: 80,
                backgroundColor: '#aaccff',
                borderWidth: 1,
                borderColor: '#7799cc',
                padding: 10,
                margin: 5,
              }]}
            >
              <DemoText style={[styles.text, styles.textPassedThrough]}>
                C属性值: auto
              </DemoText>
            </SafeAreaView >
          </SafeAreaView >
        </SafeAreaView >
      </View>
    );
  }
}


const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Forth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Sixth Item',
  },
];

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

//VirtualizedLists-based components(like FlatList) cannot be nested in ScrollView with the same scroll direction.
//So we set it horizontal.
const SafeAreaViewRemoveClippedSubviews= () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <View>
      <Text>属性值：removeClippedSubviews=true</Text>
      <Text>预期结果：子视图加载时间更短</Text>
      <Text>实际结果：</Text>
      <SafeAreaView style={[styles.container,{height:150}]}
      removeClippedSubviews={true}
      >
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
      </SafeAreaView>
    </View>
  );
}

class SafeAreaViewStyle extends React.Component {
  render(): React.Node {
    return (
      <View>
        <Text>属性值：Style=height:200, width:200, borderWidth:2, backgroundColor:'rgb(220,109,135)'</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 200, width:200}}
        source={require('../../../assets/SafeAreaViewStyle-1.png')}/>
        <Text>实际结果：</Text>
        <View>
          <SafeAreaView 
          style={
            styles.styleBox
          }>
          </SafeAreaView>
        </View>
      </View>
    );
  }
}

class SafeAreaViewTestId extends React.Component {
  render(): React.Node {
    return (
      <View style={{height: 300}}>
        <Text>属性值：testID="safeAreaView_test_ID"</Text>
        <Text>预期结果：</Text>
        <Image 
        style={{height: 80, width:250}}
        source={require('../../../assets/SafeAreaViewTestId-1.png')}/>
        <Text>实际结果：</Text>
        <View style={{height: 80}}>
          <SafeAreaView 
            style={{
              position: 'absolute',
              fontSize: 16,
              backgroundColor: '#eeeeee',
              borderColor: '#666666',
              borderWidth: 5,
              borderTopWidth: 20,
              borderRadius: 10,
              padding: 10,
              paddingTop: 20,
            }}
            testID="safeAreaView_test_ID"
            >
            <Text>Placeholder defines intrinsic size</Text>
            </SafeAreaView >
        </View>
      </View>
    );
  }
}


class SafeAreaViewcollapsable extends React.Component {
  render(): React.Node {
  return (
    <View style={{flex:1,height:300}}>
      <Text>属性值：collapsable=false</Text>
      <Text>预期结果：当collapsable属性为false时，视图不隐藏</Text>
      <Text>实际结果：</Text>
      <SafeAreaView style={{height:100,
        margin:10,
        marginBottom:20,
        backgroundColor:'red'}}>
      </SafeAreaView >
      <SafeAreaView style={{alignItems:'center',margin:10}}
      collapsable={false}
      >
      </SafeAreaView >
      <SafeAreaView style={{ height:100,
        margin:10,
        backgroundColor:'pink'}}>
      </SafeAreaView >
    </View>
    );
  }
}

class SafeOffscreenAlphaCompositing extends React.Component {
  render(): React.Node {
    return (
      <View>
        <Text>属性值:needsOffscreenAlphaCompositing</Text>
        <Text>预期结果：needsOffscreenAlphaCompositing为true时，先离屏渲染，再显示半透明状态；needsOffscreenAlphaCompositing为false时，先显示半透明状态，再离屏渲染</Text>
        <Text>实际结果：</Text>
        <SafeAreaView style={{flex: 1,
        backgroundColor:'red',
        marginBottom:5}} needsOffscreenAlphaCompositing={true}>
         <Text style={{ fontSize:14}}>needsOffscreenAlphaCompositing=true</Text>
        </SafeAreaView>
         <SafeAreaView style={{flex: 1,
        backgroundColor:'red',
        marginBottom:5,opacity:0.8 }}>
         <Text style={{ fontSize:14}}>无needsOffscreenAlphaCompositing</Text>
        </SafeAreaView>
          <SafeAreaView style={{flex: 1,
        backgroundColor:'red',
        marginBottom:5}} needsOffscreenAlphaCompositing={false}>
         <Text style={{ fontSize:14}}>needsOffscreenAlphaCompositing=false</Text>
        </SafeAreaView>
      </View>
      );
  }
}

function SafeRenderToHardwareTextureAndroid ():React.Node {
  const [btn,setBtn]=React.useState(0);
    return (
    <View>
      <Text>属性值:renderToHardwareTextureAndroid</Text>
      <Text>预期结果：renderToHardwareTextureAndroid为true时红色区域的透明的随点击按钮的透明度进行显示</Text>
      <Text>实际结果：</Text>
      <View style={{marginBottom:5}}>
        <Button title='opacity:0' onPress={() => {setBtn(0);}} ></Button>
      </View>
      <View style={{marginBottom:5}}>
       <Button title='opacity:0.3' onPress={() => {setBtn(0.3);}}></Button>
      </View>
      <View style={{marginBottom:5}}>
       <Button title='opacity:0.5' onPress={() => {setBtn(0.5);}}></Button>
      </View>
      <View style={{marginBottom:5}}>
       <Button title='opacity:0.8' onPress={() => {setBtn(0.8);}}></Button>
      </View>
      <View style={{marginBottom:3}}>
       <Button title='opacity:1' onPress={() => {setBtn(1);}}></Button>
      </View>
      <SafeAreaView style={{flex:1, opacity: btn,backgroundColor:'red',}}
      renderToHardwareTextureAndroid={true}
      > 
        <Text style={{ fontSize:24, textAlign:'center'}}>红色区域</Text>
      </SafeAreaView>
    </View>
    );
}

function SafeShouldRasterizeIOS() {
  const [touch,setTouch]=React.useState(30);
  return (
   <View style={{height:430}}>
      <Text>属性值:shouldRasterizeIOS=true</Text>
      <Text>预期结果：点击按钮移动红色区域的位置的时候，预渲染允许渲染器重用一个缓存了静态视图的位图，并快速合成</Text>
      <Text>实际结果：</Text>
      <View style={{margin: 10}}>
        <Button title='button1' onPress={() => {setTouch(0)}}></Button >
      </View>
      <View style={{margin: 10 }}>
        <Button title='button2' onPress={() => {setTouch(30)}}></Button >
      </View>
      <SafeAreaView style={{ width:200,
        height:200,
        backgroundColor:'red',
        transform: [{translateY: touch}],
        left:50,
        }}
        shouldRasterizeIOS={true}
        >
      </SafeAreaView>
   </View>
  );
}



class SafeAreaViewnextFocus extends React.Component {
  render(): React.Node {
    return (
      <View>
        <Text>属性值：nextFocusUp nextFocusDown nextFocusLeft nextFocusRight nextFocusForward</Text>
        <Text>预期结果：当光标向上，向下，向左，向右以及返回时，选中响应视图</Text>
        <Text>实际结果：</Text>
        <SafeAreaView style={{
            marginBottom: 10,
            width: 100, height: 100,
            backgroundColor: 'pink'}}
            focusable={true}
            nextFocusForward={true}>
          <Text>焦点</Text>
        </SafeAreaView>
        <SafeAreaView style={{
            marginBottom: 10,
            width: 100, height: 100,
            backgroundColor: 'pink'}}
            focusable={true}
            nextFocusUp={true}>
          <Text>上</Text>
        </SafeAreaView>
        <SafeAreaView style={{
            marginBottom: 10,
            width: 100, height: 100,
            backgroundColor: 'pink'}}
            focusable={true}
            nextFocusDown={true}>
          <Text>下</Text>
        </SafeAreaView>
        <SafeAreaView style={{
            marginBottom: 10,
            width: 100, height: 100,
            backgroundColor: 'pink'}}
            focusable={true}
            nextFocusLeft={true}>
          <Text>左</Text>
        </SafeAreaView>
        <SafeAreaView style={{
            marginBottom: 10,
            width: 100, height: 100,
            backgroundColor: 'pink'}}
            focusable={true}
            nextFocusRight={true}>
          <Text>右</Text>
        </SafeAreaView>
      </View>
    );
  }
}


class SafeAreaViewfocusable extends React.Component {
  render(): React.Node {
    return (
      <View>
        <Text>属性值:focusable:true</Text>
        <Text>预期结果：当focusable为true视图可以被选中</Text>
        <Text>实际结果：</Text>
        <SafeAreaView
          style={{
            marginBottom: 10,
            width: 100, height: 100,
            backgroundColor: 'pink',
            shadowColor: 'blue',
          }}
          focusable={false}
        >
          <Text>第一个view</Text>
        </SafeAreaView>
        <SafeAreaView
          style={{
            width: 100, height: 100,
            backgroundColor: 'red',
            shadowColor: 'blue',
          }}
          focusable={true}
        >
          <Text>第二个view</Text>
        </SafeAreaView>
      </View>
    );
  }
}

function SafeAreaViewAccessible() {
  const [changeValue, setChangeValue] = useState(true);
  return (
    <View>
      <Text>属性值：{'accessible={changeValue}'}</Text>
      <Text>预期结果：设置为true时表示当前视图是一个“无障碍元素”（accessibility element）。无障碍元素会将其所有子组件视为一整个可以选中的组件,即无法单独选中'text one'和'text two'，而只能选中整个父视图</Text>
      <Text>1.当changeValue值为true，无法单独选中'text one'和'text two'</Text>
      <Text>2.当changeValue值为false，可以单独选中'text one'和'text two'</Text>
      <Text>实际结果：</Text>
      <Pressable
        style={{ backgroundColor: '#AFEEEE', borderRadius: 5, }}
        onPress={() => {
          setChangeValue(!changeValue)
        }}>
        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>按压切换changeValue：{JSON.stringify(changeValue)}</Text>
      </Pressable>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5 }}
        accessible={changeValue}
      >
        <Text style={{padding:10}}>text one</Text>
        <Text style={{padding:10}}>text two</Text>
      </SafeAreaView>
    </View>
  )
}


function SafeAreaViewAccessibilityLabel() {
  return (
    <View>
      <Text>属性值：{"accessibilityLabel='Tap me!'"}</Text>
      <Text>预期结果：设置accessibilityLabel标签后，点击会读出选中元素的无障碍标签Tap me,不会读文本内容：text one，text two</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5 }}
        accessible={true}
        accessibilityLabel='Tap me!'
      >
        <Text style={{padding:10}}>text one</Text>
        <Text style={{padding:10}}>text two</Text>
      </SafeAreaView>
    </View>
  )
}

class SafeAreaViewTabIndex extends React.Component {
  render(): React.Node {
    return (
      <View>
        <Text>属性值:tabIndex</Text>
        <Text>预期结果：tabIndex为-1时不聚焦，不可以被选中，tabIndex为0和正值时聚焦，它的相对顺序按照tabindex的数值递增而滞后获焦</Text>
        <Text>实际结果：</Text>
        <SafeAreaView style={{flex:1,backgroundColor:'pink',marginBottom:5}} tabIndex='-1'>
          <Text style={{ fontSize:24, color:'white'}}>tabIndex=-1</Text>
        </SafeAreaView>
        <SafeAreaView style={{flex:1,backgroundColor:'red',marginBottom:5}} tabIndex='0'>
          <Text style={{ fontSize:24, color:'white'}}>tabIndex=0</Text>
        </SafeAreaView>
        <SafeAreaView style={{flex:1,backgroundColor:'green'}} tabIndex='1'>
          <Text style={{ fontSize:24, color:'white'}}>tabIndex=1</Text>
        </SafeAreaView>
      </View>
      );
  }
}




function SafeAreaViewOnlayout() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 44 })
  const increaseHeight = () => {
    if (dimensions.height > 400) {
      return
    }
    setDimensions({ width: dimensions.width, height: dimensions.height + 50 });
  };
  const decreaseHeight = () => {
    if (dimensions.height < 100) {
      return
    }
    setDimensions({ width: dimensions.width, height: dimensions.height - 50 });
  };
  return (
    <View>
      <Text>属性值：{' onLayout={(event) => {const { x, y, width, height } = event.nativeEvent.layout;'}</Text>
      <Text>预期结果：显示当前区域的高度和宽度</Text>
      <Text>实际结果：</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        <Pressable onPress={increaseHeight} style={{ borderWidth: 1, borderRadius: 10, padding: 8, backgroundColor: '#AFEEEE', width: 100 }}>
          <Text>increase</Text>
        </Pressable>
        <Pressable onPress={decreaseHeight} style={{ borderWidth: 1, borderRadius: 10, padding: 8, backgroundColor: '#AFEEEE', width: 100 }}>
          <Text>decrease</Text>
        </Pressable>
      </View>
      <SafeAreaView style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, height: dimensions.height }}
        onLayout={(event) => {
          const { x, y, width, height } = event.nativeEvent.layout;
          setDimensions({ width: width, height: height });
        }}>
        <Text>height: {dimensions.height}</Text>
        <Text>width: {dimensions.width}</Text>
      </SafeAreaView>
    </View>
  )
}


function SafeAreaViewOnStartShouldSetResponder() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View>
      <Text>属性值：{'onStartShouldSetResponder={(event) => {setTimesTouch(current => current + 1);}}'}</Text>
      <Text>预期结果：在粉红方框范围内触摸启动，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onStartShouldSetResponder={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
        }}
      >
        <Text>Touch Me</Text>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}


function SafeAreaViewOnStartShouldSetResponderCapture() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  const [log, setLog] = useState('');
  const [changeValue, setChangeValue] = useState(false);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x '+ log;
  } else if (timesTouch > 0) {
    textLog = log ;
  }
  return (
    <View>
      <Text>属性值：{'onStartShouldSetResponderCapture={() => changeValue'}</Text>
      <Text>预期结果：</Text>
      <Text>1.当changeValue的值为false时，在蓝色方框内触摸移动，log文本run done2前面的次数增加，例如：run done2变为2x run done2</Text>
      <Text>2.当changeValue的值为true时，在粉红色方框内触摸移动,log文本run done1前面的次数增加，例如：run done2变为2x run done1</Text>
      <Text>实际结果：</Text>
      <Pressable
        style={{ backgroundColor: '#AFEEEE', borderRadius: 5, }}
        onPress={() => {
          setChangeValue(!changeValue);
          setTimesTouch(0);
          setTouchEventContext(null);
        }}>
        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>按压切换changeValue：{JSON.stringify(changeValue)}</Text>
      </Pressable>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onStartShouldSetResponderCapture={() => changeValue}
        onResponderGrant={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
          setLog("run done1");
        }}
      >
        <Text>Touch Me</Text>
        <SafeAreaView
          style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
          onStartShouldSetResponder={() => true}
          onResponderGrant={(event) => {
            setTimesTouch(current => current + 1);
            setTouchEventContext(event.nativeEvent);
            setLog("run done2");
          }}
        >
          <Text>B Touch Me</Text>
        </SafeAreaView>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewOnMoveShouldSetResponder() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View>
      <Text>属性值：{'onMoveShouldSetResponder={(event) => {setTimesTouch(current => current + 1);}}'}</Text>
      <Text>预期结果：在粉红方框范围内触摸移动，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onMoveShouldSetResponder={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
        }}
      >
        <Text>Touch Me</Text>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewOnMoveShouldSetResponderCapture() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  const [log, setLog] = useState('');
  const [changeValue, setChangeValue] = useState(false);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x '+ log;
  } else if (timesTouch > 0) {
    textLog = log ;
  }
  return (
    <View>
      <Text>属性值：{'onMoveShouldSetResponderCapture={() => changeValue'}</Text>
      <Text>预期结果：</Text>
      <Text>1.当changeValue的值为false时，在蓝色方框内触摸移动，log文本run done2前面的次数增加，例如：run done2变为2x run done2</Text>
      <Text>2.当changeValue的值为true时，在粉红色方框内触摸移动,log文本run done1前面的次数增加，例如：run done2变为2x run done1</Text>
      <Text>实际结果：</Text>
      <Pressable
        style={{ backgroundColor: '#AFEEEE', borderRadius: 5, }}
        onPress={() => {
          setChangeValue(!changeValue);
          setTimesTouch(0);
          setTouchEventContext(null);
        }}>
        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>按压切换changeValue：{JSON.stringify(changeValue)}</Text>
      </Pressable>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onMoveShouldSetResponderCapture={() => changeValue}
        onResponderGrant={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
          setLog("run done1");
        }}
      >
        <Text>Touch Me</Text>
        <SafeAreaView
          style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
          onMoveShouldSetResponder={() => true}
          onResponderGrant={(event) => {
            setTimesTouch(current => current + 1);
            setTouchEventContext(event.nativeEvent);
            setLog("run done2");
          }}
        >
          <Text>B Touch Me</Text>
        </SafeAreaView>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}


function SafeAreaViewOnResponderGrant() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View>
      <Text>属性值：{'onResponderGrant = {(event) => {setTimesTouch(current => current + 1);}}'}</Text>
      <Text>预期结果：在粉红方框范围内触摸，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5,}}
        // onStartShouldSetResponderCapture={() => true}
        // onMoveShouldSetResponder={() => true}
        // onStartShouldSetResponder={() => true}
        onMoveShouldSetResponderCapture={() => true}
        onResponderGrant={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
        }}
      >
        <Text>Touch Me</Text>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewOnResponderMove() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View>
      <Text>属性值：{'onResponderMove = {(event) => {setTimesTouch(current => current + 1);}}'}</Text>
      <Text>预期结果：在粉红方框范围内触摸移动，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onStartShouldSetResponderCapture={() => true}
        // onMoveShouldSetResponder={() => true}
        // onStartShouldSetResponder={() => true}
        // onMoveShouldSetResponderCapture={() => true}
        onResponderMove={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
        }}
      >
        <Text>Touch Me</Text>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewOnResponderRelease() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View>
      <Text>属性值：{'onResponderRelease = {(event) => {setTimesTouch(current => current + 1);}}'}</Text>
      <Text>预期结果：在粉红方框范围内触摸后松开，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onStartShouldSetResponder={() => true}
        onResponderRelease={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
        }}
      >
        <Text>Touch Me</Text>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewOnResponderReject() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View>
      <Text>属性值：{'onResponderReject = {(event) => {setTimesTouch(current => current + 1);}}'}</Text>
      <Text>预期结果：在蓝色方框内触摸，蓝色方框不放权，粉红色方框内则请求失败，回调onResponderReject方法，即在蓝色方框触摸移动，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderReject={(event) => { 
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
         }} 
      >
        <Text>A Touch Me</Text>
        <SafeAreaView
          style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderTerminationRequest={() => false}
          onResponderGrant={() => {  }}   
        >
          <Text>B Touch Me</Text>
        </SafeAreaView>
      </SafeAreaView>
      
      <View style={{ padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9', }}>
        <Text>log文本：</Text>
        <Text style={{ paddingTop: 5 }}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}


function SafeAreaViewOnResponderTerminate() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);

  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x run done!';
  } else if (timesTouch > 0) {
    textLog = 'run done!';
  }
  return (
    <View>
      <Text>属性值：{'onResponderTerminate = {(event) => {setTimesTouch(current => current + 1);}}'}</Text>
      <Text>预期结果：在蓝色方框范围内触摸，log文本run done!前面的次数增加，例如：run done!变为2x run done!</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={() => { }}
      >
        <Text>Touch Me</Text>
        <SafeAreaView
          style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderTerminationRequest={() => true}
          onResponderTerminate={(event) => {
            setTimesTouch(current => current + 1);
            setTouchEventContext(event.nativeEvent);
          }}
        >
          <Text>B Touch Me</Text>
        </SafeAreaView>
      </SafeAreaView>
      <View style={{ padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9', }}>
        <Text>log文本：</Text>
        <Text style={{ paddingTop: 5 }}>{textLog}</Text>
      </View>
      <View style={{ padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9', }}>
        <Text>TouchEvent：</Text>
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewOnResponderTerminationRequest() {
  const [timesTouch, setTimesTouch] = useState(0);
  const [touchEventContext, setTouchEventContext] = useState < NativeTouchEvent > (null);
  const [log, setLog] = useState('');
  const [changeValue, setChangeValue] = useState(false);
  let textLog = 'ready';
  if (timesTouch > 1) {
    textLog = timesTouch + 'x '+ log;
  } else if (timesTouch > 0) {
    textLog = log ;
  }
  return (
    <View>
      <Text>属性值：{'onResponderTerminationRequest={() => changeValue}'}</Text>
      <Text>预期结果：</Text>
      <Text>1.当changeValue的值为false时，在蓝色方框内触摸移动，log文本run done1前面的次数增加，例如：run done1变为2x run done1</Text>
      <Text>2.当changeValue的值为true时，在蓝色方框内触摸移动,log文本run done2前面的次数增加，例如：run done2变为2x run done2</Text>
      <Text>实际结果：</Text>
      <Pressable
        style={{ backgroundColor: '#AFEEEE', borderRadius: 5, }}
        onPress={() => {
          setChangeValue(!changeValue);
          setTimesTouch(0);
          setTouchEventContext(null);
        }}>
        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>按压切换changeValue：{JSON.stringify(changeValue)}</Text>
      </Pressable>
      <SafeAreaView
        style={{ flex: 1, borderColor: 'pink', borderWidth: 5, }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderReject={(event) => {
          setTimesTouch(current => current + 1);
          setTouchEventContext(event.nativeEvent);
          setLog("run done1");
        }}
      >
        <Text>Touch Me</Text>
        <SafeAreaView
          style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderTerminationRequest={() => changeValue}
          onResponderTerminate={(event) => {
            setTimesTouch(current => current + 1);
            setTouchEventContext(event.nativeEvent);
            setLog("run done2");
          }}
        >
          <Text>B Touch Me</Text>
        </SafeAreaView>
      </SafeAreaView>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>log文本：</Text>
        <Text style={{paddingTop: 5}}>{textLog}</Text>
      </View>
      <View style={{padding: 10, width: '100%', height: 'auto', borderColor: '#527FE4', borderWidth: 5, backgroundColor: '#f9f9f9',}}>
        <Text>TouchEvent：</Text> 
        <Text>{JSON.stringify(touchEventContext)}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewAccessibilityActions() {
  const [bg, setBg] = useState('#FFFFFF');
  return (
    <View>
      <Text>属性值：28.{"accessibilityActions={[{name: 'activate',label: 'activate'}]} "} </Text>
      <Text>属性值：76.onAccessibilityAction</Text>
      <Text>预期结果：双击文本内容后，背景变为粉红色</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, backgroundColor: bg }}
        accessible={true}
        accessibilityActions={[{ name: 'activate', label: 'activate' }]}
        onAccessibilityAction={event => {
          if (event.nativeEvent.actionName === 'activate') {
            setBg('pink');
          }
        }}
      >
        <Text style={{ padding: 10 }}>text one</Text>
        <Text style={{ padding: 10 }}>text two</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAccessibilityLiveRegion() {
  const [message, setMessage] = useState('');
  const accessibilityLiveRegions = ['none', 'polite', 'assertive'];
  const [accessibilityLiveRegion, setAccessibilityLiveRegion] = useState('none');
  return (
    <View>
      <Text>属性值： accessibilityLiveRegion</Text>
      <Text>预期结果：</Text>
      <Text>1.当属性值accessibilityLiveRegion为none，点击发送后不会读出文本内容，</Text>
      <Text>2.当属性值accessibilityLiveRegion为polite，点击发送后会读出文本内容，</Text>
      <Text>2.当属性值accessibilityLiveRegion为assertive，点击发送后如果在语音回话会立即打断当前的语音会话，提醒用户当前视图的变化读出文本内容</Text>
      <Text>实际结果：</Text>
      <View>
        {accessibilityLiveRegions.map(value => (
          <Button
            title={value}
            active={value === accessibilityLiveRegion}
            label={value}
            key={value}
            onPress={() => {
              setAccessibilityLiveRegion(value);
              setMessage('')
            }}
            style={{height:30,width:10}}
          />
        ))}
      </View>

      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        accessibilityLiveRegion={accessibilityLiveRegion}
      >
        <Text>{message}</Text>

      </SafeAreaView>
      <Button title="点击" onPress={() => { setMessage('新消息已发送'); }} />
    </View>
  )
}
   
function SafeAreaViewAria_busy() {
  return (
    <View>
      <Text>属性值：{'aria-busy={true} '} </Text>
      <Text>预期结果：当aria-busy值为true时，提示busy</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-busy={true}
       >
        <Text style={{ padding: 10 }}>text one</Text>
        <Text style={{ padding: 10 }}>text two</Text>
      </SafeAreaView>
      <Text>属性值：{'aria-busy={false} '}</Text>
      <Text>预期结果：当aria-busy值为false时，读出文本内容text one, text two </Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-busy={false}
       >
        <Text style={{ padding: 10 }}>text one</Text>
        <Text style={{ padding: 10 }}>text two</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAria_checked() {
  const [aria_checked, setAria_checked] = useState(false);
  return (
    <View>
      <Text>属性值：aria-checked </Text>
      <Text>预期结果：</Text>
      <Text>1.当aria-checked为false时，提示元素未被选择</Text>
      <Text>2.当aria-checked为true时，提示元素被选择</Text>
      <Text>实际结果：</Text>
      <Button
        title={'aria_checked: ' + aria_checked.toString()}
        onPress={() => setAria_checked(!aria_checked)}
        label={'aria_checked: ' + aria_checked.toString()}
        />
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-checked={aria_checked}
       >
        <Text style={{ padding: 10 }}>text one</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAria_disabled() {
  const [aria_disabled, setAria_disabled] = useState(false);
  return (
    <View>
      <Text>属性值：aria-disabled </Text>
      <Text>预期结果：</Text>
      <Text>1.当aria-disabled为false时，表示清除非激活状态</Text>
      <Text>2.当aria-disabled为true时，表示当前是非激活状态，提示元素不可点击</Text>
      <Text>实际结果：</Text>
      <Button
        title={'aria_disabled: ' + aria_disabled.toString()}
        onPress={() => setAria_disabled(!aria_disabled)}
        label={'aria_disabled: ' + aria_disabled.toString()}
        />
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-disabled={aria_disabled}
       >
        <Text style={{ padding: 10 }}>text one</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAria_expanded() {
  const [aria_expanded, setAria_expanded] = useState(false);
  return (
    <View>
      <Text>属性值：aria-expanded </Text>
      <Text>预期结果：</Text>
      <Text>1.当aria-expanded为false时，表示元素不是展开</Text>
      <Text>2.当aria-expanded为true时，表示元素是展开的</Text>
      <Text>实际结果：</Text>
      <Button
        title={'aria_expanded: ' + aria_expanded.toString()}
        onPress={() => setAria_expanded(!aria_expanded)}
        label={'aria_expanded: ' + aria_expanded.toString()}
      />
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-expanded={aria_expanded}
      >
        <Text style={{ padding: 10 }}>text one</Text>
        <Text style={{ padding: 10 }}>text two</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAria_hidden() {
  const [aria_hidden, setAria_hidden] = useState(false);
  return (
    <View>
      <Text>属性值：aria-hidden </Text>
      <Text>预期结果：</Text>
      <Text>1.当aria-hidden为false时，表示元素可见，可点击文本内容</Text>
      <Text>2.当aria-hidden为true时，表示元素隐藏(不可见)，不可点击到文本</Text>
      <Text>实际结果：</Text>
      <Button
        title={'aria_hidden: ' + aria_hidden.toString()}
        onPress={() => setAria_hidden(!aria_hidden)}
        label={'aria_hidden: ' + aria_hidden.toString()}
        />
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-hidden={aria_hidden}
      >
        <Text style={{ padding: 10 }}>text one</Text>
        <Text style={{ padding: 10 }}>text one</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAria_label() {
  return (
    <View>
      <Text>属性值：{"aria-label='这是在一个“安全”的可视区域内渲染内容的组件'"} </Text>
      <Text>预期结果：点击文本内容提示：这是在一个“安全”的可视区域内渲染内容的组件</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-label='这是在一个“安全”的可视区域内渲染内容的组件'
      >
        <Text style={{ padding: 10 }}>text one</Text>
        <Text style={{ padding: 10 }}>text two</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAccessibilityLanguage() {
  return (
    <View>
      <Text>属性值：accessibilityLanguage</Text>
      <Text>预期效果:使用中文的辅助功能打开时，点击这个视图，可以听到 "love" 的声音提示</Text>
      <Text>实际效果:</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        accessibilityLabel="love"
        accessibilityLanguage="zh">
        <Image 
        style={{height: 40, width:50}}
        source={require('../../../assets/SafeAreaView_heart.png')}/>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewAccessibilityIgnoresInvertColors() {
  const [accessibilityIgnoresInvertColors, setAccessibilityIgnoresInvertColors] = useState(false);
  return (
    <View>
      <Text>属性值：accessibilityIgnoresInvertColors</Text>
      <Text>预期效果:</Text>
      <Text>1.当accessibilityIgnoresInvertColors值为false，开启反色功能后，颜色将不会受到反色功能的影响，保持原来的颜色</Text>
      <Text>1.当accessibilityIgnoresInvertColors值为true，开启反色功能后，颜色都会受到反色功能的影响，发生颜色反转</Text>
      <Text>实际效果:</Text>
      <Button
        title={'反转屏幕颜色: ' + accessibilityIgnoresInvertColors.toString()}
        onPress={() => setAccessibilityIgnoresInvertColors(!accessibilityIgnoresInvertColors)}
        label={'accessibilityIgnoresInvertColors: ' + setAccessibilityIgnoresInvertColors.toString()}
      />
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, backgroundColor: 'red' }}
        accessible={true}
        accessibilityIgnoresInvertColors={false}>
        <Text>text</Text>
      </SafeAreaView>
    </View>
  )
}

function SafeAreaViewOnMagicTap() {
  const [onMagicTap, setOnMagicTap] = useState('ready')
  return (
    <View>
      <Text>属性值：onMagicTap</Text>
      <Text>预期效果:当双指双击下方文字，log文本内容由ready变为run done</Text>
      <Text>实际效果:</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        onMagicTap={() => {
          setOnMagicTap('run done!')
        }}
      >
        <Text style={{ fontSize: 16 }}>press me</Text>
      </SafeAreaView>
      <View style={{ marginTop: 10, borderColor: '#f0f0f0', backgroundColor: '#f9f9f9', }}>
        <Text>log文本：</Text>
        <Text style={{ padding: 10 }}>{onMagicTap}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewOnAccessibilityTap() {
  const [onAccessibilityTap, setOnAccessibilityTap] = useState('ready');
  return (
    <View>
      <Text>属性值：onAccessibilityTap</Text>
      <Text>预期结果：当双击下方文字，log文本内容由ready变为run done</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        accessibilityLabel="press me"
        onAccessibilityTap={() => {
          setOnAccessibilityTap('run done')
        }}
      >
        <Text style={{ fontSize: 16 }}>press me</Text>
      </SafeAreaView>
      <View style={{ marginTop: 10, borderColor: '#f0f0f0', backgroundColor: '#f9f9f9', }}>
        <Text>log文本：</Text>
        <Text style={{ padding: 10 }}>{onAccessibilityTap}</Text>
      </View>
    </View>
  )
}

function SafeAreaViewAria_valuetext() {
  return (
    <View>
      <Text>属性值：{"aria-valuetext='20'"} </Text>
      <Text>预期结果：读出aria-valuetext的值，20 </Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-valuetext='20'
      >
        <Text style={{ padding: 10 }} >text one</Text>
        <Text style={{ padding: 10 }} >text two</Text>
      </SafeAreaView>
    </View>
  )
}

const roleList = [
  { type: 'alert', expect: '提示alert', value: '警告' },
  { type: 'button', expect: '提示当前内容是一个按钮', value: '按钮' },
  { type: 'checkbox', expect: '提示当前内容是一个复选框', value: '复选框' },
  { type: 'heading', expect: '提示当前内容是一个标题', value: '标题' },
  { type: 'menu', expect: '提示当前内容是一个menu', value: '菜单' },
  { type: 'menubar', expect: '提示当前内容是一个menubar', value: '菜单栏' },
  { type: 'menuitem', expect: '提示当前内容是一个menuitem', value: '菜单项' },
  { type: 'progressbar', expect: '提示当前内容是一个progressbar', value: '进度条' },
  { type: 'radio', expect: '提示当前内容是一个单选按钮', value: '单选' },
  { type: 'radiogroup', expect: '提示当前内容是一个radiogroup', value: '单选按钮组' },
  { type: 'slider', expect: '提示当前内容是一个进度条', value: '	滑动条' },
  { type: 'spinbutton', expect: '提示当前内容是一个spinbutton', value: '微调' },
  { type: 'tab', expect: '提示当前内容是一个tab', value: 'tab标签' },
  { type: 'tablist', expect: '提示当前内容是一个tablist', value: '提示文本' },
  { type: 'timer', expect: '提示当前内容是一个timer', value: '计数' },
  { type: 'toolbar', expect: '提示当前内容是一个toolbar', value: '工具栏' },
]
function SafeAreaViewRole() {
  return (
    <View>
      {roleList.map((item, index) => (
        <View key={index} style={{ paddingBottom: 10 }}>
          <Text>属性值：{item.type}</Text>
          <Text>预期结果：{item.expect}</Text>
          <Text>实际结果：</Text>
          <SafeAreaView
            style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
            accessible={true}
            role={item.type}>
            <Text style={{ padding: 10 }} >{item.value}</Text>
          </SafeAreaView>
        </View>
      ))}
    </View>
  )
}

const accessibilityRoleList = [
  { type: 'adjustable', expect: '提示当前内容是一个进度条', value: '元素具有可调整的特性' },
  { type: 'alert', expect: '提示当前内容是一个alert', value: '警告' },
  { type: 'button', expect: '提示当前内容是一个按钮', value: 'button' },
  { type: 'checkbox', expect: '提示当前内容是一个复选框', value: 'checkbox' },
  { type: 'combobox', expect: '提示当前内容是一个combobox', value: 'combobox' },
  { type: 'header', expect: '提示当前内容是一个标题', value: '内容区域的头部' },
  { type: 'image', expect: '提示当前内容是一个image', value: '图片' },
  { type: 'imagebutton', expect: '提示当前内容是一个button、image', value: '元素应被视为按钮并且也是图像时使用' },
  { type: 'link', expect: '提示当前内容是一个link', value: '链接' },
  { type: 'menu', expect: '提示当前内容是一个menu', value: '菜单' },
  { type: 'menubar', expect: '提示当前内容是一个menubar', value: '菜单栏' },
  { type: 'menuitem', expect: '提示当前内容是一个menuitem', value: '菜单项' },
  { type: 'progressbar', expect: '提示当前内容是一个progressbar', value: '进度条' },
  { type: 'radio', expect: '提示当前内容是一个单选按钮', value: 'radio' },
  { type: 'radiogroup', expect: '提示当前内容是一个radiogroup', value: '表示一组单选按钮' },
  { type: 'scrollbar', expect: '提示当前内容是一个scrollbar', value: '滚动条' },
  { type: 'search', expect: '提示当前内容是一个编辑框', value: '用作搜索框的文本框' },
  { type: 'spinbutton', expect: '提示当前内容是一个spinbutton', value: '表示打开选项列表的按钮' },
  { type: 'summary', expect: '提示当前内容是一个summary', value: '提供当前的简要总结信息的元素' },
  { type: 'switch', expect: '提示当前内容是一个关闭开关', value: '表示可以打开和关闭的开关' },
  { type: 'tab', expect: '提示当前内容是一个tab', value: 'tab标签' },
  { type: 'tablist', expect: '提示当前内容是一个tablist', value: '选项卡的列表' },
  { type: 'timer', expect: '提示当前内容是一个timer', value: '定时器' },
  { type: 'togglebutton', expect: '提示当前内容是一个关闭开关', value: '切换按钮' },
  { type: 'toolbar', expect: '提示当前内容是一个toolbar', value: '工具栏' },
]
function SafeAreaViewAccessibilityRole() {
  return (
    <View>
      {accessibilityRoleList.map((item, index) => (
        <View key={index} style={{ paddingBottom: 10 }}>
          <Text>属性值：{item.type}</Text>
          <Text>预期结果：{item.expect}</Text>
          <Text>实际结果：</Text>
          <SafeAreaView
            style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
            accessible={true}
            accessibilityRole={item.type}>
            <Text style={{ padding: 10 }} >{item.value}</Text>
          </SafeAreaView>
        </View>
      ))}
    </View>
  )
}

function SafeAreaViewAccessibilityValue() {
  return (
    <View>
      <Text>属性值：accessibilityValue</Text>
      <Text>预期结果:提示当前进度为50%</Text>
      <Text>实际结果：</Text>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        accessibilityValue={{text:'当前进度为50%'}}>
        <View style={{height:30,width:135,backgroundColor:'green'}}></View>
      </SafeAreaView>
    </View>
  );
}
function SafeAreaViewAria_live() {
  const [message, setMessage] = useState('');
  const aria_lives = ['off', 'polite', 'assertive','rude'];
  const [aria_live, setAria_live] = useState('none');
  return (
    <View>
      <Text>属性值： aria-live</Text>
      <Text>预期结果：</Text>
      <Text>1.当属性值aria-live为off，点击按钮后不会读出文本内容，</Text>
      <Text>2.当属性值aria-live为polite，点击按钮后在用户闲时宣布，读出文本内容，</Text>
      <Text>3.当属性值aria-live为assertive，点击发送后尽快对用户宣布，提醒用户当前视图的变化读出文本内容</Text>
      <Text>4.当属性值aria-live为rude，点击按钮后即时提醒用户，必要的时候甚至中断用户，提醒用户当前视图的变化读出文本内容</Text>
      <Text>实际结果：</Text>
      <View>
        {aria_lives.map(value => (
          <Button
            title={value}
            active={value === aria_live}
            label={value}
            key={value}
            onPress={() => {
              setAria_live(value);
              setMessage('')
            }}
            style={{height:30,width:10}}
          />
        ))}
      </View>
      <SafeAreaView
        style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, }}
        accessible={true}
        aria-live={aria_live}
      >
        <Text>{message}</Text>
      </SafeAreaView>
      <Button title="按钮" onPress={() => { setMessage('内容更新啦！'); }} />
    </View>
  )
}

function SafeAreaViewAccessibilityState() {
  return (
    <View>
      <View>
        <Text>属性值：accessibilityState={"{{ 'disabled': true }}"}</Text>
        <Text>预期效果:点击文本内容后，提示“text one 不可点击”</Text>
        <Text>实际效果:</Text>
        <SafeAreaView
          style={{
            flex: 1,
            borderWidth: 5,
            borderColor: '#527FE4'
          }}
          accessible={true}
          accessibilityState={{ 'disabled': true }}
        >
          <Text>text one</Text>
        </SafeAreaView>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>属性值：accessibilityState={"{{ 'selected': true }}"}</Text>
        <Text>预期效果:点击文本内容后，提示“已选中 text one”</Text>
        <Text>实际效果:</Text>
        <SafeAreaView
          style={{
            flex: 1,
            borderWidth: 5,
            borderColor: '#527FE4'
          }}
          accessible={true}
          accessibilityState={{ 'selected': true }}
        >
          <Text>text one</Text>
        </SafeAreaView>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>属性值：accessibilityState={"{{ 'checked': true }}"}</Text>
        <Text>预期效果:点击文本内容后，提示“已选中 text one”</Text>
        <Text>实际效果:</Text>
        <SafeAreaView
          style={{
            flex: 1,
            borderWidth: 5,
            borderColor: '#527FE4'
          }}
          accessible={true}
          accessibilityState={{ 'checked': true }}
        >
          <Text>text one</Text>
        </SafeAreaView>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>属性值：accessibilityState={"{{ 'busy': true }}"}</Text>
        <Text>预期效果:点击文本内容后提示，busy</Text>
        <Text>实际效果:</Text>
        <SafeAreaView
          style={{
            flex: 1,
            borderWidth: 5,
            borderColor: '#527FE4'
          }}
          accessible={true}
          accessibilityState={{ 'busy': true }}
        >
          <Text>text one</Text>
        </SafeAreaView>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>属性值：accessibilityState={"{{ 'expanded': true }}"}</Text>
        <Text>预期效果:点击文本内容过后提示，“已展开 text one”</Text>
        <Text>实际效果:</Text>
        <SafeAreaView
          style={{
            flex: 1,
            borderWidth: 5,
            borderColor: '#527FE4'
          }}
          accessible={true}
          accessibilityState={{ 'expanded': true }}
        >
          <Text>text one</Text>
        </SafeAreaView>
      </View>
    </View>
  )
}

function SafeAreaViewImportantForAccessibility() {
  return (
    <View style={{ height: 300 }}>
      <Text>属性值：importantForAccessibility</Text>
      <Text>预期效果:点击文本内容，读出“First layout”</Text> 
      <Text>实际效果:</Text>
      <View>
        <SafeAreaView
          style={{
            position: 'absolute',
            left: 10,
            top: 50,
            right: 10,
            height: 100,
            backgroundColor: 'green'
          }}
          importantForAccessibility="yes">
          <Text> First layout </Text>
        </SafeAreaView>
        <SafeAreaView
          style={{
            position: 'absolute',
            left: 10,
            top: 50,
            right: 10,
            height: 100,
            backgroundColor: 'yellow'
          }}
          importantForAccessibility="no-hide-descendant">
          <Text> Second layout </Text>
        </SafeAreaView>
      </View>
    </View>
  )
}
function SafeAreaViewAria_aria_selected() {
  return (
    <View>
      <Text>属性值：aria-selected</Text>
      <Text>预期结果：点击text one,读出“已选中text one”，点击text two读出“text two”</Text>
      <Text>实际结果：</Text>
      <View style={{ flexDirection: 'row' }}>
        <SafeAreaView
          style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, flexDirection: 'row', width: 80, marginRight: 10 }}
          accessible={true}
          aria-selected={true}
        >
          <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'red', marginRight: 10 }}></View>
          <Text>text one</Text>
        </SafeAreaView>
        <SafeAreaView
          style={{ flex: 1, borderColor: '#527FE4', borderWidth: 5, flexDirection: 'row', width: 80, }}
          accessible={true}
          aria-selected={false}
        >
          <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'grey', marginRight: 10 }}></View>
          <Text>text two</Text>
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   TouchableWithoutFeedbackStyle:{
    backgroundColor:"#00ffff",
    width:100,
    alignItems:'center',
    borderWidth:1,
    borderColor:'black',
    borderStyle:'solid',
    height:35,
    justifyContent:'center',
    borderRadius:5,
    marginTop:-20,
    marginLeft:-8,
  },
  container: {
    height:200, 
    width:200,
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginBottom: 30,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  scrollView: {
    backgroundColor: '#eeeeee',
    height: 300,
  },
  text: {
    fontSize: 10,
    color: '#5577cc',
  },
  box: {
    height:200,
    backgroundColor: '#aaccff',
    borderWidth: 1,
    borderColor: '#7799cc',
    padding: 10,
    margin: 5,
  },
   boxPassedThrough: {
    borderColor: '#99bbee',
  },
  textPassedThrough: {
    color: '#88aadd',
  },
  container: {
    backgroundColor: 'pink',
    marginTop: 20,
    width: 300,
    height: 100,
    alignSelf: 'center',
  },
  row: {
    alignItems :'center',
    justifyContent: 'center',
  },
  styleBox:{
    height:200,
    width:200,
    borderWidth:2,
    backgroundColor:'rgb(220,109,135)'
  },
  modal: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    height: 100,
  },
  safeAreaContent: {
    flex: 1,
    backgroundColor: '#ffaaaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

exports.displayName = (undefined: ?string);
exports.framework = 'React';
exports.title = 'SafeAreaView';
exports.category = 'UI';
exports.documentationURL = 'https://reactnative.dev/docs/safeareaview';
exports.description =
  'SafeAreaView automatically applies paddings reflect the portion of the view that is not covered by other (special) ancestor views.';
exports.examples = [
  {
    title: '<SafeAreaView> Example',
    description:
      'SafeAreaView automatically applies paddings reflect the portion of the view that is not covered by other (special) ancestor views.',
    render: (): React.Node => <SafeAreaViewExample />,
  },
  {
    title: 'isIPhoneX_deprecated Example',
    description:
      ('`DeviceInfo.isIPhoneX_deprecated` returns true only on iPhone X. ' +
        'Note: This prop is deprecated and will be removed in a future ' +
        'release. Please use this only for a quick and temporary solution. ' +
        'Use <SafeAreaView> instead.': string),
    render: (): React.Node => <IsIPhoneXExample />,
  },
  {
    title: '1.borderWidth',
    render: (): React.Node => <BorderWidth />,
  },
  {
    title: '2.borderLeftWidth',
    render: (): React.Node => <BorderLeftWidth />,
  },
  {
    title: '3.borderRightWidth',
    render: (): React.Node => <BorderRightWidth />,
  },
  {
    title: '4.borderTopWidth',
    render: (): React.Node => <BorderTopWidth />,
  },
  {
    title: '5.borderBottomWidth',
    render: (): React.Node => <BorderBottomWidth />,
  },
  {
    title: '6.borderColor',
    render: (): React.Node => <BorderColor />,
  },
  {
    title: '7.borderLeftColor',
    render: (): React.Node => <BorderLeftColor />,
  },
  {
    title: '8.borderRightColor',
    render: (): React.Node => <BorderRightColor />,
  },
  {
    title: '9.borderTopColor',
    render: (): React.Node => <BorderTopColor />,
  },
  {
    title: '10.borderBottomColor',
    render: (): React.Node => <BorderBottomColor/>,
  },
  {
    title: '11.borderStartColor',
    render: (): React.Node => <BorderStartColor/>,
  },
  {
    title: '12.borderEndColor',
    render: (): React.Node => <BorderEndColor/>,
  },
  {
    title: '13.borderRadius',
    render: (): React.Node => <BorderRadius/>,
  },
  {
    title: '14.borderTopLeftRadius',
    render: (): React.Node => <BorderTopLeftRadius/>,
  },
  {
    title: '15.borderTopRightRadius',
    render: (): React.Node => <BorderTopRightRadius/>,
  },
  {
    title: '16.borderTopStartRadius',
    render: (): React.Node => <BorderTopStartRadius/>,
  },
  {
    title: '17.borderTopEndRadius',
    render: (): React.Node => <BorderTopEndRadius/>,
  },
  {
    title: '18.borderBottomLeftRadius',
    render: (): React.Node => <BorderBottomLeftRadius/>,
  },
  {
    title: '19.borderBottomRightRadius',
    render: (): React.Node => <BorderBottomRightRadius/>,
  },
  {
    title: '20.borderBottomStartRadius',
    render: (): React.Node => <BorderBottomStartRadius/>,
  },
  {
    title: '21.borderBottomEndRadius',
    render: (): React.Node => <BorderBottomEndRadius/>,
  },
  {
    title: '22.BackfaceVisibility_visible',
    render: (): React.Node => <BackfaceVisibility_visible/>,
  },
  {
    title: '22.BackfaceVisibility_hidden',
    render: (): React.Node => <BackfaceVisibility_hidden/>,
  },
  {
    title: '23.borderCurve',
    render: (): React.Node => <SafeAreaViewBorderCurve/>,
  },
  {
    title: '24.backgroundColor',
    render: (): React.Node => <SafeAreaViewBackgroundColor/>,
  },
  {
    title: '25.borderStyle_solid',
    render: (): React.Node => <SafeAreaViewBorderStyle_solid />,
  },
  {
    title: '25.borderStyle_dotted',
    render: (): React.Node => <SafeAreaViewBorderStyle_dotted />,
  },
  {
    title: '25.borderStyle_dashed',
    render: (): React.Node => <SafeAreaViewBorderStyle_dashed />,
  },
  {
    title: '26.opacity',
    render: (): React.Node => <SafeAreaViewOpacity />,
  },
  {
    title: '28.accessibilityActions & 76.onAccessibilityAction',
    render(): React.Node {
      return <SafeAreaViewAccessibilityActions />;
    },
  },
  {
    title: '27.elevation',
    render: (): React.Node => <SafeAreaViewElevation />,
  },
  {
    title: '30.accessibilityLanguage',
    render(): React.Node {
      return <SafeAreaViewAccessibilityLanguage />;
    },
  },
  {
    title: '31.accessibilityLabel',
    render(): React.Node {
      return <SafeAreaViewAccessibilityLabel />;
    },
  },
  {
    title: '32.accessibilityLiveRegion',
    render(): React.Node {
      return <SafeAreaViewAccessibilityLiveRegion />;
    },
  },
  {
    title: '33.accessibilityRole',
    render(): React.Node {
      return <SafeAreaViewAccessibilityRole />;
    },
  },
  {
    title: '34.accessibilityState',
    render(): React.Node {
      return <SafeAreaViewAccessibilityState />;
    },
  },
  {
    title: '35.accessibilityValue',
    render(): React.Node {
      return <SafeAreaViewAccessibilityValue />;
    },
  },
  {
    title: '38.accessibilityIgnoresInvertColors',
    render(): React.Node {
      return <SafeAreaViewAccessibilityIgnoresInvertColors />;
    },
  },
  {
    title: '39.accessible',
    render(): React.Node {
      return <SafeAreaViewAccessible />;
    },
  },
  {
    title: '40.importantForAccessibility',
    render(): React.Node {
      return <SafeAreaViewImportantForAccessibility />;
    },
  },
  {
    title: '41.hitSlop',
    render: (): React.Node => <SafeAreaViewHitSlop />,
  },
  {
    title: '42.nativeID',
    render: (): React.Node => <SafeAreaViewNativeID />,
  },
  {
    title: '43-1.pointerEvents-"none"',
    render(): React.Node {
      return <ExampleBox Component={SafeAreaViewNoneExample} />
    },
  },
  {
    title: '43-2.pointerEvents-"box-none"',
    render(): React.Node {
      return <ExampleBox Component={SafeAreaViewBoxNoneExample} />
    },
  },
  {
    title: '43-3.pointerEvents-"box-noly"',
    render(): React.Node {
      return <ExampleBox Component={SafeAreaViewBoxOnlyExample} />
    },
  },
  {
    title: '43-4.pointerEvents-"auto"',
    render(): React.Node {
      return <ExampleBox Component={SafeAreaViewAutoExample} />
    },
  },
  {
    title: '44.removeClippedSubviews',
    render: (): React.Node => <SafeAreaViewRemoveClippedSubviews />,
  },
  {
    title: '45.style',
    render: (): React.Node => <SafeAreaViewStyle />,
  },
  {
    title: '46.testId',
    render: (): React.Node => <SafeAreaViewTestId />,
  },
  {
    title: '47.collapsable',
    render: (): React.Node => <SafeAreaViewcollapsable />,
  },
  {
    title: '48.offscreenAlphaCompositing',
    render: (): React.Node => <SafeOffscreenAlphaCompositing />,
  },
  {
    title: '49.renderToHardwareTextureAndroid ',
    render: (): React.Node => <SafeRenderToHardwareTextureAndroid />,
  },
  {
    title: '50.shouldRasterizeIOS ',
    render: (): React.Node => <SafeShouldRasterizeIOS />,
  },
  {
    title: '51~55.nextFocus',
    render: (): React.Node => <SafeAreaViewnextFocus />,
  },
  {
    title: '56.focusable',
    render: (): React.Node => <SafeAreaViewfocusable />,
  },
  {
    title: '57.aria-busy',
    render(): React.Node {
      return <SafeAreaViewAria_busy />;
    },
  },
  {
    title: '58.aria-checked',
    render(): React.Node {
      return <SafeAreaViewAria_checked />;
    },
  },
  {
    title: '59.aria-disabled',
    render(): React.Node {
      return <SafeAreaViewAria_disabled />;
    },
  },
  {
    title: '60.aria-expanded',
    render(): React.Node {
      return <SafeAreaViewAria_expanded />;
    },
  },
  {
    title: '61.aria-hidden',
    render(): React.Node {
      return <SafeAreaViewAria_hidden />;
    },
  },
  {
    title: '62.aria-label',
    render(): React.Node {
      return <SafeAreaViewAria_label />;
    },
  },
  {
    title: '64.aria-live',
    render(): React.Node {
      return <SafeAreaViewAria_live />;
    },
  },
  {
    title: '66.aria-selected',
    render(): React.Node {
      return <SafeAreaViewAria_aria_selected />;
    },
  },
  {
    title: '70.aria-valuetext',
    render(): React.Node {
      return <SafeAreaViewAria_valuetext />;
    },
  },
  {
    title: '71.role',
    render(): React.Node {
      return <SafeAreaViewRole />;
    },
  },
  {
    title: '72.tabIndex',
    render: (): React.Node => <SafeAreaViewTabIndex />,
  },
  {
    title: '73.onLayout',
    render(): React.Node {
      return <SafeAreaViewOnlayout />;
    },
  },
  {
    title: '74.onMagicTap',
    render(): React.Node {
      return <SafeAreaViewOnMagicTap />;
    },
  },
  {
    title: '77.onAccessibilityTap',
    render(): React.Node {
      return <SafeAreaViewOnAccessibilityTap />;
    },
  },
  {
    title: '78.onStartShouldSetResponder',
    render(): React.Node {
      return <SafeAreaViewOnStartShouldSetResponder />;
    },
  },
  {
    title: '79. onStartShouldSetResponderCapture',
    render(): React.Node {
      return <SafeAreaViewOnStartShouldSetResponderCapture />;
    },
  },
  {
    title: '80. onMoveShouldSetResponder',
    render(): React.Node {
      return <SafeAreaViewOnMoveShouldSetResponder />;
    },
  },
  {
    title: '81.onMoveShouldSetResponderCapture',
    render(): React.Node {
      return <SafeAreaViewOnMoveShouldSetResponderCapture />;
    },
  },
  {
    title: '82.onResponderGrant',
    render(): React.Node {
      return <SafeAreaViewOnResponderGrant />;
    },
  },
  {
    title: '83.onResponderMove',
    render(): React.Node {
      return <SafeAreaViewOnResponderMove />;
    },
  },
  {
    title: '84.onResponderReject',
    render(): React.Node {
      return <SafeAreaViewOnResponderReject />;
    },
  },
  {
    title: '85.onResponderRelease',
    render(): React.Node {
      return <SafeAreaViewOnResponderRelease />;
    },
  },
  {
    title: '86.onResponderTerminate',
    render(): React.Node {
      return <SafeAreaViewOnResponderTerminate />;
    },
  },
  {
    title: '87.onResponderTerminationRequest',
    render(): React.Node {
      return <SafeAreaViewOnResponderTerminationRequest />;
    },
  },

];
