import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

var navigate;
export default class two extends Component{
  constructor(props){
    super(props);
    this.state = {
      answer:"",
      answer1:""
    }
  }
  handle(){
    var data = {};
    data.answer = this.state.answer;
    data.ids = this.refs.ids1.props.ids;
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };
    fetch("http://192.168.1.154:3000/api/answer",fetchOptions)
    .then((res) => res.json())
    .then((resjson) => {
      if(resjson == "ok"){
        Alert.alert("回答成功");
        this.handles();
      }else {
        Alert.alert('回答失败')
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  handles(){
    const {navigate} = this.props.navigation;
    return navigate("index");
  }
  handle1(){
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
      this.setState({answer1:resjson})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  handle2(){
    this.setState({
      answer1:""
    })
  }
  render(){
    navigate = this.props.navigation.navigate;
    const { params } = this.props.navigation.state;
    if(this.state.answer1){
      return(
        <View style={huida.container}>
          <Text style={huida.tit}>问题：</Text>
          <Text style={huida.text} ids={params.user._id} ref="ids1">{params.user.title}</Text>

          {this.state.answer1.map((data,index) => {
            return <Text key={data._id} style={huida.user}>答案{index + 1}：<Text style={huida.ans1}>{data.content}</Text></Text>
          })}

          <TouchableOpacity onPress={this.handle2.bind(this)}>
            <View style={huida.textLoginViewStyle1}>
              <Text style={huida.textLoginStyle}>隐藏答案</Text>
            </View>
          </TouchableOpacity>

          <View style={huida.row}>
            <Text style={huida.user}>回答:
            </Text>
            <TextInput multiline={true} style={huida.input1} onChangeText={(text)=>{this.setState({answer:text})}}>

            </TextInput>
          </View>
          <TouchableOpacity onPress={this.handle.bind(this)}>
            <View style={huida.textLoginViewStyle}>
              <Text style={huida.textLoginStyle}>提交答案</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }else {
      return(
        <View style={huida.container}>
          <Text style={huida.tit}>问题：</Text>
          <Text style={huida.text} ids={params.user._id} ref="ids1">{params.user.title}</Text>

          <TouchableOpacity onPress={this.handle1.bind(this)}>
            <View style={huida.textLoginViewStyle1}>
              <Text style={huida.textLoginStyle}>显示答案</Text>
            </View>
          </TouchableOpacity>

          <View style={huida.row}>
            <Text style={huida.user}>回答:
            </Text>
            <TextInput multiline={true} style={huida.input1} onChangeText={(text)=>{this.setState({answer:text})}}>

            </TextInput>
          </View>
          <TouchableOpacity onPress={this.handle.bind(this)}>
            <View style={huida.textLoginViewStyle}>
              <Text style={huida.textLoginStyle}>提交答案</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
const huida = StyleSheet.create({
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
    color:"green"
  },
  input1:{
    width:200,
    height:50,
  },
  textLoginViewStyle: {
    width: 240,
    height: 45,
    // backgroundColor: 'blue',
    // borderRadius: 5,
    marginTop: 10,
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoginViewStyle: {
    width: 240,
    height: 45,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 10,
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoginStyle: {
    fontSize: 18,
    color: 'red',
  },
  ans1:{
    fontSize:18,
    color:"black"
  },
})
