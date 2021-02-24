import React from 'react';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {employeeCreate} from '../actions';
import {Card, CardSection} from './common';
import EmployeeForm from './EmployeeForm';

const EmployeeCreate = ({employee}) => {
  const {name, phone, shift} = useSelector((state) => state.employeeForm);
  const dispatch = useDispatch();

  const onButtonPress = () => {
    dispatch(employeeCreate({name, phone, shift: shift || 'Monday'}));
  };

  return (
    <Card>
      <EmployeeForm employee={employee} />

      <CardSection>
        <Button onPress={onButtonPress}>Create</Button>
      </CardSection>
    </Card>
  );
};

export default EmployeeCreate;
