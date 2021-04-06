import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';
import { PlusCircle } from "react-native-feather";

export default function Messages() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} >Messages</Text>
      </View>
        <View style={styles.body}>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height:'100%',
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  body: {
    padding: 10,
    display: 'flex',
    height:'100%',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'#00BEB3',
    padding:10,
    paddingLeft:20,
},
  headerText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:24,
},
  bodyText:{
    color:'#E6E6E6',
    fontWeight:'bold',
    fontSize:22,
}
});
