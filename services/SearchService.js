import axios from 'axios';
import requests from '../utils/requests';

/* makes search by string */
GetSearch = async (search_string) => {

    try {
        const res = await axios
            .get(requests.getSearch + search_string);
        return res.data.data;
    } catch (err) {
        return null;
    }
}

export default GetSearch