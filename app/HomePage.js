'use strict'
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Alert,
    TouchableOpacity,
    TextInput,
    Text,
    ListView,
    PixelRatio,
    Navigator,
    Dimensions,
} from 'react-native'
import HomeHeader   from './home/HomeHeader';
import HomeData     from './home/HomeData';
import HomeCell     from './home/HomeVideoCell';
import HomeDetail   from './home/HomeDetail';

const KEYWORD = 'T1348647909107';
const URL = 'http://c.3g.163.com/recommend/getSubDocPic?tid=' + KEYWORD + '&from=toutiao&size=20&prog=LMA1&offset=0&fn=1&passport=&devId=Y0tHHYzMPv0zawxP6c8j%2BA%3D%3D&lat=GIqqba1AQW0zfOlCQa%2BuVw%3D%3D&lon=LgVyfLmb3AoImbDNO6Xb3g%3D%3D&version=14.2&net=wifi&ts=1477124321&sign=lxcBOsKruQJJ0awLIrok47IHJok%2Bv%2F8TvgsQaj3orwJ48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=360sem_news&mac=9b3r3VxnJQZyKcxMTHZwI6hnYB%2BxK6YGLcdcZR%2BsrK8%3D';
const width = Dimensions.get('window').width;

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
            <TextInput
                     style={styles.searchBar_textinput}
                     placeholder ='请输入关键字'
                     autoCorrect = {false}
             />
            <TouchableOpacity onPress={() =>alert('搜索')}>
                 <View style={styles.searchBar_sousuo}>
                    <Text style={{ color: 'white' }}>
                        搜索
                    </Text>
                </View>
            </TouchableOpacity>
      </View>
    );
  }
}

export default class Home extends Component {
    constructor(){
        super();
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows({})),
             autoPlayImgData: [],
        }
        //必须绑定,否则onPress报错
        this._renderRow = this._renderRow.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
    }
    
    
    
    
    componentWillMount() {
         fetch(URL).then((response)=>response.json()).then((jsonData)=> {
            this._handleJsonData(jsonData[KEYWORD]);
            console.log(jsonData[KEYWORD]);
        }).catch((error)=> {
            //TODO 网络访问失败
        });
    }
    selectRow(rowDetailData){
		const { navigator } = this.props;
		if(navigator) {
			navigator.push({
				name: 'HomeDetail',
				component: HomeDetail,
				params: {
				    rowDetailData: rowDetailData,
				}
			})
		}
	}
    _handleJsonData(jsonData){
        let imgData = [];
        let listViewData = [];   
        for (var i = 0; i < jsonData.length; i++) {
            let dataItem = jsonData[i];
            if (dataItem.hasAD == 1) {
                //取出广告数据
                imgData = dataItem.ads;
            } else {
                listViewData.push(dataItem);
            }
        }
        this.setState({
            autoPlayImgData:imgData,
            
        });
    }
    _renderHeader(){
        if (this.state.autoPlayImgData.length == 0)return;
        return (
            <HomeHeader imgData={this.state.autoPlayImgData}/>
        );
    }
    _renderRow(rowData,sectionID,rowID){
        let {navigator}=this.props;
        return(
            <HomeCell 
            onSelect={() => this.selectRow(rowData)} 
            rowData = {rowData}
         />
        );
    }
    _genRows():Array<string>{
        return HomeData;
    }
    render() {
        // var homeHeader = <HomeHeader imgData={this.state.autoPlayImgData}/>;
        var resultList =
      <ListView
       
        contentContainerStyle={styles.list }
		automaticallyAdjustContentInsets={false}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}       
        renderHeader = {this._renderHeader} 
      />;
        return (
            <View style={styles.container}>
            <SearchBar/>
            {resultList}
            </View>            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
		marginTop: 20,
		backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    searchBar:{
        flexDirection: 'row',
        height:44,
        backgroundColor: '#18a55f',
    },
    searchBar_textinput:{
        flex: 1,
        marginLeft: 8,
		marginRight: 0,
		marginTop:5,
        marginBottom:5,
        backgroundColor: 'white',
        borderRadius: 3,
        fontSize:15,
        fontWeight: 'bold',
    },
    searchBar_sousuo:{
        marginRight:0,
        width: 50,
        height:40,
        marginTop: 2,
        backgroundColor: 'transparent',
        justifyContent:  'center',
        alignItems:      'center',
    },
    list:{
        flex:1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    
})
