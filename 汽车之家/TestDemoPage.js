import { jsonList } from "./TestDemoJson"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, {useEffect, useState } from "react";
// import {AHRNBackExitModule} from 'autohome-lib'

export default function TestDemoPage(){
    ///用于列表刷新数组
    const [data, setData] = useState([]);
    ///综合数据
    const [baseData, setBaseData] = useState([]);
    ///回复快数据
    const [replyData, setReplyData] = useState([]);
    const [selectSectionType, setSelectSectionType] = useState(0);

    const renderItem = ({ item, index }) => {
        return (
            <DemoListCell
                item={item}
                sectionType={selectSectionType}
            />
        )
    }

    useEffect(()=>{
        getData();
    },[])


    async function getData() {
        let jsonAry = jsonList;
        setBaseData(jsonAry);
        setData(jsonAry);
        setReplyData(jsonAry.slice().sort((a,b) => a.replyOrder - b.replyOrder));
    }

    function sectionViewDidClick(index) {
        setSelectSectionType(index);
        if (index == 0) {
            //综合
            setData(baseData);
        } else if (index == 1) {
            //回复快
            setData(replyData);
        } 
    }

    // function closeBtnClick() {
    //     console.log('页面返回');
    //     AHRNBackExitModule.invokeExit()
    // }

    return (
        <View style = {styles.bgView}>
        <View style = {styles.mainContainer}>
            <View style = {{flex:1, alignItems:'center'}}>
                <View style={{height:44,alignItems:'center',justifyContent:'center',backgroundColor:'white', width:'100%'}}>
                    <Text style={{fontSize: 18,fontFamily: '500',fontWeight: '500',color:'#111E36',}}>联系销售</Text>
                    {/* <TouchableOpacity style = {{position: 'absolute',right: 18.5}} onPress={()=>closeBtnClick()} activeOpacity={1}>
                        <Text>关闭</Text>
                    </TouchableOpacity> */}
                </View>
                <View style = {{flex:1, width: '100%'}}>
                    <DemoSectionView selectBlock={(index)=> sectionViewDidClick(index)}/>
                    {
                        (data.length  > 0) &&
                        <FlatList
                        data={data}
                        initialNumToRender = {15}
                        style={{backgroundColor: 'white'}}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${JSON.stringify(item)}`}
                        /> 
                    }
                </View>
            </View>
        </View>
    </View>
    )
}


const DemoSectionView = ({selectBlock})=> {
    const strAry = ['综合', '回复快'];
    const [selectIndex, setSelectIndex] = useState(0);
    return (
        <View style = {styles.sectionView}>
            {
                strAry.map((text, index) => {
                    return (
                        <TouchableOpacity
                        style={{marginRight:4, alignContent:'center', justifyContent:'center',width: index == 0 ? 50:66, height: 26 }}
                        onPress={()=>itemClick(index)}
                        key={text}
                        activeOpacity={1}>
                            <View style={{width: index == 0 ? 50:66, height: 26 , position: 'absolute', backgroundColor:getBackgroundColor(index)}}/>
                            <Text style = {{
                                fontWeight : selectIndex == index ? '500' : '400',
                                fontFamily: selectIndex==index ? 'AvenirMedium' :'normal',
                                fontSize: 14,
                                textAlign: 'center',
                                color: selectIndex==index ? '#464E64' : '#111E36'
                                }}>
                                    {text}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
    function itemClick(index) {
        if (selectIndex == index) {
            return;
        }
        setSelectIndex(index);
        selectBlock(index);
    }

    function getBackgroundColor(index) {
        return selectIndex == index ? '#F0FFF0' : '#F7F8FB';
    }
}

const DemoListCell = ({item, sectionType})=> {
    useEffect(()=>{
    },[]);

    return (
        <View style={[styles.listCell, {height:77}]}>
            <TouchableOpacity onPress={()=>{
                imClick();
                postEventWithEventName('IM_chat_saleslist_imheadbotton')
            }} activeOpacity={1}>
                <Image 
                    style={{ width: 44, height: 44,marginLeft: 20, borderRadius:22}} 
                    resizeMode='stretch'
                    source={{ uri: item.salesHeadImg }}
                />
            </TouchableOpacity>
            <View style={{flex:1, flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                <View style = {{marginLeft:12,flexShrink: 1}}>
                    {/* 名字和标签 */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style = {styles.saleName} numberOfLines={1} ellipsizeMode="tail">{item.salesName}</Text>
                        {
                            (item.imTag != undefined && item.imTag != null && item.imTag.length > 0) &&
                            <View style={{flexDirection:"row"}}>
                                {
                                    item.imTag.map((imTag, index)=> {
                                        return (
                                            <View style={[styles.tagView, {backgroundColor:imTag.color+'1A'}]} key={imTag.text}>
                                                <Text style={[styles.tagText, {color:imTag.color}]}>{imTag.text}</Text>
                                            </View>
                                        )
                                    })                          
                                }
                            </View>
                        }
                    </View>
                    <Text style={styles.descText}>{getDescText()}</Text>
                    {/* 经销商名称 */}
                    <View style={{flexDirection: 'row', marginTop:2.5, alignItems:'center'}}>
                        {
                            (item.isZxdp == 1) &&
                            <View style={{width:0.5, height:10, marginLeft:4, backgroundColor:'#E6E9F0'}}/>
                        }
                        {
                            <Text style={[styles.dealerText,{marginLeft:item.isZxdp ? 4:0}]} numberOfLines={1}>{item.dealerSimpleName}</Text>
                        }
                    </View>
                    <TouchableOpacity  style ={{position:'absolute', height:20,width:150}}
                        onPress={()=>{
                            imClick();
                        }}/>
                </View>
                <View style={styles.itemView}>
                    <TouchableOpacity
                        style={{width:24, height: 40, justifyContent:'center', alignItems:'center',marginRight:18.5}}
                        activeOpacity={1} >
                        <View style={{width: 21, height: 21, backgroundColor:'red'}}/>
                        <Text style = {styles.itemText}>{'咨询'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    function getDescText() {
        if (sectionType == 2) {
            return item.distanceDesc + '';
        } else if (sectionType == 1) {
            return item.replyTime;
        }
        return item.chatNumberText;
    }

    ///进入im页面
    async function imClick() {
        console.log('im入口点击');
    }
}

const styles = StyleSheet.create({
    bgView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    mainContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        bottom:0,
        width: '100%',
        overflow: 'hidden',
        height: '70%',
    },
    sectionView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        height : 40,
        marginTop: 4,
        backgroundColor:'white',
        alignItems : 'center',
    },
    descTitleView:{
        marginHorizontal: 20,
        height: 20,
        justifyContent: 'center',
    },
    descTitle: {
        fontSize: 12,
        fontFamily:'400',
        color: '#828CA0',
    },
    listCell: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'white'
    },
    saleName:{
        flexShrink: 1,
        fontSize: 16,
        fontFamily: 'AvenirMedium',
        fontWeight: '500',
        color:'#111E36',
    },
    tagView: {
        marginLeft:5,
        height: 17,
        paddingHorizontal: 4,
        borderTopLeftRadius:4,
        borderBottomRightRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    tagText: {
        fontSize: 11,
        fontWeight: '400',
        fontFamily: 'normal',
        textAlign: 'center'
    },
    descText: {
        marginTop:2.5,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'normal',
        color:'#111E36'
    },
    dealerText: {
        flexShrink: 1,
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'normal',
        color:'#828CA0'
    },
    itemView: {
        flexDirection: 'row-reverse',
        paddingRight:10,
        marginLeft:1.5,
    },
    itemText: {
        marginTop: 5,
        fontSize: 11,
        color: '#666D7F',
        fontWeight: '400',
        fontFamily: 'normal',
    },
    loadingView: {
        backgroundColor:'white',
        position:'absolute',
        top:44,
        right:0,
        left:0,
        bottom:0
    },
    location: {
        backgroundColor:'white',
        position:'absolute',
        top:88,
        right:0,
        left:0,
        bottom:0
    }
  });
