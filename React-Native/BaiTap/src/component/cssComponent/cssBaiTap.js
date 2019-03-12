import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import Red from './red.js';
import Blue from './blue.js';

export default class CssBaiTap extends Component{

    constructor(props){
        super(props);
        this.state = {
            bg: 'transparent',
            colorGreen: '',
            data: [
                {id: 1, name: "tan"}
            ]
        };
    }
    
    _onPressGreen(value){
        this.setState({
            colorGreen: 'green',
        });
        this.refs["blue"].changeColor('green');
    }

    _handleChangeColor = (value, callback) => {
        this.setState({
            bg: value,
            colorGreen: ''
        });
        callback && callback(this); // check đã change color 
    }

    render(){
        return (
            <View style={[styles.container, {backgroundColor: this.state.bg}]}>
                <View style={styles.contentTop}>
                    <Text onPress={this._onPressGreen.bind(this)} style={styles.textTop}>GREEN</Text>
                </View>
                <View style={styles.contentBottom}>
                    <Red onChangeRed={this._handleChangeColor} colorGreen={this.state.colorGreen}></Red>
                    <Blue ref="blue" onChangeBlue={this._handleChangeColor} colorGreen={this.state.colorGreen}></Blue>
                </View>
            </View>
        );
    }
}
const styles = {
    container:{
        flex: 1,
    },
    contentTop:{
        flex:3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    textTop:{
        color: 'green',
        fontSize: 35,
        fontWeight: '800'
    },
    contentBottom:{
        flex:7,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    changeBgRed:{
        backgroundColor: 'red'
    },
    changeBgBlue:{
        backgroundColor: 'blue'
    },
    changeBgGreen:{
        backgroundColor: 'green'
    }
};