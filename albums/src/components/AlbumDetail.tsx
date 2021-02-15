import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Album from './types/Album';

const AlbumDetail = ({album}: {album: Album}) => {
  return (
    <View>
      <Text>{album.title}</Text>
    </View>
  );
};

export default AlbumDetail;
