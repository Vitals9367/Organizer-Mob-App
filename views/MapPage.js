import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { connect } from 'react-redux';
import * as Location from 'expo-location';

import Loading from './Loading';
import MapCallout from '../components/MapCallout';
import {mapStyle} from '../utils/style';
import { GetPlacesAction } from '../redux/actions/MapActions';


function MapPage({navigation, GetPlaces, places, loading}) {

  const EDGE_PADDING = {
  top: 100,
  right: 100,
  bottom: 100,
  left: 100
}

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
    const [showDirection,setShowDirection] = useState(false);
    const [mapRef,setMapRef] = useState(null);

    const onDirection = () => {

      setShowDirection(!showDirection);

      if(!showDirection){

        const markers = [
          location.coords,
          {
            latitude:selectedPlace.geometry.location.lat,
            longitude:selectedPlace.geometry.location.lng
          }
        ];

        mapRef.fitToCoordinates(markers,{ edgePadding:EDGE_PADDING });

      }
    }

    const getCurrentLocation = async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        throw new Error();

      }

      let location = await Location.getCurrentPositionAsync({});
      return location;
    }
    
    const AnimateToLocation = (place) => {

      mapRef.animateToCoordinate({latitude:place.geometry.location.lat,longitude:place.geometry.location.lng},2);

    }

    const onLocationChange = (region) => {

      setLocation({coords:{
        latitude:region.latitude,
        longitude:region.longitude
      }});

      GetPlaces(location);

    }

    useEffect(()=>{
      
      setLocation(defaultLocation);

      getCurrentLocation()
      .then((location)=>{
        setLocation(location);
        GetPlaces(location)})
      .catch(()=>{
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
        ref={(ref) => { setMapRef(ref) }}
        customMapStyle={mapStyle}
        onPress={()=>{
          if(!showDirection){
            setSelectedPlace(null)
          }
        }}
        >

          <Marker
            coordinate={{ latitude:location.coords.latitude,longitude:location.coords.longitude}}
            tracksViewChanges={false}
          >
          </Marker>
          
          <Markers
           places={places}
           navigation={navigation}
           setSelectedPlace={setSelectedPlace}
           selectedPlace={selectedPlace} 
           showDirection={showDirection} 
           AnimateToLocation={AnimateToLocation} 
           />

        {showDirection && 
        <MapViewDirections
          origin={{latitude:location.coords.latitude,longitude:location.coords.longitude}}
          destination={{ latitude:selectedPlace.geometry.location.lat,longitude:selectedPlace.geometry.location.lng}}
          apikey="AIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U"
          strokeWidth={3}
          strokeColor="green"
        />}

      </MapView>
      {selectedPlace && <View style={styles.bottomBar}>
        <View style={{flex:2}}>
          <Text style={styles.bottomBarText}>{selectedPlace.name}</Text>
          <Text>Distance: 15 km</Text>
        </View>
        <TouchableOpacity
        style={styles.btn}
        onPress={() => onDirection()}
        >
        <Text style={styles.btn_txt}> {showDirection ? 'Cancel' : 'Directions'}</Text>

        </TouchableOpacity>
      </View>}
    </View>
  ); 
}

const Markers = ({ navigation, places, setSelectedPlace, selectedPlace,showDirection, AnimateToLocation }) => {

  if(showDirection){

    return (
      <Marker
        coordinate={{ latitude:selectedPlace.geometry.location.lat,longitude:selectedPlace.geometry.location.lng}}
        tracksViewChanges={false}
      >
        <Image source={require('../assets/fs1.png')} style={{height:28,width:28}} />
        <Callout
          onPress={()=>{navigation.navigate('Place',{place: selectedPlace, AnimateToLocation:AnimateToLocation(selectedPlace)})}}
        >
          <MapCallout place={selectedPlace}/>
        </Callout>
      </Marker>)

  }else{

    return(
      places && places.map((place,index)=>{
      return (
      <Marker
        key={index}
        coordinate={{ latitude:place.geometry.location.lat,longitude:place.geometry.location.lng}}
        onPress={()=>{
          setSelectedPlace(place);
        }}
        tracksViewChanges={false}
      >
        <Image source={require('../assets/fs1.png')} style={{height:28,width:28}} />
        <Callout
          onPress={()=>{navigation.navigate('Place',{place: place, AnimateToLocation:AnimateToLocation(place)})}}
        >
          <MapCallout place={place}/>
        </Callout>
      </Marker>)
    }))

  }
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
