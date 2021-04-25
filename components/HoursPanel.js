import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableOpacity, addons } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {CreateEvent} from '../services/EventService';

export default function HoursPanel(props) {

  return (
    <View style={styles.container}>

      {/* Disable touchable */}
        <TouchableWithoutFeedback
        onPress={props.disable}
        >
            <View style={styles.clickBox}>
        </View>
        </TouchableWithoutFeedback>

      {/* Panel body */}
      <View style={styles.body}>
        <Text>{props.hours.join(',\n')}</Text>
        <TouchableOpacity
        style={styles.btn}
        onPress={props.disable}
        >
        <Text style={styles.btn_txt}>Close</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex:99,
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    position:'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    top:0,
    left:0,
  },
  clickBox:{
    position:'absolute',
    top:0,
    left:0,
    height:'100%',
    width:'100%',
    zIndex:95,
  },
  body:{
    paddingTop: 20,
    paddingLeft: 28,
    paddingRight: 28,
    paddingBottom: 20,
    backgroundColor:'white',
    borderRadius: 15,
    width:'80%',
    zIndex:100,
  },
  btn: {
    alignSelf:'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 40,
    marginTop: 40,
    marginBottom:10,
    padding: 6,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 25,
    backgroundColor: '#00BEB3',
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
});
