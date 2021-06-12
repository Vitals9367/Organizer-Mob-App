//--IMPORTS--
//React
import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, DeviceEventEmitter  } from 'react-native';
import Geojson from 'react-native-geojson';

//Maps
import MapView from "react-native-map-clustering";
import { Callout, Marker, AnimatedRegion } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import MapCallout from '../components/MapCallout';
import {mapStyle} from '../utils/style';
import {geoBorder} from '../utils/borderGeoJson';
import * as geolib from 'geolib';
//Expo
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

//Icons
import { BookOpen, Compass, Navigation2 } from "react-native-feather";

//Views
import Loading from './Loading';
import Error from './Error';

//Redux
import { SaveLocation } from '../redux/actions/mapActions';
import { connect } from 'react-redux';
//Services
import {GetNearby, GetPlacesNextPage} from '../services/mapService';

//--CONSTANTS--
const LOCATION_TRACKING = 'location-tracking';
const EDGE_PADDING = {
  top: 100,
  right: 100,
  bottom: 100,
  left: 100,
}

function MapPage({navigation, saveLocation, savedLocation }) {
  
  const [location, setLocation] = useState(savedLocation);
  const [rotation, setRotation] = useState(0);
  const [followUser,setFollowkUser] = useState(false);
  const lastLocationFecthedFrom = useRef(location);
  
  const [initialRender, setInitialRender] = useState(true);
  const isFirstRun = useRef(true); 

  const [showError, setShowError] = useState(false);

  const [places,setPlaces] = useState([]);
  const [selectedPlace,setSelectedPlace] = useState(null);

  //const [isSelected,setIsSelected] = useState(false);
  const [showDirection,setShowDirection] = useState(false);
  const [distance, setDistance] = useState(null);
  const [mode, setMode] = useState("DRIVING");

  const marker = useRef();
  const mapRef = useRef();

  const mergeArrays = (arr1) => {

    if(places.length <= 0){
      return arr1;
    }

    let combinedArr = places;

    arr1.forEach(value => {
      if(!places.includes(value)) {
        combinedArr.push(value);
      }
    });
    return combinedArr;
  }
  const fetchNextPage = async (token) => {
    try{
      let res = await GetPlacesNextPage(token);
      return res;
    }catch (err){
      console.log('Failed to fetch next page locations!')
    }
  }
  const fetchPlaces = async (location) => {
    try{

      let array = [];

      let resData = await GetNearby(location,20000);
      array = array.concat(resData.results);

      lastLocationFecthedFrom.current = location;
      
      setPlaces(array);

      let nextPageToken = resData.next_page_token;

      while(nextPageToken != null || nextPageToken != undefined){
        let res = await fetchNextPage(nextPageToken);
        array = array.concat(res.results);

        console.log(' -- Next page fetched');
        setPlaces(array);

        nextPageToken = res.next_page_token;
        if(nextPageToken === null)
          break;
      }

      console.log('Places fetched');

    }catch (err){
      console.log('Failed to fetch locations!')
    }
  }
  const onFollowUser = () => {
    setFollowkUser(!followUser);
    if(!followUser){
      viewOnMap(location,0.005,1000);
    }
  }
  const viewOnMap = (location,delta,duration) => {

    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: delta,
      longitudeDelta: delta,
    };

    mapRef.current.animateToRegion(region,duration);
  }
  const navigateToList = () => {
    navigation.navigate("PlaceList",{location: location})
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
  const onRegionChangeComplete = (region) => {

    if(showDirection){
      return;
    }

    if(lastLocationFecthedFrom.current == null || lastLocationFecthedFrom.current == undefined){
      return;
    }

    if (geolib.isPointInPolygon(region, geoBorder)){
      return console.log('Outside border!')
    }

    if(Math.abs(region.longitude - lastLocationFecthedFrom.current.coords.longitude) >= 0.1 &&
     Math.abs(region.latitude - lastLocationFecthedFrom.current.coords.latitude) >= 0.){
      
      const loc = {
        coords:{
          longitude:region.longitude,
          latitude:region.latitude,
        }
      }
      fetchPlaces(loc);
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
        await fetchPlaces(locations[0]);
        return;
      }
      //Update location
      if(location.coords.latitude !== locations[0].coords.latitude && location.coords.longitude !== locations[0].coords.longitude){
        setLocation(locations[0]);
        console.log('location updated');

        if(followUser){
          viewOnMap(locations[0],0.005,300)
        }

      }
      //Update rotation
      if(rotation !== locations[0].coords.heading){
        setRotation(locations[0].coords.heading);
        console.log('rotation updated');
      }

      return;
    }
  });
  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 3,
    });
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING
    );
    console.log('tracking started?', hasStarted);
  };
  const initializeTracking = async() => {
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

    DeviceEventEmitter.addListener("event.viewOnMap", (location)=>{viewOnMap(location,0.05,1000)})

    if(isFirstRun.current){
      initializeTracking();
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

      <MapView
        onRegionChangeComplete={(region)=>onRegionChangeComplete(region)}
        style={styles.map}
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
         <Geojson 
            geojson={geoBorder} 
            strokeColor="red"
            strokeWidth={2}
            zIndex={90}
          />
          {location && <Marker.Animated
            coordinate={{ latitude:location.coords.latitude,longitude:location.coords.longitude}}
            ref={marker}
            flat
            cluster={false}
            tracksViewChanges={false}
            style={{ zIndex:99,transform: [{rotate: rotation === undefined ? '0deg' : `${rotation}deg`}]}}
          >
            <Image
              onLayout={() => setInitialRender(false)}
              key={`${initialRender}`}
              source={require('../assets/arrow.png')}
              style={{height:28,width:28}} />
          </Marker.Animated>}

          {showDirection

            ? (<Marker
                coordinate={{ latitude:selectedPlace.geometry.location.lat,longitude:selectedPlace.geometry.location.lng}}
                tracksViewChanges={false}
                style={{zIndex:98}}
              >
                <Image source={require('../assets/fs1.png')} style={{height:28,width:28}} />
                <Callout
                  onPress={()=>{navigation.navigate('Place',{place: selectedPlace})}}
                >
                  <MapCallout place={selectedPlace}/>
                </Callout>
              </Marker>)

            : places && (places.map((place,index)=>{
              return (
              <Marker
              style={{zIndex:98}}
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

        {showDirection && 
        <MapViewDirections
          origin={{latitude:location.coords.latitude,longitude:location.coords.longitude}}
          destination={{ latitude:selectedPlace.geometry.location.lat,longitude:selectedPlace.geometry.location.lng}}
          apikey="your key"
          strokeWidth={3}
          strokeColor="green"
          mode={mode}
          onReady={result => {
            setDistance(result.distance);
          }}
        />}

      </MapView>
      {selectedPlace && <View style={{...styles.bottomBar,}}>
        <View style={{flex:2}}>
          <Text style={styles.bottomBarText}>{selectedPlace.name}</Text>
          {showDirection && <Text>Distance: {distance}Km</Text>}
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
          <Tab onPress={()=> viewOnMap(location,0.005,1000)}>
            <Compass stroke="#FFF" strokeWidth={2} width={24} height={24}/>
          </Tab>
          <Tab onPress={()=> onFollowUser()} highlight={followUser}>
            <Navigation2 stroke="#FFF" strokeWidth={2} width={24} height={24}/>
          </Tab>
          {showDirection && 
          <View>
            <Tab onPress={()=> setMode("DRIVING")} highlight={mode==="DRIVING"}>
              <Text>Driving</Text>
            </Tab>
            <Tab onPress={()=> setMode("WALKING")} highlight={mode==="WALKING"}>
              <Text>Walking</Text>
            </Tab>
          </View>}
      </View>
    </View>
  ); 
}

const Tab = ({children,onPress,highlight = false}) => {
  return(
      <TouchableOpacity style={highlight ? styles.tab_view_on : styles.tab_view}
       onPress={onPress}
      >
          {children}
      </TouchableOpacity>
      )
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
  tab_view_on: {
    backgroundColor:'red',
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
        savedLocation : state.Map.savedLocation,
    }
}

const mapDispatchToProps = dispatch => {

    return{
        saveLocation: (location) => dispatch(SaveLocation(location)),
    }
}

export default  connect (mapStateToProps,mapDispatchToProps) (MapPage)
