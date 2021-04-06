import axios from 'axios';
import {getValueFromStore, saveToStore, deleteFromStore} from '../utils/SecureStore';

/* Gets all user events */
function GetEvents(){

    return axios
    .get("http://192.168.8.195:5000/event/")
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return err.data;
    });

}

/* creates new event */
function CreateEvent(data){

    return axios
    .post("http://192.168.8.195:5000/event/",)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return err.data;
    });

} 

export {GetEvents, CreateEvent}