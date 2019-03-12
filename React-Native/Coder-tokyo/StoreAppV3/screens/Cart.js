import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class CartScreen extends Component{
    static navigationOptions = {
        title: 'Cart',
    };

    render(){
        return (
            <View>
                <Text>Cart</Text>
            </View>
        );
    }
}