import React from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    LayoutAnimation,
    TouchableOpacity,
    UIManager,
    Platform
} from 'react-native';
import {
    CardSection
} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends React.PureComponent{
    constructor(props){
        super(props);
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
          }
    }
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
      }      

    renderDescription(){
        const {library, selectedLibraryId , expanded} = this.props;

        // if(library.id === selectedLibraryId){
        //     return (
        //         <Text>
        //             {library.description}
        //         </Text>
        //     );
        // }

        if(expanded){
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render(){
        const {
            titleStyle
        } = styles;
        const {id, title} = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>   
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    // ownProps là những prop của component cha
    const expanded = state.selectedLibraryId === ownProps.library.id;

    // return {
    //     selectedLibraryId: state.selectedLibraryId
    // }

    return {
        expanded
    }
}

export default connect(mapStateToProps, actions)(ListItem);