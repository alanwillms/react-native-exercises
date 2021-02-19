import React, {useState} from 'react';
import {Button, Card, CardSection, Input} from './common';
import firebase from 'firebase';
import {StyleSheet, Text} from 'react-native';
import Spinner from './common/Spinner';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoginSuccess = () => {
    setError('');
    setEmail('');
    setPassword('');
    setLoading(false);
  };

  const onLoginError = () => {
    setError('Failed to sign in or sign up');
    setLoading(false);
  };

  const onButtonPress = () => {
    setError('');
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginError);
      });
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          onChangeText={setEmail}
          value={email}
          placeholder="user@gmail.com"
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          onChangeText={setPassword}
          value={password}
          placeholder="password"
          secureTextEntry
        />
      </CardSection>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <CardSection>
        {loading ? (
          <Spinner size="small" />
        ) : (
          <Button onPress={onButtonPress}>Log in</Button>
        )}
      </CardSection>
    </Card>
  );
};
const styles = StyleSheet.create({
  error: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
});

export default LoginForm;
