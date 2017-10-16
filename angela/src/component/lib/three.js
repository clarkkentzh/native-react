import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
class three extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={pays.container}>
        <Text style={pays.text}>扫码支付</Text>
        <Image style={pays.img} source={require('../../img/pay.png')}/>
      </View>
    )
  }
}
const pays = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  text:{
    marginTop:50,
    color:"blue",
    fontSize:20,
  },
  img:{
    width:150,
    height:150,
    marginTop:20,
  }
})
export default onetag = StackNavigator({
  head:{
    screen:three,
    navigationOptions:{
      title:"扫码支付",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      },
    }
  }
})
