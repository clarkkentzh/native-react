import React, { Component } from 'react';
import { Button,AppRegistry,StyleSheet,View,Text,Image,Alert,FlatList,SectionList,TouchableNativeFeedback,TextInput } from 'react-native';
import {
  TabNavigator,StackNavigator
} from 'react-navigation';

class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'clark',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Button
        title="Go to Setup Tab"
        onPress={() => navigate('Setup')}
      />
        <Text style={styles.welcome}>
          我愿化作石桥！
        </Text>
        <Text style={styles.instructions}>
          忍受五百年风吹，五百年雨打！
        </Text>
        <Text style={styles.haha}>
          只为等你在桥上走过！
        </Text>
        <Image source={require('./img/angela.jpg')} style={styles.img} />
        <Button
          title="去聊天的页面"
          onPress={() => navigate('chats',{user:"Angela"})}
        />
      </View>
    );
  }
}
class Son extends Component {
  constructor(props){
    super(props);
    this.state = {
      text1:true
    };
    setInterval(() => {
      this.setState({
        text1:!this.state.text1
      })
    },100)
  }
  render(){
    var texts = this.state.text1 ? this.props.text : "";
    return(
      <Text  style={styles.son}>
        {texts}
      </Text>
    )
  }
}
const handle = () => {
  Alert.alert('按钮被点击!');
}
class SetupScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'angela',
  };
  render() {
    console.log("99999999",this.props.navigation.goBack);
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          title="Go back to home tab"
          onPress={() => goBack()}
        />
        <Button
          onPress={handle}
          title="点击试试"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Son text="大家来玩捉迷藏把！！"/>
      </View>
    );
  }
}
class third extends Component{
  render(){
    return(
      <Text>哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈</Text>
    )
  }
}
const styles = StyleSheet.create({
  son: {
    color:"blue",
    fontSize: 30,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'purple',
    marginBottom: 5,
  },
  haha: {
    textAlign:'center',
    color: 'red',
  },
  img : {
    width: 150,
    height: 150,
  }
});
const BasicApp = TabNavigator({
  Main: {screen: MainScreen},
  Setup: {screen: SetupScreen},
  three:{screen:third}
},{
  // animationEnabled: true,
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: true, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
  tabBarOptions: {
          activeTintColor: '#ff8500', // 文字和图片选中颜色
          inactiveTintColor: '#999', // 文字和图片未选中颜色
          showIcon: false, // android 默认不显示 icon, 需要设置为 true 才会显示
          indicatorStyle: {
              height: 2  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
          },
          style: {
              backgroundColor: 'purple', // TabBar 背景色
              // height: 44
          },
          labelStyle: {
              fontSize: 20, // 文字大小
          },
      },
});


/*以下为示例的一种导航栏*/
var navigate;
class first extends Component{
  static navigationOptions = {
    title:"赵",
    headerRight:<Button onPress={()=>navigate('chats',{user:"张韶涵"})} title="提问"/>,
    headerStyle:{
      backgroundColor:"orange"
    },
    headerTitleStyle:{
      color:"red",
    },
  }
  render(){
    console.log("7777777",this.props.navigation);
    navigate = this.props.navigation.navigate;
    return(
      <View>
        <Text>主要的页面</Text>
        <Button onPress={() => navigate("chats",{user:"Angela"})} title="去宏页面!"></Button>
      </View>
    )
  }
}
class two extends Component{
  static navigationOptions =({navigation}) => ({
    title:`赵宏和${navigation.state.params.user}聊天`,
  })
  render(){
    console.log("88888888",this.props.navigation);
    const { params } = this.props.navigation.state;
    return (
      <View style={{  flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'}}>
        <Text style={{color:"green"}}>这是第二章页面,和{params.user}聊天</Text>
        <Image source={require('./img/timdg.jpeg')} style={styles.img} />
      </View>
    )
  }
}
BasicApp.navigationOptions = {
  title:"Angela",
}

const zhao = StackNavigator({
  home:{
    screen:first,
  },

  chats:{screen:two}
},{
  initialRouteName:"home", //设置默认的页面组件，必须是上面已注册的页面组件，home或chats
  mode:"card",   //
  headerMode:"float",//screen: 无透明效果,滑动过程中，整个页面都会返回, 默认;float: 有渐变透明效果, 如微信QQ的一样; none: 隐藏导航栏

})
/*上面这里的home和chats就是路由,是navigate里的参数*/


AppRegistry.registerComponent('nav', () => zhao);
