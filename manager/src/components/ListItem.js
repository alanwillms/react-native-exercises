import React from 'react';
import {View} from 'react-native';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import CardSection from './common';
import {Actions} from 'react-native-router-flux';

const ListItem = ({employee}) => {
  const {name} = employee;

  const onRowPress = () => {
    Actions.employeeEdit({employee});
  };

  return (
    <TouchableWithoutFeedback onPress={onRowPress}>
      <View>
        <CardSection>
          <Text style={styles.title}>{name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingHorizontal: 15,
  },
});

export default ListItem;
