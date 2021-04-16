import axios from 'axios';

function GetNearbyRestaurants(currentLocation){

    return axios
    .get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + currentLocation.latitude + "," + currentLocation.longitude + "&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return err.data;
    });

}