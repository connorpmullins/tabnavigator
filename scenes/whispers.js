import React from 'react';
import { View } from 'react-native';

import AlbumList from '../components/AlbumList';
import WhisperHeader from '../components/whisperHeader';

const Whispers = () => {
  return (
    <View>
      <WhisperHeader />
      <AlbumList />
    </View>
  );
};

export default Whispers;
