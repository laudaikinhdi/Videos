import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import styles from './styles.js';

const inputButton = [
    ['7','8','9','/'],
    ['4','5','6','*'],
    ['3','2','1','-'],
    ['0','.','=','+']
]; // mảng 2 chiều


export default class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            currenInput : "",
            result: ""
        }
    }

    _saveOperator(value){
        if(this.state.result == ""){
            this.setState({
                currenInput: this.state.currenInput + value,
            });
        }else{
            this.setState({
                currenInput: this.state.result + value,
            });
        }
    }
    _saveResult(){
        let curren = this.state.currenInput;
        let result = eval(curren);
        this.setState({
            result: result,
        });
    }
    _saveNumber(value){
        this.setState({
            currenInput: this.state.currenInput + value,
        });
    }

    _onPress(value){
        switch(value){
            case "/":
            case "*":
            case "-":
            case "+":
                this._saveOperator(value);
            break;    
            case "=":
                this._saveResult();
            break;
            default:
                this._saveNumber(value); 
            break;
        }
    };

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.containerDisplay}>
                    <Text style={styles.textDisplay}>{this.state.currenInput}</Text>
                    <Text style={styles.textDisplay}>{this.state.result}</Text>
                </View>
                <View style={styles.containerInput}>
                    {this._renderButton()}
                </View>
            </View>
        );
    }

    _renderButton(){
        let row = inputButton.length;
        let views = [];
        for( let i = 0; i < row; i++){
            let input = [];
            for(let j = 0; j < inputButton[i].length; j++){
                input.push(
                    <TouchableHighlight underlayColor={"#00BFA5"}  key={'touch_' + j} style={styles.textButton} onPress={this._onPress.bind(this, inputButton[i][j])}>
                        <Text style={styles.textFont} key={'col_' + j}>{inputButton[i][j]}</Text>
                    </TouchableHighlight>
                );
            }
            views.push(<View style={styles.inputRow} key={'row_' + i}>{input}</View>);
        }
        return views;
    }
}