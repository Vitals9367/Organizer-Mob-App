import axios from 'axios';

const key = "AIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U";

function GetNearby(currentLocation){

    return axios
    .get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentLocation.latitude},${currentLocation.longitude}&radius=30000&type=food&key=${key}`)
    .then(res => {
        return res.data.results;
    })
    .catch(err => {
        return err.data;
    });

}

function GetPlaceDetails(place_id){

    return axios
    .get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=opening_hours,review,website,formatted_phone_number&key=${key}`)
    .then(res => {
        return res.data.result;
    })
    .catch(err => {
        return err.data;
    });

}

function GetPhoto(reference,maxwidth){

    return axios
    .get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photoreference=${reference}&key=${key}`)
    .then(res => {
        return res.request.responseURL;
    })
    .catch(err => {
        return err.data;
    })

}

export {GetNearby, GetPhoto,GetPlaceDetails};