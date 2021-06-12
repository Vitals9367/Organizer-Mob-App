import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal  } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const array = [0,1,2,3,4,5]

function FiltersModal({ show, disable,onFilter}) {

    const [openFilter,setOpenFilter] = useState("both");
    const [priceLevel,setPriceLevel] = useState("all");
    const [ratingFrom,setRatingFrom] = useState("none");
    const [ratingTo,setRatingTo] = useState("none");

    const onSave = () => {

        const filters = {
            open: openFilter,
            price: priceLevel,
            ratingFrom:ratingFrom,
            ratingTo:ratingTo,
        }
        onFilter(filters);
        disable();
    }

    const clearFilters = () => {
        setOpenFilter("both");
        setPriceLevel("all");
        setRatingFrom("none");
        setRatingTo("none");
    }

  return (
    <Modal visible={show} transparent={true} animationType={'fade'}>
      <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.title}>Filters</Text>
        <View>
            <View style={styles.row}>
                <View style={styles.row_column}>
                    <Text>Open/Closed</Text>
                    <View style={styles.picker_view}>
                        <Picker
                        style={styles.picker}
                        selectedValue={openFilter}
                        onValueChange={(itemValue, itemIndex) =>
                            setOpenFilter(itemValue)
                        }
                        >
                            <Picker.Item label="Both" value="both" />
                            <Picker.Item label="Open" value="open" />
                            <Picker.Item label="Closed" value="closed" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.row_column}>
                    <Text>Price Level</Text>
                    <View style={styles.picker_view}>
                        <Picker
                        style={styles.picker}
                        selectedValue={priceLevel}
                        onValueChange={(itemValue, itemIndex) =>
                            setPriceLevel(itemValue)
                        }
                        >
                            <Picker.Item label="All" value="all" />
                            <Picker.Item label="0" value={0} />
                            <Picker.Item label="1" value={1} />
                            <Picker.Item label="2" value={2} />
                            <Picker.Item label="3" value={3} />
                            <Picker.Item label="4" value={4} />
                        </Picker>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.row_column}>
                    <Text>Rating From</Text>
                    <View style={styles.picker_view}>
                        <Picker
                        style={styles.picker}
                        selectedValue={ratingFrom}
                        onValueChange={(itemValue, itemIndex) =>
                            setRatingFrom(itemValue)
                        }
                        >
                            <Picker.Item label="---" value="none" />
                            {array.map(id => {
                                
                                if(ratingTo == 'none')
                                    return <Picker.Item key={id} label={id.toString()} value={id} />
                                if(id <= ratingTo)
                                    return <Picker.Item key={id} label={id.toString()} value={id} />
                                else
                                    return;
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={styles.row_column}>
                    <Text>Rating To</Text>
                    <View style={styles.picker_view}>
                        <Picker
                        style={styles.picker}
                        selectedValue={ratingTo}
                        onValueChange={(itemValue, itemIndex) =>
                            setRatingTo(itemValue)
                        }
                        >
                            <Picker.Item label="---" value="none" />
                            {array.map(id => {

                                if(ratingFrom == 'none')
                                    return <Picker.Item key={id} label={id.toString()} value={id}/>
                                if(id >= ratingFrom)
                                    return <Picker.Item key={id} label={id.toString()} value={id}/>
                                else
                                    return;
                            })}
                        </Picker>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{alignSelf:'center', marginTop:10}}
            onPress={() => clearFilters()}
            >
                <Text style={{color:'#3661ff', fontWeight:'bold',fontSize:14}}>X Clear All Filters</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={{...styles.btn,backgroundColor:'#f7382a'}}
            onPress={disable}
            >
                <Text style={styles.btn_txt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
            onPress={onSave}
            >
                <Text style={styles.btn_txt}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
      </View>
    </Modal>
  );
}

export default FiltersModal

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  panel:{
    height:300,
    display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
  },  
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:80,
    margin:10,
    padding: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 25,
    backgroundColor: '#04AD8F',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
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
  row:{
    display:'flex',
    flexDirection:'row',
  },
  row_column:{
      margin: 10,
  },
  picker:{
    height: 30,
    width: 120,
    
  },
  picker_view:{
    backgroundColor:'#e0e0e0',
    marginTop:5,
    borderRadius:15,
  }    
});
