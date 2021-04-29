import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TextInput, TouchableWithoutFeedback, Text, View,ScrollView , TouchableOpacity, addons, Linking } from 'react-native';
import {GetPhoto,GetPlaceDetails} from "../services/MapService";
import StarRate from "../components/StarRate";
import PriceRate from "../components/PriceRate";
import Loading from './Loading';
import { Map } from "react-native-feather";

export default function PlaceView({route}) {

    let place = route.params.place;
    const [imageUrl,setImageUrl] = useState(null);
    const [detailInfo,setDetailInfo] = useState(null);

    useEffect(()=>{

      let isMounted = true;
      
      if(place.photos){
      GetPhoto(place.photos[0].photo_reference,400).then(res =>{
        if(isMounted)
          setImageUrl(res);
      });
      }else{
        setImageUrl('none');
      };

      GetPlaceDetails(place.place_id).then(res =>{
        setDetailInfo(res);
      })
      return () => { isMounted = false };

    },[])
    
    const openWebsite = (url) => {
      Linking.openURL(url);
    }
    const openPhone = (phone) => {
      Linking.openURL(`tel:${phone}`);
    }

  return (
    <View>

      <ScrollView style={styles.container}>

          <View>
          {imageUrl ? <Image style={{...styles.image,width: '100%', height: 200}} source={{uri: imageUrl}}/> : <View style={styles.imageLoad}><Loading/></View>}
          </View>
        <View style={{padding: 20, paddingTop: 5}}>
          {Header(place)}

          {Ratings(place)}

          {detailInfo
          ? 
          <>
          <View style={styles.flexRow}>

            {detailInfo.website
            && <TouchableOpacity
            onPress={() => openWebsite(detailInfo.website)}
            >
              <Text style={{color:'#00BEB3',fontSize:16, marginBottom:5}}>Click to go to website</Text>
            </TouchableOpacity>}

            {detailInfo.formatted_phone_number
            && <TouchableOpacity
            onPress={() => openPhone(detailInfo.formatted_phone_number)}
            >
            <Text style={{fontSize:16, marginBottom:5}}>{detailInfo.formatted_phone_number}</Text>
            </TouchableOpacity>}

          </View>
          {detailInfo.opening_hours && <Text>{detailInfo.opening_hours.weekday_text.join(',\n')}</Text>}
          </>
          : <Text>Loading Info...</Text>}

          
        </View>
      </ScrollView>
      
        {Directions()}
    </View>
  );
}
const Ratings = (place) => {

  return(

    place.rating && <View style={styles.ratingBox}>

    <StarRate style={styles.rating} rating={place.rating} size={26} margin={5} />
    <Text>Total Ratings: {place.user_ratings_total}</Text>

  </View>
  )

}

const Header = (place,showHourPanel) => {

  return(
    <>
    <Text style={styles.name}>{place.name}</Text>

    {place.vicinity && <Text>{place.vicinity}</Text>}

    <View style={styles.flexRow}> 
        {place.opening_hours && place.opening_hours.open_now
        ? <Text style={{...styles.open,color:'green'}}>OPEN</Text>
        : <Text style={{...styles.open,color:'red'}}>CLOSED</Text>}
      {place.price_level && <PriceRate  rating={place.price_level} size={22} />}
    </View>
    </>
  )
}

const Directions = () => {
  return(
  <View style={styles.DirectionsSection}>
    <Map stroke="#fff" strokeWidth={2} width={24} height={24} />
    <Text style={styles.DirectionsText}>View On Map</Text>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'column',
    backgroundColor: '#fff',
    height:'92%',
  },
  flexRow:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  name:{
    fontSize:24,
    fontWeight:'bold',
  },
  open:{
    fontSize:18,
    fontWeight:'bold',
  },
  image:{
    marginTop:5,
  },
  imageLoad:{
    backgroundColor:'grey',
    display:'flex',
    justifyContent:'center',
    width: '100%',
    height: 200,
  },
  DirectionsSection:{
    padding: 20,
    paddingTop: 10,
    backgroundColor:'#00BEB3',
    height:'8%',
    width:'100%',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  ratingBox:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  DirectionsText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    marginLeft:10,
  },
});
