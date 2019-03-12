import React, {Component} from 'react';
import{
    View,
    Text,
} from 'react-native';
import {Tabbar} from './router.js';

export default class Navigator extends Component{
    render(){
        return (
            <Tabbar />
        );
    }
}