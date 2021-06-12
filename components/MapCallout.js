import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { DollarSign } from "react-native-feather";
import StarRate from "./StarRate";
import PriceRate from "./PriceRate";
const MapCallout = ({place}) => {
  return (
    <View style={styles.box}>
        {place.name && <Text style={styles.title}>{place.name}</Text>}
        <Text >{place.vicinity}</Text>
        {place.rating && <StarRate rating={place.rating} size={16} margin={5} />}
        {place.price_level && <PriceRate style={{marginBottom:5}} rating={place.price_level} size={16} />}
        {place.opening_hours
          ? (place.opening_hours.open_now ? <Text style={{marginBottom:5,color:'green'}}>OPEN</Text> : <Text style={{marginBottom:5,color:'red'}}>CLOSED</Text>)
          : (<Text style={{marginBottom:5,color:'#bdbdbd'}}>open?</Text>)
        }
    </View>
  );
};

const styles = StyleSheet.create({
  box:{
    width:200,
    height:'100%',
  },  
  title: {
    fontWeight:'bold',
    fontSize:14,
  }
});


export default MapCallout;

