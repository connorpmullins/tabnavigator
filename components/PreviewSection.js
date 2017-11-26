import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { navigate } from 'react-navigation';

import Message from '../scenes/Message';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    // borderStylox: 'round',
  },
};

const PreviewSection = (props) => {
  return (
    <TouchableOpacity
      style={styles.containerStyle}
      // onPress={() => )}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default PreviewSection;
