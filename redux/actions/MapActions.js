import axios from 'axios';
import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
} from '../actions/types';
import {GetNearby} from "../../services/MapService";

export const GetPlacesAction = (location) =>{

    return (dispatch) => {

      dispatch(PlacesRequest());
      
      GetNearby(location)
      .then(res => {
        dispatch(PlacesSuccess(res));
      })
      .catch(err => {
        dispatch(PlacesFailure(err));
      })
    }
}

export const PlacesRequest = () => {
  return {
    type: GET_PLACES_REQUEST
  }
}

export const PlacesSuccess = list => {
  return {
    type: GET_PLACES_SUCCESS,
    payload: list
  }
}

export const PlacesFailure = error => {
  return {
    type: GET_PLACES_FAILURE,
    payload: error
  }
}