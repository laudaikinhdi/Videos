import React, {Component} from 'react';

import{
    View,
    Text
} from 'react-native';

export default class Red extends Component{

    constructor(props){
        super(props);
    }
    
    _onChangeRed = () => {
        this.props.onChangeRed('red', (red)=>{
            alert("Change rồi!");
            console.log(red.state);
        });     
    }

    render(){
        return(
            <View >
            {/* !this.sate.hide && (<Component>) */}
                <Text onPress={this._onChangeRed}  style={[styles.textRed, (this.props.colorGreen != '') ? styles.backBgGreen : '']}>RED</Text>
            </View>
        );
    }
}

const styles = {
    textRed:{
        color: 'red',
        fontSize: 35,
        fontWeight: '800',
        borderWidth: 2,
        padding: 5,
        borderColor: 'red'
    },
    backBgGreen:{
        backgroundColor: 'green'
    }
};