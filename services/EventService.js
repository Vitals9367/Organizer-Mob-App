import axios from 'axios';
import {getValueFromStore, saveToStore, deleteFromStore} from '../utils/SecureStore';

/* Gets all user events */
function GetEvents(){

    return axios
    .get("https://orgapi11.herokuapp.com/event/")
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
    .post("https://orgapi11.herokuapp.com/event/",)
    .then(res => {
        return res.data;
    })
    .catch(err => {
        return err.data;
    });

} 

export {GetEvents, CreateEvent}