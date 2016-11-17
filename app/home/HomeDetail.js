'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
	StyleSheet,
	Navigator,
	TouchableOpacity,
	Image,
	Text,
	View
} from 'react-native'


export default class HomeDetail extends Component {
	constructor(props){
		super(props);
		this.state = {rowDetailData: null};
	}
	_pressButton(){
		const { navigator } = this.props;
		if(navigator) {
			navigator.pop();
		}
	}
	
	render() {
    const { rowDetailData } = this.props;

		return (
			<View style={{flex: 1}}>
				<View style={{padding: 10,marginTop:20,justifyContent: 'center',alignItems: 'center',flexDirection:'row'}}>
					<TouchableOpacity onPress={this._pressButton.bind(this)}>
						<Image source={require('../../image/fanhui.png')} style={{width:30,height:30}}/>
					</TouchableOpacity>
					<Text style={{fontSize:17,flex:1,textAlign:'center',marginRight:30}}>职位详情</Text>
				</View>
				<View style={{padding:15, flexDirection:'row'}}>
					<Text style={{flex:1}}>{rowDetailData.title}</Text>
          <Text style={{color:'red'}}>{rowDetailData.salary}</Text>
				</View>
        <View style={{padding: 15}}>
          <Text style={{marginTop:8,marginBottom:8}}>{rowDetailData.company}</Text>
          <Text style={{color: '#999'}}>{rowDetailData.info}</Text>
        </View>
		</View>
		);
	}
}
var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});