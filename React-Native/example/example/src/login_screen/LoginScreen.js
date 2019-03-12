

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

// import {bindActionCreators} from 'redux';
// import * as mainActions from '../main_screen/redux/main_actions.js';
import { connect } from 'react-redux';

class LoginScreen extends Component {

    render() {
        let login = this.props.main.login;
        if(!login){
            return null;
        }

        return (
            <View>
                <Text>
                    {login.fullName}
                </Text>
                <Text>
                    {login.email}
                </Text>
            </View>
        );
    }
}

export default connect(state => ({
        main: state.main,
    }),
    // (dispatch) => ({
    //     mainActions: bindActionCreators(mainActions, dispatch),
    // })
)(LoginScreen);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};
