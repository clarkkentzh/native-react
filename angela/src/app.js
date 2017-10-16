import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight
} from 'react-native';
import {
  TabNavigator,StackNavigator
} from 'react-navigation';
import login from "./component/login";
import zhuce from "./component/zhuce";
import index from "./component/index";
import tiwen from "./component/tiwen";
import answer from "./component/answer";
import answer1 from "./component/answer1";
import user from "./component/user";

export default router = StackNavigator({
  index:{
    screen:index,
    navigationOptions:{
      header:null
    }
  },
  user:{
    screen:user,
    navigationOptions:{
      header:null
    }
  },
  login:{
    screen:login,
    navigationOptions:{
      title:"登录",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      }
    }
  },
  tiwen:{
    screen:tiwen,
    navigationOptions:{
      title:"提问",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      }
    }
  },
  zhuce:{
    screen:zhuce,
    navigationOptions:{
      title:"注册",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      },
      headerBackTitle:"返回"
    }
  },
  answer:{
    screen:answer,
    navigationOptions:{
      title:"回答问题",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      },
    }
  },
  answer1:{
    screen:answer1,
    navigationOptions:{
      header:null
    }
  },
})
