import axios from 'axios';
import requests from '../utils/requests';

async function GetNearby(location){

    try {
        const res = await axios
            .get(requests.getPlaces + `&location=${location.coords.latitude},${location.coords.longitude}`);
        return res.data.results;
    } catch (err) {
        return err.data;
    }

}

async function GetPlaceDetails(place_id){

    try {
        const res = await axios
            .get(requests.getPlaceDetails + `&place_id=${place_id}`);
        return res.data.result;
    } catch (err) {
        return err.data;
    }

}

async function GetPhoto(reference,maxwidth){

    try {
        const res = await axios
            .get(requests.getPlacePhoto + `$maxwidth=${maxwidth}&photoreference=${reference}`);
        return res.request.responseURL;
    } catch (err) {
        return err.data;
    }

}

export {GetNearby, GetPhoto,GetPlaceDetails};