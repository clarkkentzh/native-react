import React,{ Component } from "react";
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight,TouchableOpacity
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';

var navigate;
class head extends Component{
  constructor(props){
    super(props);
    navigate = this.props.navigation.navigate;
    this.state = {
      data:"",
    }
  }
  componentWillMount(){
    fetch("http://192.168.1.154:3000/api/ques")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data:responseJson.datas,name:responseJson.name})
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
            return <Text key={datas._id} style={wen.maps} onPress={()=>navigate("answer",{user:datas})}>
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
export default onetag = StackNavigator({
  head:{
    screen:head,
    navigationOptions:{
      title:"Mango问答",
      headerStyle:{
        backgroundColor:"orange"
      },
      headerTitleStyle:{
        alignSelf:"center",
        color:"#fff"
      },
      headerRight:<Button onPress={()=> navigate("tiwen")} title="提问"></Button>,
    }
  }
})
const wen = StyleSheet.create({
  maps:{
    marginTop:10
  },
  wens:{
    color:"red"
  }
})
