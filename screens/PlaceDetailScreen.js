import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = (props) => (
  <View>
    <Text> places detail screen</Text>
  </View>
);

PlaceDetailScreen.navigationOptions = (navData) => ({
  headerTitle: navData.navigation.getParam('placeTitle'),
});

const styles = StyleSheet.create({

});

export default PlaceDetailScreen;
