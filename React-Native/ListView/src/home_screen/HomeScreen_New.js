import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as homeActions from '../home_screen/redux/home_actions.js';
import { connect } from 'react-redux';

class HomeScreen extends Component {

    _changeColor=()=>{
        this.props.homeActions.changeColor({
            color:"red"
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this._changeColor}>
                    {'Change Color'}
                </Text>
            </View>
        );
    }
}

export default connect(state => ({
        main: state.main,
    }),
    (dispatch) => ({
        homeActions: bindActionCreators(homeActions, dispatch),
    })
)(HomeScreen);

const styles = {
    container: {
        backgroundColor: "red",
    },
};
