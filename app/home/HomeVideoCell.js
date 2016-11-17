'use strict';
import React, {Component} from 'react';
import {
  Navigator,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

//获取屏幕宽度
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

class HomeVideoCell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { rowData } = this.props;
    return (
      <TouchableHighlight style={styles.bgView}
        onPress={this.props.onSelect}
        underlayColor='#F5FCFF'>
        <View style={styles.cellView}>
            <Image style={styles.topImage} source={{uri:rowData.imgsrc}}/>
            <Text style={styles.firstText}>{rowData.title}</Text>
            
        </View>
      </TouchableHighlight>
		);
	}
}
var styles = StyleSheet.create({
  bgView:{
      justifyContent:'center',
      width:screenWidth/2-2,
      height:130,
  },
  cellView:{
      justifyContent:'center',
      width:screenWidth/2-2,
      height:50,
      alignItems:'center',
  },
  topImage:{
      height:90,
      width:screenWidth/2-2,
  },
  firstText:{
      color:'black',
      fontSize: 12, 
      height:40,
  },
  secondText:{
      color:'#999',
      fontSize: 12,
  },
});
module.exports = HomeVideoCell;
