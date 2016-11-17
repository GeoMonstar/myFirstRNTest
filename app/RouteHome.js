'use strict'
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
	Navigator,
	Text,
	View,
} from 'react-native'
import Home from './HomePage';
export default class RouteHome extends Component {
    render(){
        var defaultName = '首页';
        var defaultComponent = Home;
        return(
            <Navigator 
             initialRoute={{name:defaultName,component:defaultComponent}}
             configureScene={(route) => {
                 return Navigator.SceneConfigs.HorizontalSwipeJump;
             }}
             renderScene={(route,navigator) => {
                 let Component = route.component;
                 return <Component {...route.params} navigator={navigator} />
             }}
             />
        )
    }
}