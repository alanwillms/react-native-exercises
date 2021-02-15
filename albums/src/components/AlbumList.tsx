import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Album from '../types/Album';

const AlbumList = () => {
  // setState
  const [albums, setAlbums]: [
    Album[],
    Dispatch<SetStateAction<Album[]>>,
  ] = useState([]);

  // componentWillMount
  useEffect(() => {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => setAlbums(response.data))
      .catch((err) => {
        console.log(err);
        // The above api is no longer working
        setAlbums([
          {title: 'Tailor Swift'},
          {title: 'Fearless'},
          {title: 'Speak Now'},
          {title: 'Red'},
          {title: '1989'},
        ]);
      });
  }, []);

  const renderAlbums = () =>
    albums.map((album) => <AlbumDetail key={album.title} album={album} />);

  return <View>{renderAlbums()}</View>;
};

const styles = StyleSheet.create({});

export default AlbumList;
