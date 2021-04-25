import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';
import {GetPhoto} from "../services/MapService";
import StarRate from "../components/StarRate";
import PriceRate from "../components/PriceRate";
import Loading from './Loading';

export default function PlaceView({route}) {

    const place = route.params.place;
    const [imageUrl,setImageUrl] = useState(null);

    useEffect(()=>{
      let isMounted = true;
      GetPhoto(place.photos[0].photo_reference,400).then(res =>{
        if(isMounted)
          setImageUrl(res);
      })
      return () => { isMounted = false };
    },[])

  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.name}>{place.name}</Text>
          {place.vicinity && <Text>{place.vicinity}</Text>}
          {place.opening_hours && place.opening_hours.open_now ? <Text style={{...styles.open,color:'green'}}>OPEN</Text> : <Text style={{...styles.open,color:'red'}}>CLOSED</Text>}
          {imageUrl ? <Image style={{...styles.image,width: 200, height: 200}} source={{uri: imageUrl}}/> : <View style={styles.imageLoad}><Loading/></View>}
          {place.rating && <StarRate style={styles.rating} rating={place.rating} size={32} margin={10} />}
          {place.price_level && <PriceRate rating={place.price_level} size={28} />}
      </View>
      <View style={styles.commentSection}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'column',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 5,
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
    width:200,
    height:200,
  },
  commentSection:{
    backgroundColor:'#00BEB3',
    height:'100%',
    width:'100%',
  }
});
