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
        this.state = {
            data: [
                {
                    id: '1111',
                    name: 'name1'
                },
                {
                    id: '2222',
                    name: 'name2'
                },
                {
                    id: '3333',
                    name: 'name3'
                },
                {
                    id: '4444',
                    name: 'name4'
                },
                {
                    id: '5555',
                    name: 'name5'
                }
            ]
        }
    }
    select = null;
    _clickActive = (value) =>{
        if(this.select != null){
            this.refs["ComponentChild_" + this.select]._update(false);
        }
        this.refs["ComponentChild_" + value]._update(true);
        this.select = value;
    }
    onPress = () => {
        let obj = {
            id: Math.random(),
            name: 'name5' + Math.random()
        }
        // let data = this.state.data;
        // data.push(obj);
        this.setState({
            data: [
                ...this.state.data, 
                obj
            ]
        });
       
    }

    render(){
        return (
            <ComponentChild2 data={this.state.data} onPress={this.onPress}/>
        );
    }
    _renderCalender(){
        console.log("Calendar");
        let input = [];
        for(let i = 1; i <= this.state.data; i++){
            input.push(
                <ComponentChild ref={"ComponentChild_" + i} key={'child' + i} index={i} clickActive={(value)=>this._clickActive(value)} />
                // cách viết function dài: thì trong for thì mỗi lần for sẽ dk lại function
                // cách viết function ngắn: thì chỉ dk 1 lần trong for
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
            this.props.clickActive(value);
        }
    }
    _update = (value) =>{
        this.setState({
            active: value
        });
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
class ComponentChild2 extends React.PureComponent{
    onPress = () => {
        if(this.props.onPress){
            this.props.onPress();
        }
    }
    render(){
        let data = this.props.data;
        return (
            <View style={styles.container}>
                {data.map((value,index)=>{
                    return (
                        <ComponentChild ref={"ComponentChild_" + value.id} key={'child' + value.id} index={value.name} />
                    )
                })}
                <Text onPress={this.onPress}>{'Add'}</Text>
            </View>
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
        // width: '16%',
        padding: 30,
        height: 100,
        width: 100
    },
    textCenter: {
        textAlign: 'center'
    },
    bg: {
        backgroundColor: 'blue'
    }
});
