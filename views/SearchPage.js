import React,{useState} from 'react';
import { StyleSheet, Image, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';
import { Search } from "react-native-feather";
import GetSearch from "../services/SearchService";


export default function SearchPage({ navigation }) {

  const [search,setSearch] = useState('');
  const [list,setList] = useState([]);

  const onSearch = () => {

    if(search != ''){

      GetSearch(search).then((resp) =>{
        if(resp != null){
          setList(resp)
        }
      } )
    }
  }

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
        onChangeText={text => setSearch(text)}
        value={search}
        placeholder="Search..."
        onSubmitEditing={onSearch}
        />
      </View>

      {/* listview */}

      <View style={styles.listView}>
        {list.map((item, id) => (

          /* search list item */

          <TouchableOpacity
          onPress={()=> navigation.navigate("UserProfile",{user: item})}
          key={id}
          >
          <View style={styles.row}>

            {/* image */}
            <Image
            style={{width:52,height:52,borderRadius:100, marginRight:20}} 
            source={ require('../assets/person.png')}
            />

            {/* name */}
            <Text style={styles.rowTxt}>{item.username}</Text>

          </View>
          </TouchableOpacity> 
        ))}
      </View>
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
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor:'white',
  },
  rowTxt:{
    fontSize:24,
  }
})
