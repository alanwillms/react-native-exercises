import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ListItem from './ListItem';

const LibraryList = () => {
  const libraries = useSelector((state) => state.libraries);

  return (
    <FlatList
      data={libraries}
      renderItem={({item: library}) => <ListItem library={library} />}
      keyExtractor={(library) => library.id}
    />
  );
};

export default LibraryList;
