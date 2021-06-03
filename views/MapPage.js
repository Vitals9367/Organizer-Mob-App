//--IMPORTS--
//React
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, DeviceEventEmitter  } from 'react-native';
import { connect } from 'react-redux';
//Maps
import MapView, { Callout, Marker, AnimatedRegion } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import MapCallout from '../components/MapCallout';
import {mapStyle} from '../utils/style';

//Expo
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

//Icons
import { BookOpen, Compass } from "react-native-feather";

//Views
import Loading from './Loading';
import Error from './Error';

//Redux
import { GetPlacesAction } from '../redux/actions/mapActions';
import { SaveLocation } from '../redux/actions/mapActions';

//--CONSTANTS--
const LOCATION_TRACKING = 'location-tracking';
const ANIMATE_REGION_DURATION = 500
const EDGE_PADDING = {
  top: 100,
  right: 100,
  bottom: 100,
  left: 100,
}
const EDGE_PADDING_USER = {
  top: 1000,
  right: 1000,
  bottom: 1000,
  left: 1000,
}

function MapPage({navigation, getPlaces, places, saveLocation, savedLocation }) {
  
  const [location, setLocation] = useState(savedLocation);
  const [rotation, setRotation] = useState(null);
  const isFirstRun = useRef(true);

  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [selectedPlace,setSelectedPlace] = useState(null);
  const [showDirection,setShowDirection] = useState(false);
  const [distance, setDistance] = useState(null);

  const marker = useRef();
  const mapRef = useRef();

  const viewOnMap = (location) => {
      const markers = [
        location.coords
      ];

    mapRef.current.fitToCoordinates(markers,{ edgePadding:EDGE_PADDING_USER });
  }

  const navigateToList = () => {
    navigation.navigate("PlaceList")
  }
  const centerView = () => {

      const markers = [
        location.coords
      ];

    mapRef.current.fitToCoordinates(markers,{ edgePadding:EDGE_PADDING_USER });
  }
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
      mapRef.current.fitToCoordinates(markers,{ edgePadding:EDGE_PADDING });
    }
  }
  const config = async () => {
    let res = await Location.requestForegroundPermissionsAsync();
    if (res.status !== 'granted') {
      console.log('Permission to access location was denied');
      return false;
    } else {
      console.log('Permission to access location granted');
      return true;
    }
  }
  TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {

    if (error) {
      console.log('LOCATION_TRACKING task ERROR:', error);
      return;
    }
    if (data) {
      const { locations } = data;
      
      // Initialize location and rotation
      if(location == null){
        setLocation(locations[0]);
        setRotation(locations[0].coords.heading);

        //fetch nearby places
        getPlaces(locations[0]);
        console.log('Places fetched');
        return;
      }
      //Update location
      if(location.coords.latitude !== locations[0].coords.latitude && location.coords.longitude !== locations[0].coords.longitude){
        //setLocation(locations[0]);
        //console.log('Location updated');
      }
      //Update rotation
      if(rotation !== locations[0].coords.heading){
        //setRotation(locations[0].coords.heading);
        //console.log('Rotation updated');
      }

      return;
    }
  });
  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 0,
    });
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING
    );
    console.log('tracking started?', hasStarted);
  };
  const startTracking = async() => {
      //Map permissions
      let res = await config();
      //If permissions not granted
      if(res == false){
        setShowError(true);
        return;
      }
      setShowError(false);
      await startLocationTracking();
      return;
  }

  useEffect(()=>{

    DeviceEventEmitter.addListener("event.viewOnMap", (location)=>{viewOnMap(location)})

    if(isFirstRun.current){
      startTracking();
      isFirstRun.current == false;
    }

    return () => {

      DeviceEventEmitter.removeListener("event.test");

      //Save place to map reducer
      saveLocation(location);
      console.log('location saved!');
      
      //Stop tracking
      Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
      console.log('tracking stopped!');
    };

  },[]);
    
  if(showError)
    return (<Error />)

  if(location == null)
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
        ref={mapRef}
        customMapStyle={mapStyle}
        onPress={()=>{
          if(!showDirection){
            setSelectedPlace(null)
          }
        }}
        >

          <Marker.Animated
            coordinate={{ latitude:location.coords.latitude,longitude:location.coords.longitude}}
            ref={marker}
            flat
            tracksViewChanges={false}
            style={{ transform: [{rotate: rotation === undefined ? '0deg' : `${rotation}deg`}]}}
          >
            <Image source={require('../assets/arrow.png')} style={{height:28,width:28}} />
          </Marker.Animated>
          
          <Markers
           places={places}
           navigation={navigation}
           setSelectedPlace={setSelectedPlace}
           selectedPlace={selectedPlace} 
           showDirection={showDirection} 
           />

        {showDirection && 
        <MapViewDirections
          origin={{latitude:location.coords.latitude,longitude:location.coords.longitude}}
          destination={{ latitude:selectedPlace.geometry.location.lat,longitude:selectedPlace.geometry.location.lng}}
          apikey="AIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U"
          strokeWidth={3}
          strokeColor="green"
          onReady={result => {
            setDistance(result.distance);
          }}
        />}

      </MapView>
      {selectedPlace && <View style={{...styles.bottomBar,}}>
        <View style={{flex:2}}>
          <Text style={styles.bottomBarText}>{selectedPlace.name}</Text>
          <Text>Distance: {distance}Km</Text>
        </View>
        <TouchableOpacity
        style={styles.btn}
        onPress={() => onDirection()}
        >
        <Text style={styles.btn_txt}> {showDirection ? 'Cancel' : 'Directions'}</Text>

        </TouchableOpacity>
      </View>}
      <View style={styles.tabs}>
          <Tab onPress={navigateToList}>
            <BookOpen stroke="#FFF" strokeWidth={2} width={24} height={24}/>
          </Tab>
          <Tab onPress={centerView}>
            <Compass stroke="#FFF" strokeWidth={2} width={24} height={24}/>
          </Tab>
      </View>
    </View>
  ); 
}

const Tab = ({children,onPress}) => {
  return(
      <TouchableOpacity style={styles.tab_view}
       onPress={onPress}
      >
          {children}
      </TouchableOpacity>
      )
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
          onPress={()=>{navigation.navigate('Place',{place: selectedPlace})}}
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
          onPress={()=>{navigation.navigate('Place',{place: place})}}
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
    flex:1,
    width:'100%',
    height:'100%',
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
  tab_view: {
    backgroundColor:'#04AD8F',
    padding:7,
    marginTop:10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  tabs: {
    position:'absolute',
    top:0,
    right:0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.5,

    elevation: 4,
  }
});

const mapStateToProps = state => {

    return{
        places : state.Map.placeList,
        savedLocation : state.Map.savedLocation
    }
}

const mapDispatchToProps = dispatch => {

    return{
        getPlaces: (location) => dispatch(GetPlacesAction(location)),
        saveLocation: (location) => dispatch(SaveLocation(location)),
    }
}

export default  connect (mapStateToProps,mapDispatchToProps) (MapPage)
