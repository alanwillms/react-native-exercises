//import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../contexts/LocationContext';
import { withNavigationFocus, SafeAreaView } from 'react-navigation';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  // Rebuil callback when the second argument changes
  const callback = useCallback((location) => addLocation(location, recording), [
    recording,
  ]);
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services.</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
