import React from 'react';
import { Image, Text, View } from 'react-native';
import Preview from './Preview';
import PreviewSection from './PreviewSection';


const MessageDetail = ({ album }) => {
  /* These lines allow me to cut down on the code I write if I reference a
     certain property multiple times. See album and styles */

  const Styles = {
    headerContentStyle: {
      flex: 4,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
      borderRadius: 10,
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null,
    },
    timeStyle: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
    },
  };

  const {
    title,
    artist,
    thumbnail_image,
    time,
  } = album;

  const {
    timeStyle,
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
  } = Styles;

  return (
    <Preview>
      <PreviewSection /* ArtistImage and info */>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
        <View style={timeStyle}>
          <Text> {time} </Text>
        </View>
      </PreviewSection>
    </Preview>
  );
};

export default MessageDetail;
