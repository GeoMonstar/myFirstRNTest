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

class HomeCell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rowData } = this.props;
    
    return (
      <TouchableHighlight
        onPress={this.props.onSelect}
        underlayColor='#F5FCFF'>
        <View style={{backgroundColor:'#FFF'}}>
          <View style={{padding:10, flexDirection:'row'}}>
            <Image style={styles.thumb} source={{uri: rowData.logo}}/>
            <View style={{flex:2, paddingLeft: 10}}>
              <Text style={{fontSize:16}}>{rowData.title}</Text>
              <Text style={{marginTop:8,marginBottom:8}}>{rowData.company}</Text>
              <Text style={{color: '#999'}}>{rowData.info}</Text>
            </View>
            <View style={{flex:1, paddingLeft: 10}}>
              <Text style={{color: '#999', textAlign: 'right'}}>{rowData.date}</Text>
              <Text style={{marginTop:8,color:'red', textAlign: 'right'}}>{rowData.salary}</Text>
            </View>
          </View>
          <View style={{padding:10, flexDirection:'row'}}>
            <Text style={styles.companyTag}>{rowData.companyPosition}</Text>
            <Text style={styles.companyTag}>{rowData.companyPerson}</Text>
            <Text style={styles.companyTag}>{rowData.companyService}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
  thumb: {
    width: 64,
    height: 64,
  },
  separator: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  companyTag: {
    color:'#999',
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
    height: 20,
    paddingTop: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#E8E8E8',
  },
});

module.exports = HomeCell;
