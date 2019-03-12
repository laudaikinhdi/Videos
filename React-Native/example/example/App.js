/**
 * Sample React Native App1
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';


import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './src/utils/allReducers';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/utils/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(...[sagaMiddleware]));

import MainScreen from './src/main_screen/MainScreen'

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainScreen navigation={{
                        dispatch: this.props.dispatch,
                    }} />
                </View>
            </Provider>
        );
    }
}

sagaMiddleware.run(rootSaga);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white',
    },
});
