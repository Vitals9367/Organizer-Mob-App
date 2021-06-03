import axios from 'axios';
import {getValueFromStore, saveToStore, deleteFromStore} from './secureStore';

const token = getValueFromStore('token');

export const authAxios = axios.create({
    headers: {
        Authorization:  `${token}`,
    },
})