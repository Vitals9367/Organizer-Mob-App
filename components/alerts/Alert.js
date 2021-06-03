import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
function Alert({visible, toggleAlert, text }) {

  return (
    <FancyAlert
        visible={visible}
        icon={<View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 50,
          width: '100%',
        }}><Text style={{color:'white', fontSize:28}}>X</Text></View>}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginTop: -16, marginBottom: 32 }}>{text}</Text>

        {/* Close button */}
        <TouchableOpacity
        style={styles.btn}
        onPress={toggleAlert}
        >
        <Text style={styles.btn_txt}>Close</Text>

        </TouchableOpacity>
    </FancyAlert>
  );
}

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    marginTop: 20,
    marginBottom:10,
    padding: 6,
    paddingLeft: 17,
    paddingRight: 17,
    borderRadius: 25,
    backgroundColor: '#04AD8F',
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
    fontSize:22,
    fontWeight:'bold',
  }

});

export default Alert

