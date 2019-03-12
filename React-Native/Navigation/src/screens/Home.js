import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Home extends Component{
    // static  navigationOptions = {
    //     title: 'Trang Chủ'
    // }
    render(){
        return(
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#fff'}}>
                <Text>HOME</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ManHinh_Detail', {thamso: 'Hello Thanh Tan'})}} style={{backgroundColor: 'green', padding: 5}}>
                    <Text style={{color:'white'}}>Go to detail</Text>
                </TouchableOpacity>
            </View>
        ); 
    }
}