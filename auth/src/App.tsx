import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Header} from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from '@env';
import Spinner from './components/common/Spinner';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  // componentWillMount
  useEffect(() => {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
      appId: FIREBASE_APP_ID,
    });

    firebase.auth().onAuthStateChanged((user) => {
      setLoggedIn(!!user);
    });
  }, []);

  const renderContent = () => {
    switch (loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  };

  return (
    <View>
      <Header headerText="Authentication" />
      {renderContent()}
    </View>
  );
};

export default App;
