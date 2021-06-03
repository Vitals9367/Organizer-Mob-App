import axios from 'axios';
import FormData from 'form-data'
import requests from '../utils/requests';

const GetUserImage = async (username) => {

    try {
        const res = await axios.get(requests.getImage + username);
        return res.data;
    } catch (err) {
        return err.data;
    }

}

const UploadUserImage = async (username, file) => {

    let data = new FormData();
    data.append('file', file);

    try {
        const res = await axios.post(requests.uploadImage + username, data);
        console.log(res);
        return res.data;
    } catch (err) {
        return err.data;
    }

}

export {GetUserImage, UploadUserImage}