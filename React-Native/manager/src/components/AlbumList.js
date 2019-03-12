import React, {Component} from 'react';
import {
    ScrollView
} from 'react-native';

import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props){
        super(props);
        this.state = {
            albums: []
        }
    }
    componentWillMount(){ // chưa chạy hàm render
            axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => 
                this.setState({albums: response.data})
            )
            .catch(error => {
                console.log(error);
            })
    }

    renderAlbums = () => {
        // let array = [];
        // this.state.albums.map(album => array.push(<Text>{album.title}</Text>));
        // return array;
        return this.state.albums.map((album,index) => 
            <AlbumDetail key={'title_' + index} album={album}/>
        );
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};

export default AlbumList;