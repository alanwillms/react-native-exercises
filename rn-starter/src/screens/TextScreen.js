import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Text Screen</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none' // iOS capitaliza por padrão
        autoCorrect={false} // iOS tem autocorreção automática por padrão - no login/email isso é ruim
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text>My name is {name}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none' // iOS capitaliza por padrão
        autoCorrect={false} // iOS tem autocorreção automática por padrão - no login/email isso é ruim
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {password.length < 4 ? (
        <Text>Password must have more than 4 characters.</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
