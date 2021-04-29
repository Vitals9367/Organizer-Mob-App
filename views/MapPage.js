import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import * as Location from 'expo-location';

import Loading from './Loading';
import MapCallout from '../components/MapCallout';
import {mapStyle} from '../utils/style';
import { GetPlacesAction } from '../redux/actions/MapActions';


function MapPage({navigation, GetPlaces, places, loading}) {

  /* defaultLocation */
    const defaultLocation = {
      coords:{
        latitude: 54.89655303673587,
        longitude: 23.903247439608805,
      },
    }

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [selectedPlace,setSelectedPlace] = useState(null);
    const [bottomBar,setBottomBar] = useState(false);

    const getCurrentLocation = async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        throw new Error();

      }

      let location = await Location.getCurrentPositionAsync({});
      return location;
    }

    useEffect(()=>{
          
      getCurrentLocation()
      .then((location)=>{
        setLocation(location);
        GetPlaces(location)})
      .catch(()=>{
        setLocation(defaultLocation);
        GetPlaces(location);
      });

    },[]);

    if(places == null)
      return (<Loading/>)

  return (
    <View style={styles.container}>

      <MapView style={styles.map}
        initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
        customMapStyle={mapStyle}
        onPress={()=>{setBottomBar(false)}}
        >

          <Marker
            coordinate={{ latitude:location.coords.latitude,longitude:location.coords.longitude}}
          >
            <Callout>
              <Text>Current Location</Text>
            </Callout>
          </Marker>

        {places && places.map((place,index)=>{
          return (
          <Marker
            key={index}
            coordinate={{ latitude:place.geometry.location.lat,longitude:place.geometry.location.lng}}
            onPress={()=>{
              setBottomBar(true);
              setSelectedPlace(place);
            }}
          >
            <Callout
              onPress={()=>{navigation.navigate('Place',{place: place})}}
            >
              <MapCallout place={place}/>
            </Callout>
          </Marker>)
        })}
      </MapView>
      {bottomBar && <View style={styles.bottomBar}>
        <View style={{flex:2}}>
          <Text style={styles.bottomBarText}>{selectedPlace.name}</Text>
          <Text>Distance: 15 km</Text>
        </View>
        <TouchableOpacity
        style={styles.btn}
        >
        <Text style={styles.btn_txt}>Directions</Text>

        </TouchableOpacity>
      </View>}
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
  bottomBar:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    position: 'absolute',
    width: '100%',
    height:'15%',
    bottom: 0,
    padding:20,
    paddingTop:5,
    paddingBottom:5,
  },
  bottomBarText:{
    fontSize:16,
  },
  btn: {
    display: 'flex',
    marginLeft:5,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 25,
    backgroundColor: '#04AD8F',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  btn_txt: {
    color: 'white',
    fontSize:18,
    fontWeight:'bold',
  },
});

const mapStateToProps = state => {

    return{
        places : state.Map.placeList,
        loading : state.Map.loading,
    }
}

const mapDispatchToProps = dispatch => {

    return{
        GetPlaces: (location) => dispatch(GetPlacesAction(location)),
    }
}

export default  connect (mapStateToProps,mapDispatchToProps) (MapPage)
