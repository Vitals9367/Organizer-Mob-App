import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
} from '../actions/types';

const initialState = {
    placeList: null,
    loading:false,
}

const MapReducer = (state = initialState, action) =>{

    switch (action.type){
        case GET_PLACES_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_PLACES_FAILURE:
            return{
                ...state,
                loading: false
            }
        case GET_PLACES_SUCCESS:
            return{
                ...state,
                placeList: action.payload,
                loading: false,
            }
        default:
            return state
    }
}

export default MapReducer