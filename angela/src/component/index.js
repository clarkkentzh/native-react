import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import first from "./lib/first";

import three from "./lib/three";
import four from "./lib/four";

export default listnav = TabNavigator({
  first:{
    screen:first,
    navigationOptions:{
      tabBarLabel:"最新问题",
    }
  },

  three:{
    screen:three,
    navigationOptions:{
      tabBarLabel:"扫码支付",
    }
  },
  four:{
    screen:four,
    navigationOptions:{
      tabBarLabel:"用户信息",
    }
  }
},{
  animationEnabled: true, // 切换页面时是否有动画效果
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: true, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
    activeTintColor: '#ff8500', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片未选中颜色
    showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {
      height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: {
      backgroundColor: '#fff', // TabBar 背景色
      // height: 44
    },
    labelStyle: {
      fontSize: 20, // 文字大小
    },
  },
})
