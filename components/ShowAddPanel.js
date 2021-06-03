import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableWithoutFeedback,TouchableOpacity, addons } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {CreateEvent} from '../services/eventService';

export default function ShowAddPanel(props) {

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onCreate = () => {
    let data = {
      title: title,
      date: date,
    }

    CreateEvent(data).then((res) => {
      
    }).catch((err)=>{

    });

  }

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

          <Text style={styles.header}>Add Event</Text>

        {/* Title */}
        <View style={styles.line}>

          {/* Title text */}
          <Text style={styles.options}>Title</Text>

          {/* Title input */}
          <TextInput 
          style={styles.text_in}
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="Title"></TextInput>
        </View>
        
        {/* Date */}
        <View style={styles.line}>

          {/* Date text */}
          <Text style={styles.options}>Date</Text>

          {/* Date input */}
          <TouchableOpacity
          onPress={()=> onCreate(setShow(true))}
          >
            <Text style={styles.options}>{Moment(date).format('MMMM Do YYYY')}</Text>

            {/* Date picker*/}
          </TouchableOpacity>
          {show && 
          <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="calendar"
          is24Hour={true}
          onChange={(event,date) => {
            if(date){
              setDate(date);
            }
            setShow(false);
          }}
        />
          }
        </View>

        {/* Create button */}
        <TouchableOpacity
        style={styles.btn}
        onPress={()=> onCreate()}
        >
        <Text style={styles.btn_txt}>Create</Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:'100%',
    marginTop:5,
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
  picker:{
    color:'black',
    width:'60%',
    height:50,
    borderBottomWidth: 2,
  },
  text_in:{
    color:'black',
    fontSize:18,
    borderBottomWidth: 2,
    width:'60%',
  },
  options:{
    color:'black',
    fontWeight:'bold',
    fontSize:18,
    marginBottom: 10,
  },
  header:{
    color:'black',
    fontWeight:'bold',
    fontSize:28,
    marginBottom:38,
  },
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
});
