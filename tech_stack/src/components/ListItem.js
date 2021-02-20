import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {CardSection} from './common';

const ListItem = ({library}) => {
  const {id, title, description} = library;
  const selectedLibraryId = useSelector((state) => state.selectedLibraryId);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        dispatch({
          type: 'select_library',
          payload: id,
        })
      }>
      <View>
        <CardSection>
          <Text style={styles.title}>{title}</Text>
        </CardSection>

        {selectedLibraryId === id ? (
          <CardSection>
            <Text style={styles.title}>{description}</Text>
          </CardSection>
        ) : null}
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
