import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
    SAVE_LOCATION,
} from '../actions/types';

const initialState = {
    placeList: [],
    loading:false,
    savedLocation: null,
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
        case SAVE_LOCATION:
            return{
                ...state,
                savedLocation: action.payload,
            }
        default:
            return state
    }
}

export default MapReducer