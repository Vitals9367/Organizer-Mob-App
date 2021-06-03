import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, addons } from 'react-native';
import { PlusCircle } from "react-native-feather";
import ShowAddPanel from '../components/ShowAddPanel';
import {GetEvents} from "../services/eventService";

export default function EventPage() {

  const [showPanel,setShowPanel] = useState(false);
  const [events,setEvents] = useState([]);
    
  useEffect(() => {

    GetEvents().then((events)=>{
      setEvents(events);
    })

  },[])

  return (
    <View style={styles.container}>
        
        {/* Add Event panel */}
        {showPanel && <ShowAddPanel disable={()=>setShowPanel(false)} />}

      {/* Page top */}
      <View style={styles.header}>
        <Text style={styles.headerText} >Events</Text>
      </View>

      {/* Page body */}
        <View style={styles.body}>

          {/* Add panel interaction */}
            <TouchableOpacity
            onPress={()=>setShowPanel(true)}
            >
                <View style={styles.body}>
                    <Text style={styles.bodyText} >Add Event</Text>
                    <PlusCircle stroke="#E6E6E6" strokeWidth={2.5} width={40} height={40}/>
                </View>
                
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height:'100%',
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  body: {
    padding: 10,
    display: 'flex',
    height:'100%',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'#00BEB3',
    padding:10,
    paddingLeft:20,
},
  headerText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:24,
},
  bodyText:{
    color:'#E6E6E6',
    fontWeight:'bold',
    fontSize:22,
}
});
