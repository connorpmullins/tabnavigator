import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { StackNavigator } from 'react-navigation';
import MessageDetail from './MessageDetail';

// This component is what AlbumDetail will be nested inside
/* It sits below the header */


class MessageList extends Component {
  state = {albums: [] };
  componentWillMount() {
      axios.get('https://raw.githubusercontent.com/connorpmullins/whisperpreviewlayout/master/yeahbbycakes')
        .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums () {
    return this.state.albums.map(album => 
      <MessageDetail key={album.title} album={album}/>
    );
  }

  render () {
    console.log(this.state);

    return (
      <ScrollView style={{ height:557 }}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default MessageList;
