import axios from 'axios';

/* makes search by string */
GetSearch = (search_string) => {

    return axios
    .get("http://192.168.8.195:5000/search/"+search_string,)
    .then(res => {
        return res.data.data;
    })
    .catch(err => {
        return null;
    });
}

export default GetSearch