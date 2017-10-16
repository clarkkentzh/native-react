import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

var navigate;
class f1 extends Component{
  constructor(props){
    super(props);
    navigate = this.props.navigation.navigate;
    this.state = {
      data:"",
    }
  }
  componentWillMount(){
    fetch("http://mango.cnstu.top/apis/ques1")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data:responseJson.datas})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render(){
    if(this.state.data){
      const {navigate} = this.props.navigation;
      return(
        <View>
          {this.state.data.map((datas) => {
            return <Text key={datas._id} style={wen.maps} onPress={()=>navigate("answer1",{user:datas})}>
              <Text style={wen.wens}>问题：</Text>
              {datas.title}
          </Text>
          })}
        </View>
      )
    }else {
      return(
        <View></View>
      )
    }
  }
}
class f2 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={wen.f2}>
        <Text style={wen.f21}>你没登录</Text>
        <Text style={wen.f21}>滚去登录</Text>
        <TouchableOpacity onPress={() => navigate("login")}>
          <View style={wen.textLoginViewStyle}>
            <Text style={wen.textLoginStyle}>去登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
class f3 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={wen.f2}>
        <Text style={wen.f21}>你没登录</Text>
        <Text style={wen.f21}>滚去登录</Text>
        <TouchableOpacity onPress={() => navigate("login")}>
          <View style={wen.textLoginViewStyle}>
            <Text style={wen.textLoginStyle}>去登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const f1s = StackNavigator({
  head:{
    screen:f1,
    navigationOptions:{
      title:"Mango问答",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      },
      headerRight:<Button onPress={()=> navigate("login")} title="去登录"></Button>,
    }
  }
})
const wen = StyleSheet.create({
  textLoginViewStyle: {
    width: 100,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoginStyle: {
    fontSize: 18,
    color: '#fff',
  },
  f21:{
    fontSize:20,
    color:"red",
    marginTop:5
  },
  f2:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  maps:{
    marginTop:10
  },
  wens:{
    color:"red"
  }
})
export default listnav = TabNavigator({
  f1:{
    screen:f1s,
    navigationOptions:{
      tabBarLabel:"最新问题",
    }
  },

  f2:{
    screen:f2,
    navigationOptions:{
      tabBarLabel:"扫码支付",
    }
  },
  f3:{
    screen:f3,
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
