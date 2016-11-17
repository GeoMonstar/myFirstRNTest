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
            <Image style={styles.topImage} source={require('../../image/tupian.png')}/>
            <Text style={styles.firstText}>测试标题测试标题</Text>
            <Text style={styles.secondText}>测试详情测试详情</Text>
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
  },
  secondText:{
      color:'#999',
      fontSize: 12,
  },
});
module.exports = HomeVideoCell;
