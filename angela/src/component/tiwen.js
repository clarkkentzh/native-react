import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
var Dimensions = require('Dimensions');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class tiwen extends Component{
  constructor(props){
    super(props);
    this.state = {
      question:"",
      miaoshu:""
    }
  }
  handle(){
    if(this.state.question){
      var data = {};
      data.question = this.state.question;
      data.miaoshu = this.state.miaoshu;
      var options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      };
      fetch("http://192.168.1.154:3000/api/tiwen",options)
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson == "ok"){
          this.hand();
        }else {
          Alert.alert(responseJson);
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }else {
      Alert.alert("问题不能为空!")
    }
  }
  hand(){
    const { navigate } = this.props.navigation;
    return navigate("index")
  }
  render(){
    return(
      <View style={tiwens.container}>
        <View style={tiwens.row}>
          <Text style={tiwens.user}>提问:
          </Text>
          <TextInput multiline={true} style={tiwens.input1} onChangeText={(text)=> {this.setState({question:text})}}>

          </TextInput>
        </View>
        <View style={tiwens.row}>

          <Text style={tiwens.user}>描述:
          </Text>
          <TextInput multiline={true} style={tiwens.input1} onChangeText={(text)=>{this.setState({miaoshu:text})}}>

          </TextInput>
        </View>
        <View style={tiwens.row}>
          <TouchableOpacity onPress={this.handle.bind(this)}>
            <View style={tiwens.textLoginViewStyle}>
              <Text style={tiwens.textLoginStyle}>提交问题</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const tiwens = StyleSheet.create({
  row:{
    flexDirection:"row",
    marginTop:50
  },
  container:{
    flex:1,
    alignItems:"center"
  },
  user:{
    color:"purple",
    fontSize:25,
    marginTop:10
  },
  input1:{
    width:200,
    height:50,
  },
  textLoginViewStyle: {
    width: 240,
    height: 45,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoginStyle: {
    fontSize: 18,
    color: '#fff',
  },
})
