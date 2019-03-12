import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './AppNavigator';
import axios from 'axios';
axios.defaults.baseURL = 'http://b1e4f056.ngrok.io';

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   categories: [
    //     {id: 1, name: 'Test1'},
    //     {id: 2, name: 'Test2'},
    //     {id: 3, name: 'Test3'},
    //   ]
    // }
  }
  render() {
    // const {categories} = this.state;
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
