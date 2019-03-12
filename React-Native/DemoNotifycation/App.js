/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PushNotification from 'react-native-push-notification';

export default class App extends Component {
  _onPress=()=>{
    PushNotification.localNotification({
      title: "Thông báo",
      ticker: "Ticker",
      bigText: "Big text",
      subText: "sub Text"
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this._onPress()}></Text>
      </View>
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
