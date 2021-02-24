import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Communications from 'react-native-communications';
import {employeeSave, employeeDelete, employeeUpdate} from '../actions';
import {Card, CardSection, Confirm} from './common';
import EmployeeForm from './EmployeeForm';

const EmployeeEdit = ({employee}) => {
  const [showModal, setShowModal] = useState(false);
  const {name, phone, shift} = useSelector((state) => state.employeeForm);
  const dispatch = useDispatch();

  useEffect(() => {
    for (let prop in employee) {
      const value = employee[prop];
      dispatch(employeeUpdate({prop, value}));
    }
  }, [dispatch, employee]);

  const onButtonPress = () => {
    dispatch(
      employeeSave({uid: employee.uid, name, phone, shift: shift || 'Monday'}),
    );
  };

  const onTextPress = () => {
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  return (
    <Card>
      <EmployeeForm employee={employee} />

      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>

      <CardSection>
        <Button onPress={onTextPress}>Text Schedule</Button>
      </CardSection>

      <CardSection>
        <Button onPress={() => setShowModal(true)}>Fire Employee</Button>
      </CardSection>

      <Confirm
        visible={showModal}
        onAccept={() => {
          employeeDelete({uid: employee.uid});
          setShowModal(false);
        }}
        onDecline={() => setShowModal(false)}>
        Are you sure you want to delete this?
      </Confirm>
    </Card>
  );
};

export default EmployeeEdit;
