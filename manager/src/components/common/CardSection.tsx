import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuxProps} from '../../types/AuxProps';

const CardSection = ({children}: AuxProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
});

export {CardSection};
