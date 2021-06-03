const key = "AIzaSyABxodUEwkxWuhorogJitnKpIIiTdKga9U";

const requests = {

    getEvents: "https://orgmobapi.herokuapp.com/event/",
    createEvent: "https://orgmobapi.herokuapp.com/event/",
    getImage: "https://orgmobapi.herokuapp.com/image/",
    uploadImage: "https://orgmobapi.herokuapp.com/image/",
    getPlaces: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=30000&type=food&key=${key}`,
    getPlaceDetails: `https://maps.googleapis.com/maps/api/place/details/json?fields=opening_hours,review,website,formatted_phone_number&key=${key}`,
    getPlacePhoto: `https://maps.googleapis.com/maps/api/place/photo?key=${key}`,
    getSearch: "https://orgmobapi.herokuapp.com/search/",
}

export default requests;