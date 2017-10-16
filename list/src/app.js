import React, { Component } from 'react';
import { Button,AppRegistry,StyleSheet,View,Text,Image,Alert,FlatList,SectionList,TouchableNativeFeedback } from 'react-native';
import {
  TabNavigator,StackNavigator
} from 'react-navigation';

/*列表*/
class lists extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
       <FlatList
         data={[
           {key: 'Devin'},
           {key: 'Jackson'},
           {key: 'James'},
           {key: 'Joel'},
           {key: 'John'},
           {key: 'Jillian'},
           {key: 'Jimmy'},
           {key: 'Julie'},
         ]}
         renderItem={({item}) => <Text style={styles1.item}>{item.key}</Text>}
       />
     </View>
    )
  }
}
class lists1 extends Component{
  render(){
    return (
      <View style={styles1.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles1.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles1.sectionHeader}>{section.title}</Text>}
        />
      </View>
    )
  }
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection:"row",
    justifyContent:"space-around",
    // alignItems:"stretch",
    // backgroundColor: '#F5FCFF',
  },
  item: {
    width:200,
    color:"purple",
    padding: 10,
    fontSize: 10,
    height: 80,
    borderWidth:1,
    borderColor:"blue",
  },
  sectionHeader: {
   paddingTop: 2,
   paddingLeft: 10,
   paddingRight: 10,
   paddingBottom: 2,
   fontSize: 14,
   fontWeight: 'bold',
   backgroundColor: 'yellow',
 },
 img:{
   width:80,
   height:80
 }
});


/*movie信息*/
const styles2 = StyleSheet.create({
  container: {
    flex:1,
    width:200,
    marginTop: 10,
    marginLeft:10,
    flexDirection:"row",
    // justifyContent:"flex-start",
    // justifyContent:"space-around",
    // alignItems:"stretch",
    // backgroundColor: '#F5FCFF',
  },
  item: {
    width:80,
    height: 80,
    borderWidth:1,
    borderColor:"#393939",
  },
 img:{
   width:80,
   height:80,
 },
 font:{
   fontSize:15,
 },
 erlei:{
   width:300,
   height:400,
   justifyContent:"center",
   alignItems:"center"
 },
 erlei1:{
   flex:1,
   marginTop:10,
   alignItems:"center",
   flexDirection:"column"
 }
});
class Movie extends Component{
  static navigationOptions = {
    tabBarLabel:"即将上映"
  };
  constructor(props){
    super(props);
    this.state={
      data:"",
    }
  }
  componentWillMount(){
    this.getdata();
  }
  getdata(){
    return fetch("https://api.douban.com/v2/movie/coming_soon")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("sssss",responseJson);
      this.setState({
        data:responseJson.subjects
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  handle(){
    alert('正在刷新中.... ');
  }
  render(){
    const navigate = this.props.navigation.navigate;
    return(
      <View>
        <Button
          title="点击猜猜这是谁"
          // onPress={() => {this._flatList.scrollToIndex({viewPosition:0,index:8})}}
          onPress={() => navigate("erlei")}
        />
        <View>
          <FlatList
            onRefresh={this.handle}
            refreshing={false}
            ref={(flatList) => this._flatList = flatList}
            numColumns="2"
            data={this.state.data}
            renderItem={({item}) =>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("purple", false)}
              >
                <View style={styles2.container}>
                  <Image style={styles2.img} source={{uri:item.images.large}}/>
                  <View style={styles2.item}>
                    <Text style={styles2.font}>电影名：{item.title}</Text>
                    <Text style={styles2.font}>上映日期：{item.year}</Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            }
          />
        </View>
      </View>
    )
  }
}
class yi extends Component{
  static navigationOptions = {
    tabBarLabel:"即将上映"
  };
  render(){
    const navigate = this.props.navigation.navigate;
    return (
      <Movie />
    )
  }
}
class Movie1 extends Component{
  static navigationOptions = {
    tabBarLabel:"正在上映"
  };
  constructor(props){
    super(props);
    this.state={
      data:"",
    }
  }
  componentWillMount(){
    this.getdata();
  }
  getdata(){
    return fetch("https://api.douban.com/v2/movie/in_theaters")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("sssss",responseJson);
      this.setState({
        data:responseJson.subjects
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render(){
    return(
      <View>
          <FlatList
            numColumns="2"
            data={this.state.data}
            renderItem={({item}) =>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("purple", false)}
              >
                <View style={styles2.container}>
                  <Image style={styles2.img} source={{uri:item.images.large}}/>
                  <View style={styles2.item}>
                    <Text style={styles2.font}>电影名：{item.title}</Text>
                    <Text style={styles2.font}>上映日期：{item.year}</Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            }
          />
      </View>
    )
  }
}
class Movie2 extends Component{
  static navigationOptions = {
    tabBarLabel:"Top250"
  };
  constructor(props){
    super(props);
    this.state={
      data:"",
    }
  }
  componentWillMount(){
    this.getdata();
  }
  getdata(){
    return fetch("https://api.douban.com/v2/movie/top250")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("sssss",responseJson);
      this.setState({
        data:responseJson.subjects
      })
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render(){
    return(
      <View>
          <FlatList
            numColumns="2"
            data={this.state.data}
            renderItem={({item}) =>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple("purple", false)}
              >
                <View style={styles2.container}>
                  <Image style={styles2.img} source={{uri:item.images.large}}/>
                  <View style={styles2.item}>
                    <Text style={styles2.font}>电影名：{item.title}</Text>
                    <Text style={styles2.font}>上映日期：{item.year}</Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            }
          />
      </View>
    )
  }
}
class erlei extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles2.erlei1}>

        <Image style={styles2.erlei} source={require("./img/meini.jpg")}/>
      </View>
    )
  }
}
const dianying = TabNavigator({
  main:{screen:Movie},
  main1:{screen:Movie1},
  main2:{screen:Movie2}
})
export default dianying1 = StackNavigator({
  mains:{screen:dianying,
    navigationOptions:{
      header:null
    }
  },
  erlei:{screen:erlei,
    navigationOptions:{
      title:"美女",
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

/*生命周期*/
class demoReact extends Component {
    //构造器
    constructor(props) {
        //加载父类方法,不可省略
        super(props);
        //设置初始的状态
        this.state = {
          bg:'white',
          bg2:'white',
          top:0,
          left:0,
        };
    }

    //componentDidMount是React组件的一个生命周期方法，他会在组件刚加载完成的时候调用一次，以后不会再调用
    componentDidMount() {}

    componentWillMount(){
      this._gestureHandlers = {
        onStartShouldSetResponder: () => true,  //对触摸进行响应
        onMoveShouldSetResponder: ()=> true,  //对滑动进行响应
        onResponderGrant: ()=>{
          console.log("父组件触发触摸事件了");
          this.setState({bg: 'red'});
        }, //激活时做的动作
        onResponderMove: ()=>{
          console.log("父屏幕上移动手指时");
        },  //移动时作出的动作
        onResponderRelease: ()=>{
          console.log("父触摸操作结束，手指离开");
          this.setState({bg: 'white'})
        }, //动作释放后做的动作
      }

      this._gestureHandlers2 = {
        onStartShouldSetResponder: () => true,
        onMoveShouldSetResponder: ()=> true,
        onResponderTerminationRequest:() => true,
        onResponderGrant: ()=>{
          console.log("子组件被触摸");
          this.setState({bg2: 'green'});
        },
        onResponderMove: ()=>{
          console.log("子组件移动触摸");
        },
        onResponderRelease: ()=>{
          console.log("子组件触摸离开");
          this.setState({bg2: 'white'});
        }
      }
}
    render() {
      return (
        <View style={styles3.container}>
          <View
            {...this._gestureHandlers}
            style={[styles3.rect,{
              "backgroundColor": this.state.bg
            }]}>
            <View
              {...this._gestureHandlers2}
              style={[styles3.rect2,{
                "backgroundColor": this.state.bg2
              }]}
              >
              </View>
            </View>

          </View>
      )
    }
}

var styles3 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rect: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rect2: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black'
  },
  rect3:{
    width:100,
    height:100,
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'#223344',
    alignSelf:'flex-end',
  }
});
