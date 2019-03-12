import React from 'react';
import {
    View,
    Text,
    Image,
    Linking
} from 'react-native';

import Card from './Card';
import CardSession from './CardSession'; 
import Button from './Button';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {
    thumbnailStyle, 
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
        <CardSession>
            <View style={thumbnailContainerStyle}>
              <Image
                style={thumbnailStyle}
                source={{uri: thumbnail_image}} />
            </View>
            <View style={headerContentStyle}>
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
        </CardSession>

        <CardSession>
          <Image 
            style={imageStyle}
            source={{uri: image}} />
        </CardSession>
        <CardSession>
          <Button onPress={() => Linking.openURL(url)}>
            Buy Now!
          </Button>
        </CardSession>
    </Card>
  );
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifiContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;