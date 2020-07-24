import React, { useEffect } from 'react';
import {
  View, Text, StyleSheet, Platform, FlatList,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/Placeitem';
import * as placesActions from '../store/places-actions';

const PlacesListScreen = (props) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => { props.navigation.navigate('PlaceDetail', { placeTitle: itemData.item.title, placeId: itemData.item.id }); }}
        />
      )}
    />
  );
};

PlacesListScreen.navigationOptions = (navData) => ({
  headerTitle: 'All Places',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Add Place"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => {
          navData.navigation.navigate('NewPlace');
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({

});

export default PlacesListScreen;
