const ROOT_URL = 'http://localhost:3090';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./types";

export function signinUser({ email, password }) {
    return function(dispatch) {

        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                //Update stte to indicate user is authenticated
                dispatch({ type: AUTH_USER });

                localStorage.setItem('token', response.data.token);

                browserHistory.push('/feature');
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });

    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}