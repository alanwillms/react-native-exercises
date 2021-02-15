import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Album from '../types/Album';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}: {album: Album}) => {
  const {title, artist, thumbnail_image, image} = album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image source={{uri: thumbnail_image}} style={styles.thumbnail} />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{uri: image}} style={styles.image} />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: `center`,
    alignItems: `center`,
    marginHorizontal: 10,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;
