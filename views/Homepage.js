import React,{useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';
import CustomModal from '../components/modals/CustomModal';
import {LoginSuccesfull} from '../components/modals/Data';

export default function Homepage({ navigation }) {

  const [showModal,setShowModal] = useState(true);

  return (
    <View style={styles.container}>

      <CustomModal data={LoginSuccesfull} show={showModal} disable={()=>setShowModal(false)}/>

      {/* homepage quote */}
      <View style={styles.textBox}>
        <Text style={styles.txt}>A goal without a plan is just a wish ― Antoine de Saint-Exupéry</Text>
      </View>

      {/* Selections */}
      <View style={styles.selectBox}>

        {/* Selection row */}
        <View style={styles.selectBoxRow}>

          {/* Navigation to events */}
          <TouchableOpacity
          onPress={()=> navigation.navigate("Events")}
          style={{...styles.box,marginRight:10}}>

          </TouchableOpacity>

          {/* Navigation to ... */}
          <TouchableOpacity style={{...styles.box,marginLeft:10}}>
            
          </TouchableOpacity>
        </View>

        {/* Selection row */}
        <View style={styles.selectBoxRow}>

          {/* Navigation to ... */}
          <TouchableOpacity style={{...styles.box,marginRight:10}}>
            
          </TouchableOpacity>

          {/* Navigation to ... */}
          <TouchableOpacity style={{...styles.box,marginLeft:10}}>
            
          </TouchableOpacity>
        </View>
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
  box:{
    borderRadius: 15,
    flex: 1,
    backgroundColor:'#00BEB3',
    margin: 20,
    marginTop:0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textBox:{
    padding:20,
    flex:1,
  },
  txt:{
    fontSize: 22,
    fontWeight:'bold',
  },
  selectBoxRow:{
    flex:1,
    flexDirection: 'row',
  },
  selectBox:{
    marginTop:20,
    flex:8,
    flexDirection: 'column',
  }
});
