import {
    SAVE_LOCATION,
} from '../actions/types';

const initialState = {
    loading:false,
    savedLocation: null,
    error: '',
}

const MapReducer = (state = initialState, action) =>{

    switch (action.type){
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