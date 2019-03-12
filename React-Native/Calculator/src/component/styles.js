import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerDisplay:{
        flex: 2,
        backgroundColor: '#90CAF9',
        justifyContent: 'center',
    },
    textDisplay:{
        fontSize: 40,
        fontWeight: '800',
        color: 'white',
        alignSelf: 'flex-end'
    },
    textResultDisplay:{
        alignSelf: 'flex-start'
    },
    containerInput:{
        flex: 8,
        backgroundColor: '#424242'
    },
    inputRow:{
        flex: 1,
        flexDirection: 'row'
    },
    textButton:{
        flex: 1,
        padding: 20,
        backgroundColor: '#757575',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFont:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
  });
export default styles;  