import React,{useState} from 'react';
import { StyleSheet, FlatList, Image, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';
import { Search } from "react-native-feather";
import GetSearch from "../services/SearchService";
import { connect } from 'react-redux';
import PriceRate from '../components/PriceRate';
import StarRate from "../components/StarRate";
import {GetPhoto} from "../services/MapService";

function PlaceList({ navigation, places }) {

  const [search,setSearch] = useState('');
  const [list,setList] = useState(places);

  const onSearch = () => {

    if(search != ''){
      setList(places.filter(place => place.name.toLowerCase().includes(search.toLowerCase())))
    }else if(search == " " || search == ""){
      setList(places);
    }
  }

  const getImageUrl = (place) => {

      if(place.photos){
      GetPhoto(place.photos[0].photo_reference,400).then(res =>{
        return res;
      });
      }else{
        return;
      };

  }

  const Item = ({ item, index, separators }) => (

    <TouchableOpacity
      key={index}
      onPress={()=>{navigation.navigate('Place',{place:item})}}
    >
        <View style={styles.row}>

          {/* image */}
          <Image
          style={styles.image} 
          source={getImageUrl(item)}
          />

          <View style={styles.rowInfo}>
            <Text style={styles.name}>{item.name}</Text>
            <Text >{item.vicinity}</Text>
            {item.opening_hours && item.opening_hours.open_now
              ? <Text style={{...styles.open,color:'green'}}>OPEN</Text>
              : <Text style={{...styles.open,color:'red'}}>CLOSED</Text>}
            {item.price_level && <PriceRate  rating={item.price_level} size={22} />}
            <StarRate style={styles.rating} rating={item.rating} size={26} margin={5} />
          </View>
        </View>
    </TouchableOpacity> 
);

  return (
    <View style={styles.container}>

      {/* search bar */}

      <View style={styles.searchBar}>

        {/* search icon click */}

        <TouchableOpacity 
        onPress={onSearch}
        >
          <Search stroke="white" style={{marginRight:10}} strokeWidth={2.5} width={28} height={28}/>
        </TouchableOpacity>

        {/* search field */}

        <TextInput
        style={styles.text_in}
        onChangeText={text =>
        {
          setSearch(text);
          onSearch();
        }}
        value={search}
        placeholder="Search..."
        />
      </View>

      {/* listview */}
        
      <FlatList
      style={styles.listView}
      data={list}
      renderItem={Item}
      keyExtractor={(item) => item.name}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
  },
  searchBar: {
    display: 'flex',
    flexDirection:'row',
    backgroundColor:'#00BEB3',
    alignItems:'center',
    padding: 10,
    paddingLeft:20,
    paddingRight:20,
  },
  text_in: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
  row:{
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
  },
  rowInfo:{
    padding:10,
    display: 'flex',
    flexDirection:'column',
  },
  name:{
    fontSize:20,
  },
  image:{
    width:'30%',
    height:'100%',
  },
    open:{
    fontSize:18,
    fontWeight:'bold',
  },
})

const mapStateToProps = state => {

    return{
        places : state.Map.placeList,
    }
}

export default  connect (mapStateToProps) (PlaceList)