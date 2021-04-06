import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, addons, Image } from 'react-native';
import { connect } from 'react-redux';
import { LogOut } from "react-native-feather";
import { LogoutAction } from '../redux/actions/AuthActions';

function Profile({ currentUser,logOutUser,navigation }) {

  const onLogOut = ()  => {
    logOutUser()
  }

  return (
    <View style={styles.container}>
      {/* Logout button */}
          <TouchableOpacity
            style={styles.exit}
            onPress={()=> onLogOut()}
            >
              <LogOut stroke="white" strokeWidth={2.5} width={26} height={26}/>
          </TouchableOpacity>

          {/* Profile panel */}
        <View style={styles.panel}>

          {/* Profile icon */}
            <View style={styles.icon}>
                <Image
                style={{width:iconSize,height:iconSize,borderRadius:iconSize}} 
                source={ require('../assets/person.png')}
                />
            </View>

            {/* Profile username */}
            <View style={styles.info}>
                <Text style={styles.txt}>@{currentUser.username}</Text>
            </View>

            {/* Profile info */}
            <View style={styles.row}>

              {/* Email interactions */}
                <View style={styles.column}>
                    <Text style={{fontSize:16}} >Email: {currentUser.email}</Text>
                </View>
                <View style={styles.column}>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btn_txt}>Change email</Text>
                  </TouchableOpacity>
                </View>
            </View>

            {/* Friends interactions */}
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={{fontSize:16}} >Friends:0</Text>
                </View>
                <View style={styles.column}>
                  <TouchableOpacity style={styles.btn}
                  onPress={()=> navigation.navigate("Friends")}
                  >
                    <Text style={styles.btn_txt}>Friends List</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => {

    return{
        logOutUser: () => dispatch(LogoutAction()),
    }
}

const mapStateToProps = state => {

    return{
        currentUser : state.Auth.currentUser,
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Profile)

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
  row:{
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
  exit:{
    position:'absolute',
    top:10,
    right:10,
  },
    btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
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
    fontSize:16,
    fontWeight:'bold',
  },
})
