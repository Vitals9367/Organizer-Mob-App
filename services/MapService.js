import axios from 'axios';

function GetNearby(currentLocation){

    return axios
    .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currentLocation.latitude + "," + currentLocation.longitude + "&radius=30000&type=food&key=AIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return err.data;
    });

}

function GetPhoto(reference){

    return axios
    .get("https://maps.googleapis.com/maps/api/place/photo?photoreference="+{reference}+"&key=YAIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return err.data;
    });

}

export {GetNearby};