import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Dimensions  } from 'react-native';
import { Search, Bell, User, Menu } from "react-native-feather";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function SearchHeader({ currentUser }) {

  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        {/* Searchbar */}
        <View style={styles.searchBar}>

        {/* Search icon */}
        <TouchableOpacity
        style={{marginRight:10}}
        onPress={()=> navigation.navigate("Search")}
        >
          <Search stroke="#00BEB3" strokeWidth={2.5} width={24} height={24}/>
        </TouchableOpacity>

          {/* Search input */}
          <TextInput
          style={styles.search}
          onChangeText={text => setSearch(text)}
          value={search}
          placeholderTextColor='#B9B9B9'
          placeholder="Search..."
          />
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
    zIndex:98,
  },
  search:{
    borderWidth:2.5,
    borderRadius:30,
    borderColor:"#00BEB3",
    width:'100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBar: {
    flex:2,
    width:'100%',
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  hamb:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'flex-end',
  }
});
