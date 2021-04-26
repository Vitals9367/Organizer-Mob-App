import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={200}
      query={{
        key: 'AIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;