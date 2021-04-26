import axios from 'axios';

/* makes search by string */
GetSearch = (search_string) => {

    return axios
    .get("https://orgapi11.herokuapp.com/search/"+search_string,)
    .then(res => {
        return res.data.data;
    })
    .catch(err => {
        return null;
    });
}

export default GetSearch