import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class Calender extends Component{
    constructor(props){
        super(props);
    }
    select = null;
    _clickActive = (value) =>{
        if(this.select != null){
            this.refs["ComponentChild_" + this.select]._update(false);
        }
        this.refs["ComponentChild_" + value]._update(true);
        this.select = value;
        console.log(2);
    }

    render(){
        return (
            <View style={styles.container}>
                {this._renderCalender()}
            </View>
        );
    }
    _renderCalender(){
        console.log("Calendar");
        let input = [];
        for(let i = 1; i <= 30; i++){
            input.push(
                <ComponentChild ref={"ComponentChild_" + i} key={'child' + i} index={i} clickActive={()=>this._clickActive(i)} />
            );
        }
        return input;
    }
}
class ComponentChild extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            active: false,
        }
    }
    _clickActive = (value) =>{
        if(this.props.clickActive){
            console.log(1);
            this.props.clickActive(value);
        }
    }
    _update = (value) =>{
        this.setState({
            active: value
        });
       console.log(3);
    }
    render(){
        let active = this.state.active;
        let index = this.props.index;
        console.log("Calendar" + index);
        return(
                <TouchableHighlight  onPress={()=>this._clickActive(index)}  underlayColor={"#00BFA5"} style={[styles.row, (active == true) ? styles.bg : '']}>
                    <Text style={styles.textCenter}>{index}</Text>
                </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    row: {
        borderWidth: 1,
        width: '16%',
        padding: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    bg: {
        backgroundColor: 'blue'
    }
});
