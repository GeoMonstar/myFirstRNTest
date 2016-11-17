'use strict'
import React, {Component} from 'react';
import  {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import HomePage from './MainPage';

export default class SplashPage extends Component {
    componentWillMount() {
        var { navigator } = this.props;
        setTimeout( () =>{
            navigator.replace({
                name:'HomePage',
                component:HomePage,
               
            });
        },1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../image/shan.png')} style={styles.backgroundImage}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
    },
    backgroundImage:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:null,
        height:null,
        backgroundColor:'transparent',
        resizeMode:'cover',
    },
});
