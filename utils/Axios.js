import axios from 'axios';
import {getValueFromStore, saveToStore, deleteFromStore} from './SecureStore';

const token = getValueFromStore('token');

export const authAxios = axios.create({
    headers: {
        Authorization:  `${token}`,
    },
})