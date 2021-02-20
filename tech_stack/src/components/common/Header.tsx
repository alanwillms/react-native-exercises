import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text} from 'react-native';

const Header = ({headerText}: {headerText: string}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  text: {
    fontSize: 20,
  },
});

export {Header};
