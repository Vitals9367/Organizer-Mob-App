import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, addons, Image } from 'react-native';

export default function UserProfile({ route }) {

  const user = route.params.user;

  const addFriend = ()  => {
    
  }

  return (
    <View style={styles.container}>

      {/* Profile panel */}
        <View style={styles.panel}>

          {/* Profile icon */}
            <View style={styles.icon}>
                <Image
                style={{width:iconSize,height:iconSize,borderRadius:iconSize}} 
                source={ require('../assets/person.png')}
                />
            </View>

            {/* Profile info */}
            <View style={styles.info}>
                <Text style={styles.txt}>@{user.username}</Text>
            </View>
            <View style={styles.infoBelow}>
                <View style={styles.column}>

                  {/* Add friend button */}
                    <TouchableOpacity
                    style={styles.btn}
                    onPress={()=> addFriend()}
                    >
                    <Text style={styles.btn_txt}>Add Friend</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
}
const iconSize = 150;

const styles = StyleSheet.create({
  container: {
    height:'100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#00BEB3',
  },
  panel:{
    display: 'flex',
    alignItems:'center',
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    marginTop:200,
  },
  icon:{
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      position:'absolute',
      top:-75,
      backgroundColor:'#D3D3D3',
      width:iconSize,
      height:iconSize,
      borderRadius:100,
  },
  info:{
    marginTop:iconSize / 2 + 10,
  },
  txt:{
    fontSize:18,
  },
  infoBelow:{
      marginTop:20,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
  },
  column:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      fontSize:16,
  },
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
    fontSize:22,
    fontWeight:'bold',
  },
})
