import axios from 'axios';
import {getValueFromStore, saveToStore, deleteFromStore} from '../utils/secureStore';
import requests from '../utils/requests';

/* Gets all user events */
async function GetEvents(){

    try {
        const res = await axios
            .get(requests.getEvents);
        return res.data;
    } catch (err) {
        return err.data;
    }

}

/* creates new event */
async function CreateEvent(data){

    try {
        const res = await axios
            .post(requests.createEvent);
        return res.data;
    } catch (err) {
        return err.data;
    }

} 

export {GetEvents, CreateEvent}