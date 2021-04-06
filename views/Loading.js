import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Loader } from "react-native-feather";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image
      style={{width:38,height:38}} 
      source={ require('../assets/tenor.gif')}
      />
      <Text style={styles.txt}>Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    color:'white',
    fontSize:32,
    fontWeight:'bold',
  }
});
