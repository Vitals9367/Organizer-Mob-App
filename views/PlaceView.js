import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TextInput, TouchableWithoutFeedback, Text, View, TouchableOpacity, addons, Linking } from 'react-native';
import {GetPhoto,GetPlaceDetails} from "../services/MapService";
import StarRate from "../components/StarRate";
import PriceRate from "../components/PriceRate";
import HoursPanel from "../components/HoursPanel";
import Loading from './Loading';
import { ArrowUp } from "react-native-feather";

export default function PlaceView({route}) {

    let place = route.params.place;
    const [imageUrl,setImageUrl] = useState(null);
    const [detailInfo,setDetailInfo] = useState(null);
    const [showHours,setShowHours] = useState(false);

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

    const showHourPanel = () => {

      if(detailInfo && detailInfo.opening_hours && detailInfo.opening_hours.weekday_text){
        setShowHours(true);
      }else{
        return;
      }

    }

  return (
    <View>

      {showHours && <HoursPanel hours={detailInfo.opening_hours.weekday_text}  disable={()=>setShowHours(false)} />}

      <View style={styles.container}>

          {Header(place,showHourPanel)}

          <View style={{...styles.flexRow,alignItems:'flex-start'}}>
          {imageUrl ? <Image style={{...styles.image,width: 200, height: 200}} source={{uri: imageUrl}}/> : <View style={styles.imageLoad}><Loading/></View>}
          </View>
          
          {Ratings(place)}

          {detailInfo
          ? detailInfo.website &&
          <>
          <TouchableOpacity
          onPress={() => openWebsite(detailInfo.website)}
          >
             <Text style={{color:'#00BEB3',fontSize:16}}>Click to go to website</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => openPhone(detailInfo.formatted_phone_numbe)}
          >
          <Text style={{fontSize:16}}>{detailInfo.formatted_phone_number}</Text>
          </TouchableOpacity>
          </>
          : <Text>Loading Info...</Text>}
      </View>
        {Comments(detailInfo)}
    </View>
  );
}
const Ratings = (place) => {

  return(

    place.rating && <View style={styles.ratingBox}>

    <StarRate style={styles.rating} rating={place.rating} size={26} margin={10} />
    <Text>Total Ratings: {place.user_ratings_total}</Text>

  </View>
  )

}

const Header = (place,showHourPanel) => {

  return(
    <>
    <Text style={styles.name}>{place.name}</Text>

    {place.vicinity && <Text>{place.vicinity}</Text>}

    <View>
      <TouchableOpacity
      onPress={() =>{ showHourPanel() }}
      >
        {place.opening_hours && place.opening_hours.open_now
        ? <Text style={{...styles.open,color:'green'}}>OPEN click for hours</Text>
        : <Text style={{...styles.open,color:'red'}}>CLOSED click for hours</Text>}
      </TouchableOpacity>
      {place.price_level && <PriceRate  rating={place.price_level} size={22} />}
    </View>
    </>
  )
}

const Comments = (detailInfo) => {
  return(
  <View style={styles.commentSection}>
    <ArrowUp stroke="#fff" strokeWidth={2.5} width={24} height={24} />
    {detailInfo
      ? detailInfo.reviews && <Text style={styles.reviewsText}>Reviews: {detailInfo.reviews.length}</Text>
      : <Text style={styles.reviewsText}>Loading Reviews</Text>}
  </View>)
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'column',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 5,
    height:'85%',
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
    borderRadius:5,
  },
  imageLoad:{
    backgroundColor:'grey',
    display:'flex',
    justifyContent:'center',
    width:200,
    height:200,
  },
  commentSection:{
    padding: 20,
    paddingTop: 10,
    backgroundColor:'#00BEB3',
    height:'15%',
    width:'100%',
    display: 'flex',
    alignItems:'center',
  },
  ratingBox:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  reviewsText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
});
