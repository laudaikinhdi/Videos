import React, {Component} from 'react';

import{
    View,
    Text
} from 'react-native';

export default class Blue extends Component{
    constructor(props){
        super(props);
        this.state = {
           bgGreen: 'transparent', 
        }
    }
    _onChangeBlue = () => {
        this.props.onChangeBlue('blue');
    }

    changeColor = (value) => {
        this.setState({
            bgGreen: value
        });
    }
    render(){
        return(
            <View>
                <Text onPress={this._onChangeBlue} style={[styles.textBlue,{backgroundColor: this.state.bgGreen} ]}>Blue</Text>
            </View>
        );
    }
}

const styles = {
    textBlue:{
        color: 'blue',
        fontSize: 35,
        fontWeight: '800',
        borderWidth: 2,
        padding: 5,
        borderColor: 'blue'
    },
    backBgGreen:{
        backgroundColor: 'green'
    }
}