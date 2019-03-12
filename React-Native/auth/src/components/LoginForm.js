import React, {Component} from 'react';
import {
    Text
} from 'react-native';
import {
    Button,
    Card,
    CardSection,
    Input,
    Spinner
} from './common';

import firebase from '@firebase/app';
require('firebase/auth');

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            error: '',
            loading: false
        }
    }

    onButtonPress = () => {
        this.setState({error: '', loading: true});
        const {email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSucess())
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSucess())
            .catch(this.onLoginFail());
        });
    }

    onLoginSucess = () => {
        this.setState({
            email : '',
            password: '',
            error: '',
            loading: false
        })
    }

    onLoginFail = () => {
        this.setState({error: 'Authencation failed.', loading: false});
    }

    renderButton = () => {
        if(this.state.loading === true){
            return <Spinner size='small'/>
        }

        return (
            <Button onPress={() => this.onButtonPress()}>
                Login in
            </Button>
        );
    }

    render(){
        return (
            <Card>
                <CardSection >
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.text}
                        onChangeText={email => this.setState({email: email})}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        secureTextEntry={true}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;