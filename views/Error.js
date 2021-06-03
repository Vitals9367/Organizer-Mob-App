import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { XOctagon } from "react-native-feather";

export default function Error() {
  return (
    <View style={styles.container}>
      <XOctagon style={{width:38,height:38, color:'white'}} />
      <Text style={styles.txt}>Error</Text>
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
