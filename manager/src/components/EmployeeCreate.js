import {Picker} from '@react-native-community/picker';
import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {employeeUpdate} from '../actions';
import {Card, CardSection, Input} from './common';

const EmployeeCreate = () => {
  const {name, phone, shift} = useSelector((state) => state.employeeForm);
  const dispatch = useDispatch();
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane Doe"
          value={name}
          onChangeText={(value) =>
            dispatch(employeeUpdate({prop: 'name', value}))
          }
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={(value) =>
            dispatch(employeeUpdate({prop: 'phone', value}))
          }
        />
      </CardSection>

      <CardSection style={{flexDirection: 'column'}}>
        <Text style={styles.pickerText}>Shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={(value) =>
            dispatch(employeeUpdate({prop: 'shift', value}))
          }
          style={{flex: 1}}>
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>

      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  pickerText: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

export default EmployeeCreate;
