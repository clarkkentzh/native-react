
import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
var Dimensions = require('Dimensions');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';

export default class login extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      passwd:""
    }
  }
  handle(){
    var data = {};
    data.username = this.state.name;
    data.passwd = this.state.passwd;
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };
    fetch("http://192.168.1.154:3000/api/login",fetchOptions)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.result == "ok"){
        this.handles();
        this.handles1();
      }else {
        Alert.alert(responseJson.result)
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  handles(){
    this.refs.input1.clear();
    this.refs.input2.clear();
  }
  handles1(){
    const {navigate} = this.props.navigation;
    return navigate("index")
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <KeyboardAwareScrollView>
        <View  style={style.head}>
          <Image style={style.img} source={require('../img/angela.jpg')}/>
          <View style={style.container}>
            {/* <Text style={style.name}>账号:</Text> */}
            <Icon name="user" style={style.icon} type="simple-line-icon" color="blue"/>
            <TextInput style={style.input} ref="input1" selectTextOnFocus={true} underlineColorAndroid="transparent" placeholderTextColor="gray"
              onChangeText={(text) => {this.setState({name:text})}}
              placeholder="输入账号"
              onFocus={() => {this.value=""}}
            />
          </View>

          <View style={style.container}>
            {/* <Text style={style.name}>密码:</Text> */}
            <Icon name="key" style={style.icon} type="simple-line-icon" color="blue"/>
            <TextInput style={style.input} ref="input2" secureTextEntry={true} selectTextOnFocus={true} underlineColorAndroid="transparent"
              onChangeText={(text) => {this.setState({passwd:text})}}
              placeholder="输入密码" placeholderTextColor="gray"
            />
          </View>


          <TouchableOpacity onPress={this.handle.bind(this)}>
            <View style={style.textLoginViewStyle}>
              <Text style={style.textLoginStyle}>登录</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigate("zhuce")}>
            <View style={style.textLoginViewStyle}>
              <Text style={style.textLoginStyle}>注册账号</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}
const style = StyleSheet.create({
  icon:{
    marginLeft:3,
    marginTop:10
  },
  img:{
    // width:Dimensions.get('window').width,   //设置和手机屏幕宽度一样
    width:150,
    height:150,
    marginTop:10,
    resizeMode:'contain'
  },
  head:{
    flex:1,
    alignItems:"center"
  },
  name: {
    height: 20,
    width: 40,
    marginLeft: 20,
    fontSize: 15,
    marginTop: 15,
    color: '#51A7F9',
    marginRight: 10,
  },
  container:{
    marginTop:10,
    height:50,
    backgroundColor: '#ffffff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'orange',
    flexDirection: 'row',
  },
  input:{
    height:45,
    width:240,
  },
  textLoginViewStyle: {
    width: 240,
    height: 45,
    backgroundColor: 'purple',
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

/*
KeyboardAwareScrollView:用于软键盘遮挡输入框的问题,组件;
selectTextOnFocus:当为true时输入框获得光标内容被全部选中,布尔值;
underlineColorAndroid：输入框的默认下划线边框颜色，transparent为透明，
onChangeText：当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。
secureTextEntry：为true时，输入框输入文本为密码格式，布尔值。

css属性内：
width:Dimensions.get('window').width，　//设置宽度和屏幕宽度一样
*/
