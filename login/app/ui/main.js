import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import EditView from '../lib/EditView';
import LoginButton from '../lib/LoginButton';
import LoginSuccess from './LoginSuccess';
import NetUitl from '../lib/NetUtil';
import {  StackNavigator } from 'react-navigation';
export default class LoginActivity extends Component {
  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
  }

  render() {
      return (

    <View style={LoginStyles.loginview}>
     <View   style={{flexDirection: 'row',height:100,marginTop:1,
        justifyContent: 'center',
        alignItems: 'flex-start',}}>
       <Image source={require('../image/login.png')}/>
     </View>
     <View style={{marginTop:80}}>
       <EditView  name='输入用户名/注册手机号' onChangeText={(text) => {
            this.userName = text;
        }}/>
       <EditView name='输入密码' onChangeText={(text) => {
            this.password = text;
        }}/>
        <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
        <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
      </View>
     </View>
   )
  }


  onPressCallback = () => {
    let formData = new FormData();
    console.log(this.userName);
    console.log(this.password);
    formData.append("loginName",this.userName);
    formData.append("pwd",this.password);
    let url = "http://localhost:8081";
    NetUitl.postJson(url,formData,(responseJson) => {
          Alert.alert(responseJson);
          this.onLoginSuccess();
    })


  };

  //跳转到第二个页面去
    onLoginSuccess(){
      const { navigate } = this.props.navigation;
     return navigate("LoginSuccess")
    }

}

class loginLineView extends Component {
  render() {
    return (
        <Text >
            没有帐号
          </Text>
    );
  }
}

const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
      backgroundColor: '#ffffff',
  },
});
