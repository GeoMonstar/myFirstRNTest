import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
} from 'react-native'
class VideoPage extends Component {
    render() {
        return (
           <View style={styles.container}>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#fff',
    },
    tabBarIcon: {
        width: 26, height: 26,
        resizeMode: 'contain',
    },
    tabBarSelectedIcon: {
        width: 26, height: 26,
        resizeMode: 'contain',
        tintColor:'#4caf50'
    }
})
export default VideoPage;