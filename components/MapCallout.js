import React from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { DollarSign } from "react-native-feather";

const MapCallout = ({place}) => {
  return (
    <View style={styles.box}>
        <Text style={styles.title}>{place.name}</Text>
        {place.vicinity && <Text>{place.vicinity}</Text>}
        {place.rating && <Text style={styles.rating}>Rating: {place.rating}</Text>}
        {place.price_level && <Text style={styles.price}>Price Level: {place.price_level}</Text>}
        {place.opening_hours && <Text>{place.opening_hours.open_now ? 'open' : 'closed'}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  box:{
    width:200
  },  
  title: {
    fontWeight:'bold',
    fontSize:14,
  }
});


export default MapCallout;

