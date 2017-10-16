/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {  StackNavigator } from 'react-navigation';
import Main from './ui/main';
import LoginSuccess from "./ui/LoginSuccess"

export default BasicApp = StackNavigator({
  Main: {screen: Main},
  LoginSuccess:{screen:LoginSuccess}
});
