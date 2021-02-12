import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text1}>Box 1</Text>
      <Text style={styles.text2}>Box 2</Text>
      <Text style={styles.text3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 10,
    borderColor: 'yellow',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  text2: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    alignSelf: 'flex-end',
  },
  text3: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});

export default BoxScreen;
