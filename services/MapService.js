import axios from 'axios';
import requests from '../utils/requests';

const key = "your key";

async function GetNearby(location,radius){

    try {
        const res = await axios
            .get(requests.getPlaces + `&location=${location.coords.latitude},${location.coords.longitude}&radius=${radius}`);
        return res.data;
    } catch (err) {
        return err.data;
    }
}

async function GetPlacesNextPage(token){

    try {
        const res = await axios
            .get(requests.getPlacesNextPage + `pagetoken=${token}&key=${key}`);
        return res.data;
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
            .get(requests.getPlacePhoto + `&maxwidth=${maxwidth}&photoreference=${reference}`);
        return res.request.responseURL;
    } catch (err) {
        return err.data;
    }
}

export {GetNearby, GetPhoto,GetPlaceDetails,GetPlacesNextPage};