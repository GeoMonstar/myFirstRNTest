'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Navigator,
  NavigatorIOS,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import HomePage     from './RouteHome';
import VideoPage    from './VideoPage';
import MyPage       from './MyPage';
import LivePage     from './Live';

import TabNavigator from 'react-native-tab-navigator';

const HOME_TAB  = 'homeTab';
const VIDEO_TAB = 'videoTab';
const LIVE_TAB  = 'liveTab';
const MY_TAB    =    'myTab';
const iosPlatform = Platform.OS;
var routeMapper = {
    LeftButton: (route, navigator, index, navState)=> {
        if (index != 0) {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=> {
                        navigator.pop()
                    }}
                >
                    <Image
                        source={require('../image/fanhui.png')}
                        style={styles.backImageStyle}
                    />
                </TouchableOpacity>
            );
        }
    },
    Title: (route, navigator, index, navState)=> {
        if (index == 0) {
            return (
                <Text style={styles.navgationBarTitleStyle}>{route.title}</Text>
            );
        } else {
            return (
                <Text style={styles.detailTitleStyle}>{route.title}</Text>
            );
        }
    },
    RightButton: (route, navigator, index, navState)=> {
    }
};
export default class MainPage extends Component {
    constructor(props){
        super (props);
        this.state = {
            selectedTab:HOME_TAB,
            notifCount:0,
            presses:0,
        };
    }
    setTab(tabId){
        this.setState({selectedTab:tabId})
    }
    _renderTabItem(title,iconName,selectediconName,selectedTab,componentName,component,NavigationTitle){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={iconName} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={selectediconName} style={styles.selectediconStyle}/>}
                onPress={() => this.setState({selectedTab: selectedTab})}
                selected={this.state.selectedTab == selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.tabTitleStyle}
            >
            <Navigator
                    initialRoute={{name: componentName, component: component, title: NavigationTitle}}
                    configureScene={this._cofigureScene}
                    renderScene={this._renderScene}
                    navigationBar={
                        <Navigator.NavigationBar
                            style={styles.navBarContainer}
                            routeMapper={routeMapper}
                        />
                    }
                />
            </TabNavigator.Item>
        );
    }
    _addNavigator(component,title){
        var data = null;
        if(title === '首页'){
            data = this.state.data;
        }
        return <NavigatorIOS 
                style={{flex:1}}
                barTintColor='#FFF'
                titleTextColor="#666"
                tintColor="#666"
                translucent={false}
                initialRoute={{
                    component:component,
                    title:title,
                    passProps:{
                        data:data
                    }
                }}/>;
    }
    _renderContent(pageName ,num) {
        var renderView;
        if(pageName == HOME_TAB){
            renderView = <HomePage />;
        } else if (pageName == VIDEO_TAB){
            renderView = <VideoPage />;
        } else if (pageName == LIVE_TAB){
            renderView = <LivePage />;
        } else if (pageName == MY_TAB){
            renderView = <MyPage />;
        }
        return(
            <View style={styles.pageView}>
                {renderView} 
            </View>
        );
    }
    _cofigureScene(route, routeStack) {

        if (route.sceneConfig) {
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    _renderScene(route, navigator) {
        return <route.component
            navigator={navigator}
            {...route.passProps}/>;
    }
    render() {
        return (
       
        <TabNavigator
          tabBarStyle={styles.tabBarStyle}
          barTintColor="#FFFFFF">
          <TabNavigator.Item
            title="首页"
            renderIcon={() => <Image source={require('../image/shouye1.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../image/shouye.png')} style={styles.selectediconStyle}/>}
            selected={this.state.selectedTab === HOME_TAB}
            onPress={() => this.setTab(HOME_TAB)}
            selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.tabTitleStyle}>
            {this._renderContent(HOME_TAB)}
          </TabNavigator.Item>
          <TabNavigator.Item
            title="视频"
            renderIcon={() => <Image source={require('../image/dianbo1.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../image/dianbo.png')} style={styles.selectediconStyle}/>}
            badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
            selected={this.state.selectedTab === VIDEO_TAB}
            onPress={() => this.setTab(VIDEO_TAB)}
            selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.tabTitleStyle}>
            {this._addNavigator(VideoPage, '视频')}
          </TabNavigator.Item>
          <TabNavigator.Item
            title="直播"
            renderIcon={() => <Image source={require('../image/zhibo1.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../image/zhibo.png')} style={styles.selectediconStyle}/>}
            selected={this.state.selectedTab === LIVE_TAB}
            onPress={() => this.setTab(LIVE_TAB)}
            selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.tabTitleStyle}>
            {this._addNavigator(LivePage, '直播')}
          </TabNavigator.Item>
          <TabNavigator.Item
            title="我"
            renderIcon={() => <Image source={require('../image/wode1.png')} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require('../image/wode.png')} style={styles.selectediconStyle}/>}
            selected={this.state.selectedTab === MY_TAB}
            onPress={() => this.setTab(MY_TAB)}
            selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.tabTitleStyle}>
            {this._renderContent(MY_TAB)}
          </TabNavigator.Item>
        </TabNavigator>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1,
    },
    pageView:{
        flex:1,
    },
    tabContent:{
        flex:1,
        alignItems:'center',
    },  
  
    iconStyle: {
        width: 25,
        height: 25,
    },
    selectediconStyle: {
        width: 25,
        height: 25,
    },
    selectedTitleStyle: {
        color: '#18a55f'
    },
    tabTitleStyle: {
        fontSize: 12,
        color: 'gray'
    },
    
    navBarContainer: {
        backgroundColor: '#18a55f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navgationBarTitleStyle: {
        color: 'white',
        fontSize: 20,
        marginTop: 12,
        marginLeft: iosPlatform == 'ios' ? 0 : width / 5,
    },
    backImageStyle: {
        width: 20,
        height: 30,
        marginTop: 10,
        marginLeft: 10
    },
    detailTitleStyle: {
        color: 'white',
        fontSize: 15,
        marginTop: 15
    },
});