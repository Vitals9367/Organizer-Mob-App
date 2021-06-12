import {
    SAVE_LOCATION,
} from './types';

export const SaveLocation = location => {
  return {
    type: SAVE_LOCATION,
    payload: location
  }
}