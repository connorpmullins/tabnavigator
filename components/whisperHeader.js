import React from 'react';
import { View } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';

const styles = {
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

// View makes it easier to style components
const WhisperHeader = () => {
  const { viewStyle } = styles;
  return (

    <View style={viewStyle}>
      <Icon
        name="more-vert"
        style={{
          flex: 0.33,
          alignSelf: 'flex-start',
          position: 'absolute-left',
        }}
      />

      <SearchBar
        icon={{
          alignSelf: 'auto',
          justifyContent: 'left',
          flex: 1,
          position: 'relative',
        }}
        containerStyle={{
          // flexDirection: 'row',
          flex: 0.66,
          alignSelf: 'center',
          justifyContent: 'center',
          height: 30,
          backgroundColor: '#F8F8F8',
          borderColor: '#F8F8F8',
          borderWidth: 0,
          opacity: 1,
          borderStyle: "dashed",
          position: 'relative',
        }}
        inputStyle={{
          position: 'absolute',
          alignSelf: 'center',
          justifyContent: 'center',
          height: 25,
          width: 225,
          backgroundColor: '#d3d3d3',
          opacity: 0.6,
        }}
        // noIcon
        placeholder="Search"
        // showLoading
      />
    </View>
  );
};


// export makes things available to the rest of the app
export default WhisperHeader;
