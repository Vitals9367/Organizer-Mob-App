import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal  } from 'react-native';
import RegisteredImage from '../../src/icons/RegisteredImage';

function CustomModal({data, show, disable}) {

  return (
    <Modal visible={show} transparent={true} animationType={'fade'}>
      <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={data.fail ? styles.headerFail : styles.headerSuccess}>{data.top}</Text>
        {data.image}
        <Text>{data.text}</Text>
        <TouchableOpacity style={styles.btn}
        onPress={disable}
        >
          <Text style={styles.btn_txt}>Ok</Text>
        </TouchableOpacity>
      </View>
      </View>
    </Modal>
  );
}

export default CustomModal



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  panel:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'white',
    padding:20,
    borderRadius:10,
  },
  headerSuccess:{
    fontWeight:'bold',
    fontSize:22,
    color:'#00BEB3',
  },
  headerFail:{
    fontWeight:'bold',
    fontSize:22,
    color:'#f50000',
  },   
    btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    marginTop: 10,
    marginBottom:10,
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
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
  },
});
