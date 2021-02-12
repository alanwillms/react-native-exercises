import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../contexts/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // onWillFocus={clearErrorMessage}
        // onDidFocus={clearErrorMessage}
        onWillBlur={clearErrorMessage}
        // onDidBlur={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign Up for Tracker'
        submitButtonText='Sign Up'
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink routeName='Signin' text='Already have an account? Sign in' />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
