import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Dimensions  } from 'react-native';
import { Search, Bell, User, Menu } from "react-native-feather";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function SearchHeader({ currentUser }) {

  const [search, setSearch] = useState('');

  const navigation = useNavigation();

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
        {/* Profile icon */}
        <View style={styles.hamb}>
          <TouchableOpacity
          onPress={()=> navigation.navigate("Profile")}
          >
          <Menu stroke="#00BEB3" strokeWidth={2.5} width={24} height={24}/>
          </TouchableOpacity>
        </View>

    </View>
  );
}

export default SearchHeader;

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
  }
});
