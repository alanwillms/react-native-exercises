import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (prevState, { type, payload }) => {
  switch (type) {
    case 'increment':
      return { ...prevState, counter: prevState.counter + payload };
    case 'decrement':
      return { ...prevState, counter: prevState.counter - payload };
    default:
      return prevState;
  }
};

const CounterScreen = () => {
  // let counter = 0;
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          // counter++;
          // setCounter(counter + 1);
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          // counter--;
          // setCounter(counter - 1);
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
