import React from 'react';
import {Button, Card, CardSection, Input} from './common';
import {StyleSheet, Text} from 'react-native';
import Spinner from './common/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {emailChanged, loginUser, passwordChanged} from '../actions';
import {RootState} from '../reducers';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {email, password, error, loading} = useSelector(
    (state: RootState) => state.auth,
  );

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          onChangeText={(text) => dispatch(emailChanged(text))}
          value={email}
          placeholder="user@gmail.com"
        />
      </CardSection>

      <CardSection>
        <Input
          label="Password"
          onChangeText={(text) => dispatch(passwordChanged(text))}
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
          <Button onPress={() => dispatch(loginUser({email, password}))}>
            Log in
          </Button>
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
