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

class MainScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            refreshing: false
        };

    }

    componentDidMount(){
        this._loadData();
    }

    _loadData=(cb)=>{
        this.props.mainActions.loadData(null,cb);
    };

    _onLogin=()=>{
        this.props.mainActions.login({
            email:"abc@gmail.com",
            password:"123"
        });
    };

    // render() {
    //     let color = this.props.home.color;
    //     return (
    //         <View style={styles.container}>
    //             <Text onPress={this._onLogin}>
    //                 {'LOGIN'}
    //             </Text>
    //             <View style={{width: 50,height:50,backgroundColor:color}}>
    //             </View>
    //             <HomeScreen />
    //         </View>
    //     );
    // }

    render(){
        let {data} = this.props.main;
        if(!data){
            return null;
        }

        return(
            <FlatList
                style={{flex:1}}
                refreshing={this.state.refreshing}
                onRefresh={()=> {
                    console.log('onRefresh');
                    this.setState({refreshing: true});
                    this._loadData(()=>{
                        alert('onRefresh success');
                        this.setState({refreshing: false});
                    });
                }}
                onEndReached={()=> console.log('onEndReached')}
                keyExtractor={(item)=> item.id+""}
                data={data}
                renderItem={({item})=>{
                    return(
                        <View style={{width:'100%',height:50,borderWidth:1}}>
                            <Image
                                source={{uri: "https://oscar-cms.jp/"+item.imagePath}}
                                style={{width: 50,height:50}}
                            />
                        </View>
                    )
                }}
            />

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
};
