import React from 'react';
import {
    Text,
    View
} from 'react-native';

const Header = (props) => {
    return (
       <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
       </View>
    );
}

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20,
    }
}

export default Header;