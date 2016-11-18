'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    WebView
} from 'react-native'
export default class HomeDetail extends Component {
	constructor(props){
		super(props);
		this.state = {
			 rowDetailData: ''
		}
	}
	componentDidMount() {
		let detailUrl = 'http://c.3g.163.com/nc/article/' + this.props.rowDetailData.docid + '/full.html';
        fetch(detailUrl).then((response)=>response.json()).then((jsonData) => {
          
            let data = jsonData[this.props.rowDetailData.docid];
            let bodyHtml = data['body'];
            let imgArrLen = data['img'].length;
            for (var i = 0; i < imgArrLen; i++) {
                let img = data['img'][i];
                let imgSrc = img['src'];
                let imgHtml = '<img src="' + imgSrc + '" width="100%">';
                bodyHtml = bodyHtml.replace(img['ref'], imgHtml);
            }
            this.setState({
				
                rowDetailData: bodyHtml
            });
        }).catch((error)=> {
            alert('请求数据失败');
        });
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
					<Text style={{fontSize:17,flex:1,textAlign:'center',marginRight:30}}>详情</Text>
				</View>
				<WebView
                	style={{marginTop: 0,backgroundColor:'white'}}
                	automaticallyAdjustContentInsets={true}
                	source={{html: this.state.rowDetailData, baseUrl: ''}}
                	javaScriptEnabled={true}
                	domStorageEnabled={true}
               	 	startInLoadingState={true}
               	 	scalesPageToFit={this.state.scalesPageToFit}
           		 />
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