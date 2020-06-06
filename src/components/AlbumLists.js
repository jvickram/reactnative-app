import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {albums:[]}
    }
    UNSAFE_componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(result => this.setState({albums:result.data}))
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
    }

    render () {
        console.log('state ', this.state)
    return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    )
    }
}

export default AlbumList