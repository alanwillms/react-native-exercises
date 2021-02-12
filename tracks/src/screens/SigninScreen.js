import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../contexts/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // onWillFocus={clearErrorMessage}
        // onDidFocus={clearErrorMessage}
        onWillBlur={clearErrorMessage}
        // onDidBlur={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign In to Your Account'
        submitButtonText='Sign In'
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink routeName='Signup' text='Dont have an account? Sign up' />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SigninScreen;
