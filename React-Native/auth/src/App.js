import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import firebase from '@firebase/app';
require('firebase/auth');
import {Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: null  
    };
  }

  componentWillMount(){
     firebase.initializeApp({
      apiKey: "AIzaSyDKB0TDDF1ZgH02evtNDEfxhW0VojUZOJ0",
      authDomain: "auth-react-native-4f3ec.firebaseapp.com",
      databaseURL: "https://auth-react-native-4f3ec.firebaseio.com",
      projectId: "auth-react-native-4f3ec",
      storageBucket: "auth-react-native-4f3ec.appspot.com",
      messagingSenderId: "838951005834"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true});
      }else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent = () => {
    switch(this.state.loggedIn){
      case true: 
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm/>;
      default: 
        return <Spinner size='large'/>;
    }
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}