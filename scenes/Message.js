import React from 'react';
import { View } from 'react-native';
// import { StackNavigator } from 'react-navigation';

import MessageList from '../components/MessageList';
import WhisperHeader from '../components/WhisperHeader';

const Message = () => {
  return (
    <View>
      <WhisperHeader />
      <MessageList />
    </View>
  );
};

export default Message;
