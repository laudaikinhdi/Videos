import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';
import 'firebase/auth';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends React.Component{
  componentWillMount(){
    const config = {
      apiKey: "AIzaSyB88CRQ-o2_HJ6-TJPkHzRTAFiAwDOdI_w",
      authDomain: "manager-udemy-3819c.firebaseapp.com",
      databaseURL: "https://manager-udemy-3819c.firebaseio.com",
      projectId: "manager-udemy-3819c",
      storageBucket: "manager-udemy-3819c.appspot.com",
      messagingSenderId: "611321286308"
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App