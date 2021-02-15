//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';
//AppRegistry.registerComponent(appName, () => App);

// 1. Import a library to help create a component
import React from 'react';
import {AppRegistry, Text} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// 2. Create a component
const App = () => {
  return (
    <>
      <Header headerText="Albums!" />
      <AlbumList />
    </>
  );
};

// 3. Render it to the device
AppRegistry.registerComponent('albums', () => App);
