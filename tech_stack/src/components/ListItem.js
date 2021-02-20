import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {CardSection} from './common';

const ListItem = ({library}) => {
  return (
    <CardSection>
      <Text style={styles.title}>{library.title}</Text>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingHorizontal: 15,
  },
});

export default ListItem;
