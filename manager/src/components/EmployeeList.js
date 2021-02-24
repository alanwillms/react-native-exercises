import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

const EmployeeList = () => {
  const employees = useSelector((state) => Object.values(state.employees));

  useEffect(() => {
    employeesFetch();
  }, []);

  return (
    <View>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListItem employee={item} />}
      />
    </View>
  );
};

export default EmployeeList;
