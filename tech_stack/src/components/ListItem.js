import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {CardSection} from './common';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ListItem = ({library}) => {
  const {id, title, description} = library;
  const expanded = useSelector((state) => state.selectedLibraryId === id);
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // we dont have componentWillUpdate
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        dispatch({
          type: 'select_library',
          payload: id,
        });
      }}>
      <View>
        <CardSection>
          <Text style={styles.title}>{title}</Text>
        </CardSection>

        {expanded ? (
          <CardSection>
            <Text style={styles.description}>{description}</Text>
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
  description: {
    paddingHorizontal: 15,
  },
});

export default ListItem;
