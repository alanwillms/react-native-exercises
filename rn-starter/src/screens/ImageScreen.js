import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        score={9}
        title='Forest'
        imageSource={require('../../assets/images/forest.jpg')}
      />
      <ImageDetail
        score={7}
        title='Beach'
        imageSource={require('../../assets/images/beach.jpg')}
      />
      <ImageDetail
        score={4}
        title='Mountain'
        imageSource={require('../../assets/images/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
