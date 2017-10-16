
import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';

export default class zhuce extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      passwd:'',
      repasswd:'',
      phone:""
    }
  }
  handle(){
    var data = {};
    data.username = this.state.name;
    data.passwd = this.state.passwd;
    data.repasswd = this.state.repasswd;
    data.phone = this.state.phone;
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    };
    fetch("http://192.168.1.154:3000/api/zhuce",fetchOptions)
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson == "ok"){
        console.log("responseJson",responseJson);
        this.handle1();
        this.handles();
      }else {
        Alert.alert(responseJson);
        this.handles();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  handles(){
    this.refs.input1.clear();
    this.refs.input2.clear();
    this.refs.input3.clear();
    this.refs.input4.clear();
  }
  handle1(){
    const navigate = this.props.navigation.navigate;
    return navigate("login")
  }
  render(){
    return(
      <KeyboardAwareScrollView>
        <View style={style1.head}>
          {/* <Image style={style1.img} source={require('../img/angela.jpg')}/> */}
          <View style={style1.container}>
            {/* <Text style={style.name}>账号:</Text> */}
            <Icon name="user" style={style1.icon} type="simple-line-icon" color="blue"/>
            <TextInput style={style1.input} underlineColorAndroid="transparent"
              onChangeText={(text) => {this.setState({name:text})}}
              placeholder="输入账号" ref="input1" placeholderTextColor="gray"
            />

          </View>
          <View style={style1.container}>
            {/* <Text style={style.name}>手机号:</Text> */}
            <Icon name="phone" style={style1.icon} type="simple-line-icon" color="blue"/>
            <TextInput style={style1.input} underlineColorAndroid="transparent"
              onChangeText={(text) => {this.setState({phone:text})}}
              placeholder="输入手机号" ref="input2" placeholderTextColor="gray" maxLength={11}
            />

          </View>
          <View style={style1.container}>
            {/* <Text style={style.name}>密码:</Text> */}
            <Icon name="key" style={style1.icon} type="simple-line-icon" color="blue"/>
            <TextInput style={style1.input} secureTextEntry={true} ref="input3" underlineColorAndroid="transparent"
              onChangeText={(text) => {this.setState({passwd:text})}}
              placeholder="输入密码" placeholderTextColor="gray"
            />

          </View>
          <View style={style1.container}>
            {/* <Text style={style.name}>密码:</Text> */}
            <Icon name="key" style={style1.icon} type="simple-line-icon" color="blue"/>
            <TextInput style={style1.input} secureTextEntry={true} underlineColorAndroid="transparent"
              onChangeText={(text) => {this.setState({repasswd:text})}}
              placeholder="再次输入密码" ref="input4" placeholderTextColor="gray"
            />
          </View>
          <TouchableOpacity onPress={this.handle.bind(this)}>
            <View style={style1.textLoginViewStyle}>
              <Text style={style1.textLoginStyle}>注册</Text>
            </View>
          </TouchableOpacity>

        </View>
      </KeyboardAwareScrollView>
    )
  }
}
const style1 = StyleSheet.create({
  icon:{
    marginLeft:3,
    marginTop:10
  },
  img:{
    width:150,
    height:150,
    marginTop:20
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
    marginTop:20,
    height:50,
    backgroundColor: '#ffffff',
    borderRadius:5,
    borderWidth:2,
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
