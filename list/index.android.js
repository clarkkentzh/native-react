import React, { Component } from 'react';
import { Button,AppRegistry,StyleSheet,View,Text,Image,Alert,FlatList,SectionList,TouchableNativeFeedback } from 'react-native';
import {
  TabNavigator,StackNavigator
} from 'react-navigation';
import dianying1 from "./src/app"

AppRegistry.registerComponent('list', () => dianying1);
