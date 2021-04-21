import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { Loader } from "react-native-feather";
import MapView, { Callout, Marker } from 'react-native-maps';
import {GetNearby} from "../services/MapService";
import Loading from './Loading';
import MapCallout from '../components/MapCallout';
export default function MapPage() {

  /* currentLocation */
    const currentLocation = {
        latitude: 54.89655303673587,
        longitude: 23.903247439608805,
    }

    const [places,setPlaces] = useState(null);

    useEffect(()=>{
      let isMounted = true;
      GetNearby(currentLocation).then((data) =>{if (isMounted) setPlaces(data.results);});
      return () => { isMounted = false };
    },[]);

    if(places == null)
      return (<Loading/>)

  return (
    <View style={styles.container}>


      {/* Map */}
      <MapView style={styles.map}
        initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}>
        {/* Markers */}
        {places.map((place,index)=>{
          return (
          <Marker
            key={index}
            coordinate={{ latitude:place.geometry.location.lat,longitude:place.geometry.location.lng}}
          >
            <Callout>
              <MapCallout place={place} />
            </Callout>
          </Marker>)
        })}
      </MapView>
      
      <Text>{places[0].name}</Text>
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
