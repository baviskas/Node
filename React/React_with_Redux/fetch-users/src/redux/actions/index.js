import axios from 'axios';
import config from "./../../config";

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const fetchUserRequest = () => {
  return {
      type: FETCH_USERS_REQUEST
  }
};

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
};

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        axios.get(config.apiEndpoint)
            .then(response => {
                const users = response.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message))
            })
    }
};


