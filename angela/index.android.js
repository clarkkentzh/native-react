/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,TextInput,Image,Button,Alert,TouchableHighlight
} from 'react-native';
import {
  TabNavigator,StackNavigator
} from 'react-navigation';

import router from "./src/app";

AppRegistry.registerComponent('angela', () => router);
