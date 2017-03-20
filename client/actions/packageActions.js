import axios from 'axios';
import { GET_PACKAGES } from './types';
import { ADD_POINTS } from './types';

export function retrievePackages(packages) {
  return {
    type: GET_PACKAGE,
    packages
  };
}

export function updatePoints(newTotal) {
  return {
    type: ADD_POINTS,
    newTotal: newTotal.reward_points
  };
}

export function addPoints (userId, newPointTotal) {
  let databaseUpdate = {
    user: userId,
    value: newPointTotal,
    requestType: "add"
  };
  return dispatch => {
    return axios.put('/api/points', databaseUpdate)
    .then(res => {
      dispatch(updatePoints(res.data.response));
    });
  }
}


export function postPackageData(data) {
  return dispatch => {
    return axios.post('/api/package', data)
    .then(res => {
      const packageArray = res.request.response;
      //temporarily disabling Twilio SMS notifications below
      axios.get('/api/notifications');
    });
  }
}


