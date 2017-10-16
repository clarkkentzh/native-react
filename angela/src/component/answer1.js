import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

var navigate;
class two extends Component{
  constructor(props){
    super(props);
    this.state = {
      answer:"",
    }
  }
  handle(){
    var data = {};
    data.ids = this.refs.ids1.props.ids;
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };
    fetch("http://192.168.1.154:3000/api/answer1",fetchOptions)
    .then((res) => res.json())
    .then((resjson) => {
      this.setState({answer:resjson})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  handle1(){
    this.setState({
      answer:""
    })
  }
  render(){
    navigate = this.props.navigation.navigate;
    const { params } = this.props.navigation.state;
    if(this.state.answer){
      return(
        <View style={huida.container}>
          <Text style={huida.tit}>问题：</Text>
          <Text style={huida.text} ids={params.user._id} ref="ids1">{params.user.title}</Text>
          {this.state.answer.map((data,index) => {
            return <Text key={data._id} style={huida.user}>答案{index + 1}：<Text style={huida.ans1}>{data.content}</Text></Text>
          })}

          <TouchableOpacity onPress={this.handle1.bind(this)}>
            <View style={huida.textLoginViewStyle}>
              <Text style={huida.textLoginStyle}>隐藏答案</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }else {
      return(
        <View style={huida.container}>
          <Text style={huida.tit}>问题：</Text>
          <Text style={huida.text} ids={params.user._id} ref="ids1">{params.user.title}</Text>

          <TouchableOpacity onPress={this.handle.bind(this)}>
            <View style={huida.textLoginViewStyle}>
              <Text style={huida.textLoginStyle}>显示答案</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
export default onetag = StackNavigator({
  head:{
    screen:two,
    navigationOptions:{
      title:"回答页面",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      },
      headerRight:<Button onPress={()=> navigate("login")} title="去登录"></Button>,
      headerLeft:<Button onPress={()=> navigate("user")} title="返回"></Button>,
    }
  }
})
const huida = StyleSheet.create({
  ans1:{
    fontSize:18,
    color:"black"
  },
  row:{
    flexDirection:"row",
    marginTop:50
  },
  user:{
    color:"green",
    fontSize:18,
    marginTop:10
  },
  container:{
    flex:1,
    marginLeft:10,
    marginTop:20
  },
  tit:{
    fontSize:20,
    color:"red",
  },
  text:{
    color:"green",
    fontSize:15
  },
  input1:{
    width:200,
    height:50,
  },
  textLoginViewStyle: {
    width: 100,
    height: 45,
    // backgroundColor: 'blue',
    // borderRadius: 5,
    marginTop: 10,

    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoginStyle: {
    fontSize: 18,
    color: 'red',
  },
})
