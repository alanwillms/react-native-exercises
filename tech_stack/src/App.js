import React from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import {Provider as ReduxProvider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <ReduxProvider store={createStore(reducers)}>
      <View style={{flex: 1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </ReduxProvider>
  );
};

export default App;
