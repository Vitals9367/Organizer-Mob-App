import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions  } from 'react-native';
import { Search } from "react-native-feather";
import StarRating from 'react-native-star-rating';

function StarRate({ rating, size, margin }) {

  return (
    <View style={{...styles.container,marginTop:margin,marginBottom:margin}}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={rating}
        starSize={size}
        starStyle={styles.star}
        fullStarColor={'#00BEB3'}
      />
    </View>
  );
}

export default StarRate

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  star:{
    paddingRight: 5,
  }
});
