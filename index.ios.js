/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
	StyleSheet,
	Navigator,
	Text,
	View
} from 'react-native';
import SplashPage from './app/Splash';

class RNGospellLive extends Component{
	render(){
    var defaultName = 'Splash';
    var defaultComponent = SplashPage;
    return(
      <Navigator
        initialRoute={{name:defaultName,component:defaultComponent}}
        configureScene={(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
        }}
      /*configureScene  可选的函数，用来配置场景动画和手势。会带有两个参数调用，一个是当前的路由，一个是当前的路由栈。然后它应当返回一个场景配置对象
      //renderScene 
      必要参数。用来渲染指定路由的场景。调用的参数是路由和导航器。
      */
      renderScene={(route,navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} /> 
      }}
      />
    );
	}
}
AppRegistry.registerComponent('RNGospellLive', () => RNGospellLive);


