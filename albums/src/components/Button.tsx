import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import OnPressFunction from '../types/OnPressFunction';

const Button = ({
  onPress,
  children,
}: {
  onPress: OnPressFunction;
  children: ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10,
  },
});

export default Button;
