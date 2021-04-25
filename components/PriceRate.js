import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions  } from 'react-native';
import { DollarSign } from "react-native-feather";

function PriceRate({ rating, size }) {

    const dollars = [];

    for(let i = 1;i <= 5;i++){
        if(i <= rating){
            dollars.push(<DollarSign width={size} height={size} key={i} style={styles.dollar} />)
        }
    }

    if (rating == 0)
        return;
    else{
        return (
            <View style={styles.container}>
                {dollars}
            </View>
        );
    }
}

export default PriceRate

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  dollar:{
    color:'green',
    marginLeft:0,
  }
});
