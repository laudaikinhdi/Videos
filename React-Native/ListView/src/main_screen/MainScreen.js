import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as mainActions from '../main_screen/redux/main_actions.js';
import { connect } from 'react-redux';

import LoginScreen from '../login_screen/LoginScreen.js';
import HomeScreen from '../home_screen/HomeScreen_New.js';
import CListView from '../libs/CListView/CListView';

class MainScreen extends Component {

    _page = 1;

    componentDidMount(){
        this.refs["CListView"].loadAuto();
    }

    _onLoadMore=()=>{
        return new Promise(resolve => {
            this.props.mainActions.loadData({page: this._page},(length)=>{
                this._page++;
                resolve(length);
            })
        })
    };

    _onRefresh=()=>{
        this._page = 1;
        return new Promise(resolve => {
            this.props.mainActions.loadData({page: this._page},(length)=>{
                this._page++;
                resolve(length);
            })
        })
    };

    render(){
        let {data} = this.props.main;
        // if(!data){
        //     return null;
        // }

        return(
            <View style={{flex:1}}>
                <View style={{width:'100%',height:100,backgroundColor:'red'}}>

                </View>
                <CListView
                    ref={"CListView"}
                    keyExtractor={(item)=> item.email}
                    data={data || []}
                    renderItem={(item,index)=>{
                        return(
                            <Item data={item}/>
                        )
                    }}
                    onLoadMore={this._onLoadMore}
                    onRefresh={this._onRefresh}
                />
            </View>


        )
    }
}

class Item extends React.PureComponent{
    render(){
        let {data} = this.props;
        return(
            <View style={styles.item}>
                <Text>
                    {data.email}
                </Text>
            </View>
        )
    }
}

export default connect(state => ({
        main: state.main,
        home: state.home,
    }),
    (dispatch) => ({
        mainActions: bindActionCreators(mainActions, dispatch),
    })
)(MainScreen);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    item:{
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
};
