import React,{useState, useEffect, useRef} from 'react';
import { StyleSheet, FlatList, Image, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';

import { Search, Filter } from "react-native-feather";

import { connect } from 'react-redux';

//Components
import PriceRate from '../components/PriceRate';
import StarRate from "../components/StarRate";
import FiltersModal from '../components/modals/FiltersModal';

//Service
import GetSearch from "../services/searchService";
import {GetPhoto} from "../services/mapService";

const Item = ({item, navigation}) => {
    
    const [url,setUrl] = useState(require('../assets/default-image.jpg'));

    useEffect(() => {

      let isMounted = true;

      /*
      if(item.photos){
        GetPhoto(item.photos[0].photo_reference,400).then(res =>{
          if(isMounted)
            setUrl({uri:res});
        });
      }
      */
      return () => { isMounted = false };
    })

   return( 
    <TouchableOpacity
      onPress={()=>{navigation.navigate('Place',{place:item})}}
    >
        <View style={styles.row}>

          {/* image */}
          <Image
          style={styles.image} 
          source={url}
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
  )
};

function PlaceList({ navigation, places }) {

  const [showFiltersModal,setShowFiltersModal] = useState(false);

  const [search,setSearch] = useState('');
  const [list,setList] = useState(places);

  const temp_list = useRef(places);

  const onFilter = (filters) => {

    temp_list.current = places;

    //item.open
    if(filters.open === "open"){
      temp_list.current = temp_list.current.filter(item => {
        if(item.opening_hours && item.opening_hours.open_now)
          return item
        });
      console.log("showing open places")

    }else if (filters.open === "closed"){
      temp_list.current = temp_list.current.filter(item => {
        if(item.opening_hours && !item.opening_hours.open_now)
          return item
        });
      console.log("showing closed places")
    }
    
    //item.price_level
    if(filters.price !== "all"){
      temp_list.current = temp_list.current.filter(item => item.price_level === filters.price);
    }
    //item.ratingFrom
    if(filters.ratingFrom != 'none'){
      temp_list.current = temp_list.current.filter(item => item.rating >= filters.ratingFrom);
    }
    //item.ratingTo
    if(filters.ratingTo != 'none'){
      temp_list.current = temp_list.current.filter(item => item.rating <= filters.ratingTo);
    }

    onSearch();
    return;

  }

  const onSearch = () => {

    if(search != ''){
      setList(temp_list.current.filter(place => place.name.toLowerCase().includes(search.toLowerCase())))
    }else if(search == " " || search == ""){
      setList(temp_list.current);
    }
  }

  const renderItem = ({ item }) => (<Item item={item} navigation={navigation}/>);

  return (
    <>
    <FiltersModal
     show={showFiltersModal}
     disable={()=>{setShowFiltersModal(false);}}
     onFilter={(filters)=>onFilter(filters)}
    />

    <View style={styles.container}>

      {/* search bar */}
      <View style={styles.searchBar}>

        {/* search icon click */}
        <TouchableOpacity 
        onPress={onSearch}
        >
          <Search stroke="white" style={{marginRight:10}} strokeWidth={2.5} width={24} height={24}/>
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
        <TouchableOpacity style={styles.filter_view}
          onPress={()=>setShowFiltersModal(true)}
        >
          <Filter stroke="#00BEB3" strokeWidth={2} width={20} height={20}/>
        </TouchableOpacity>
      </View>

      {/* listview */}
      <FlatList
      style={styles.listView}
      data={list}
      renderItem={renderItem}
      keyExtractor={(item,index) => index.toString()}
      maxToRenderPerBatch={8} 
      />

    </View>
    </>
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
    paddingLeft:15,
    paddingRight:15,
  },
  text_in: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
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
  filter_view:{
    backgroundColor:'#FFF',
    padding:5,
    marginLeft:10,
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.5,

    elevation: 4,
  }
})

const mapStateToProps = state => {

    return{
        places : state.Map.placeList,
    }
}

export default  connect (mapStateToProps) (PlaceList)