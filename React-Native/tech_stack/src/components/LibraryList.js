import React from 'react';
import {connect} from 'react-redux';
import {
    FlatList
} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends React.Component {

    renderItem = (library) => {
        return <ListItem library={library.item}/>
    }

    render(){
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={(library) => this.renderItem(library)}
                keyExtractor={(library) => 'list_' + library.id}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: state.libraries
    }
}

export default connect(mapStateToProps)(LibraryList);