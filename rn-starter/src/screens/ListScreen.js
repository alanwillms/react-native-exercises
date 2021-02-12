import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
  const friends = [
    { name: 'Monica', age: 20 },
    { name: 'Rachel', age: 45 },
    { name: 'Phoebe', age: 32 },
    { name: 'Joe', age: 27 },
    { name: 'Chandler', age: 53 },
    { name: 'Ross', age: 30 },
  ];
  /*const friends = [
    { name: 'Monica', key: '1' },
    { name: 'Rachel', key: '2' },
    { name: 'Phoebe', key: '3' },
    { name: 'Joe', key: '4' },
    { name: 'Chandler', key: '5' },
    { name: 'Ross', key: '6' },
  ];*/
  return (
    <FlatList
      data={friends}
      //horizontal
      //showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Friend {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
