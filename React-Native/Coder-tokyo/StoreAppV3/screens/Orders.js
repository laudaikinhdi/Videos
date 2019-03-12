import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class OrdersScreen extends Component{
    static navigationOptions = {
        title: 'Order',
    };

    render(){
        return (
            <View>
                <Text>Order</Text>
            </View>
        );
    }
}