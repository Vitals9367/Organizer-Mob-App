import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity  } from 'react-native';

import { Search, Bell, Home, LogOut, User,Mail, Menu } from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Menu_, { MenuItem, MenuDivider } from 'react-native-material-menu';
import * as Location from 'expo-location';

import { LogoutAction } from '../redux/actions/authActions';

import { connect } from 'react-redux';

const LOCATION_TRACKING = 'location-tracking';

function SearchHeader({ currentUser, logOutUser }) {

  const [search, setSearch] = useState('');
  const menuRef = useRef();

  const hideMenu = () => menuRef.current.hide();
  const showMenu = () => menuRef.current.show();

  const navigation = useNavigation();
      
  const navigate = (view) => {
    hideMenu();
    navigation.navigate(view);
  }
  const onLogout = () => {
    hideMenu();
    logOutUser();
  }

  return (
    <View style={styles.container}>

        {/* Searchbar */}
        <View style={styles.searchBar}>
          {/* Search input */}
          <TextInput
          style={styles.search}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholderTextColor='#B9B9B9'
          placeholder="Search..."
          />
          {/* Search icon */}
        <TouchableOpacity
        style={styles.searchIcon}
        onPress={()=> navigation.navigate("Search")}
        >
          <Search stroke="#fff" strokeWidth={2.5} width={24} height={24}/>
        </TouchableOpacity>

        </View>
        {/* Menu icon */}
        <Menu_ ref={menuRef} button={
          <TouchableOpacity style={styles.hamb} onPress={showMenu}>
            <Menu stroke="#00BEB3" strokeWidth={2.5} width={24} height={24}/>
          </TouchableOpacity>
          }
        >
          <MenuItem onPress={() => navigate("Home")}>
            <View style={styles.menuItem}>
              <Home style={{marginRight:10}} stroke="#00BEB3" strokeWidth={2} width={20} height={20}/>
              <Text>Home</Text>
            </View>
          </MenuItem>
          <MenuItem onPress={() => navigate("Messages")}>
            <View style={styles.menuItem}>
              <Bell style={{marginRight:10}} stroke="#00BEB3" strokeWidth={2} width={20} height={20}/>
              <Text>Messages</Text>
            </View>
          </MenuItem>
          <MenuItem onPress={() => navigate("Notifications")}>
            <View style={styles.menuItem}>
              <Mail style={{marginRight:10}} stroke="#00BEB3" strokeWidth={2} width={20} height={20}/>
              <Text>Notifications</Text>
            </View>
          </MenuItem>
          <MenuItem onPress={() => navigate("Profile")}>
            <View style={styles.menuItem}>
              <User style={{marginRight:10}} stroke="#00BEB3" strokeWidth={2} width={20} height={20}/>
              <Text>Profile</Text>
            </View>
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={()=>onLogout()}>
            <View style={styles.menuItem}>
              <LogOut style={{marginRight:10}} stroke="#00BEB3" strokeWidth={2} width={20} height={20}/>
              <Text>Logout</Text>
            </View>
          </MenuItem>
        </Menu_>
    </View>
  );
}

const mapDispatchToProps = dispatch => {

    return{
        logOutUser: () => dispatch(LogoutAction()),
    }
}

export default connect(null,mapDispatchToProps) (SearchHeader)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  search:{
    zIndex:2,
    borderWidth:2.5,
    borderRadius:30,
    borderColor:"#00BEB3",
    backgroundColor:'#fff',
    width:'100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft:15,
  },
  searchBar: {
    flex:5,
    width:'100%',
    height:'100%',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:5,
  },
  searchIcon:{
    zIndex:1,
    position:'absolute',
    width:'50%',
    padding:5,
    left:-30,
    marginLeft:5,
    backgroundColor:"#00BEB3",
    height:'100%',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:30,
  },  
  hamb:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginLeft:20,
  },
  menuItem:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
  }
});
