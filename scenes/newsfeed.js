import React from 'react';
import { View } from 'react-native';

import AlbumList from '../components/AlbumList';
import Header from '../components/header';

const Newsfeed = () => {
  return (
    <View>
      <Header headerText="Newsfeed " />
      <AlbumList />
    </View>
  );
};

export default Newsfeed;
