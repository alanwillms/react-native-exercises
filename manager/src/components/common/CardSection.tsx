import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {AuxProps} from '../../types/AuxProps';

interface CardSectionProps extends AuxProps {
  style?: StyleProp<ViewStyle>;
}

const CardSection = ({children, style}: CardSectionProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
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
