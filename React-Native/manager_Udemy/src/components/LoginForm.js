import React from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChange, loginUser} from './../actions';

class LoginForm extends React.Component {

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    };

    onPasswordChange = (password) => {
        this.props.passwordChange(password);
    };

    onButtonPress = () => {
        const {email, password} = this.props;

        this.props.loginUser({email, password})
    }

    renderError = () => {
        if(this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>    
            );
        }
    }

    renderButton = () => {
        console.log(this.props.loading);
        if(this.props.loading){
           return <Spinner size="large"/>;
        }

        return (
            <Button onPress={() => this.onButtonPress()}>
                Login
            </Button>
        );
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={text => this.onEmailChange(text)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label="Password"
                        placeholder="Password"
                        onChangeText={password => this.onPasswordChange(password)}
                        value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
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

const mapStateToProps = ({auth}) => {
    return {
        email,
        password,
        error,
        loading
    } = auth;
}

export default connect(mapStateToProps, 
    {
        emailChanged, passwordChange, loginUser
    })
(LoginForm);