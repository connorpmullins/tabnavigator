import React from 'react';
import { View } from 'react-native';

import MessageList from '../components/MessageList';
import WhisperHeader from '../components/whisperHeader';

const Whispers = () => {
  return (
    <View>
      <WhisperHeader />
      <MessageList />
    </View>
  );
};

export default Whispers;
