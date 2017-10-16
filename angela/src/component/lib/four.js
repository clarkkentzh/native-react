import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

var navigate;
class four extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      phone:""
    };
    navigate = this.props.navigation.navigate;
  }
  componentWillMount(){
    fetch("http://192.168.1.154:3000/api/zaixian")
    .then((res) => res.json())
    .then((resjson) => {
      this.setState({name:resjson.name,phone:resjson.phone});
    })
  }
  render(){
    if(this.state.name){

      return(
        <View style={user.container}>
          <View style={user.name}>

            <Text style={user.names}>用户名：{this.state.name}</Text>
          </View>
          <View style={user.name}>

            <Text style={user.names}>手机号：{this.state.phone}</Text>
          </View>
          <Image style={user.img} source={require('../../img/timg.jpg')}/>

        </View>
      )
    }else {
      return(
        <View></View>
      )
    }
  }
}
const user = StyleSheet.create({
  img:{
    // width:Dimensions.get('window').width,   //设置和手机屏幕宽度一样
    width:150,
    height:150,
    marginTop:10,
    resizeMode:'contain'
  },
  names:{
    color:"green",
    fontSize:20,
  },
  name:{
    marginLeft:10,
    marginTop:20,
    flexDirection:"row"
  },
  container:{
    flex:1,
  },
})
export default onetag = StackNavigator({
  head:{
    screen:four,
    navigationOptions:{
      title:"个人信息",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      },
      headerRight:<Button onPress={()=> navigate("login")} title="退出登录"></Button>
    }
  }
})
