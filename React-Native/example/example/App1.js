/**
 * Sample React Native App1
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App1 extends Component<Props> {

    state = {
        data: [
            {id: "111",name: "name 1"},
            {id: "222",name: "name 2"},
            {id: "333",name: "name 3"},
            {id: "444",name: "name 4"},
            {id: "555",name: "name 5"},
        ]
    };

    _onPress=(value)=>{
        let data = this.state.data;
        let find = data.findIndex(i=> i.id === value.id);
        if(find!==-1){
            data.splice(find,1);
        }
        this.setState({data: data})
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.data.map((key,idx)=>{
                    return(
                        <Item key={key.id}
                              onPress={this._onPress}
                              data={key}/>
                    )
                })}
            </View>
        );
    }
}

class Item extends React.PureComponent {

    _onPress=()=>{
        if(this.props.onPress){
            this.props.onPress(this.props.data)
        }
    };

    render() {
        let {data} = this.props;
        console.log('render ' + data.id);
        return (
            <TouchableOpacity
                onPress={this._onPress}
                style={{width:'100%',height:50,borderWidth:1,backgroundColor: data.check?"blue":"white"}}>
                <Text>
                    {data.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
