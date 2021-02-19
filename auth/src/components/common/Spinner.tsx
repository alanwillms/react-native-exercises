import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Spinner = ({size}: {size?: number | 'small' | 'large'}) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator animating color={'gray'} size={size || 'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
