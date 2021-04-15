import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions  } from 'react-native';
import { Search, Bell, User, Mail } from "react-native-feather";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function Header({ currentUser }) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      {/* Current user */}
      <View style={styles.txtBox}>
        <TouchableOpacity
        onPress={()=> navigation.navigate("Home")}
        >
          <Text style={styles.txt}>Hello, {currentUser.username}</Text>
        </TouchableOpacity>
      </View>

      {/* Icons */}
      <View style={styles.icons}>

        {/* Search icon */}
        <TouchableOpacity
        style={styles.icon}
        onPress={()=> navigation.navigate("Map")}
        >
          <Search stroke="#00BEB3" strokeWidth={2.5} width={24} height={24}/>
        </TouchableOpacity>

        {/* Messages icon*/}
        <TouchableOpacity
        style={styles.icon}
        onPress={()=> navigation.navigate("Messages")}
        >
        <Mail stroke="#00BEB3" strokeWidth={2.5} width={24} height={24}/>
        </TouchableOpacity>

        {/* Notifications icon */}
        <TouchableOpacity
        style={styles.icon}
        onPress={()=> navigation.navigate("Notifications")}
        >
          <Bell stroke="#00BEB3" strokeWidth={2.5} width={24} height={24}/>
        </TouchableOpacity>

        {/* Profile icon */}
        <TouchableOpacity
        style={styles.icon}
        onPress={()=> navigation.navigate("Profile")}
        >
        <User stroke="#00BEB3" strokeWidth={2.5} width={24} height={24}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = state => {

    return{
        currentUser : state.Auth.currentUser,
    }
}

export default connect(mapStateToProps) (Header)


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    zIndex:98,
  },
  icon:{
    marginLeft:25,
  },
  icons:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  txtBox:{
    flex:1,
  },
  txt:{
    color:'#00BEB3',
    fontSize:23,
  }
});
