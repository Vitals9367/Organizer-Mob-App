import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { Loader } from "react-native-feather";
import MapView from 'react-native-maps';

export default function MapPage() {

    const currentLocation = {
        latitude: 54.89655303673587,
        longitude: 23.903247439608805,
    }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }} />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
