import axios from 'axios';
import {
    GET_PLACES_REQUEST,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAILURE,
    SAVE_LOCATION,
} from './types';
import {GetNearby} from "../../services/mapService";

export const GetPlacesAction = (location) =>{

    return (dispatch) => {

      dispatch(PlacesRequest());
      
      GetNearby(location)
      .then(res => {
        dispatch(PlacesSuccess(res));
      })
      .catch(err => {
        dispatch(PlacesFailure(err.response.data));
      })
    }
}

export const SaveLocation = location => {
  return {
    type: SAVE_LOCATION,
    payload: location
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