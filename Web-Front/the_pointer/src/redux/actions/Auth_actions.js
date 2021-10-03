import * as Actions from './constantes'
import axios from 'axios'
import jwtDecode from "jwt-decode";

// Check token & load user
export const loginUser = (CIN, password, typeUser) => (dispatch) => {
    // User loading

    dispatch({ type: Actions.USER_LOADING });
    console.log('here', CIN === '' || password === '')
    if ((CIN === '' || password === '')) {
        dispatch({
            type: Actions.LOGIN_FAIL,

        });
    } else {


        axios({
            method: "post",
            url: "http://localhost:5000/api/signin",
            withCredentials: true,
            data: {
                CIN,
                password,
                type: typeUser
            }

        }).then((response) => {
            console.log('err', response)
            if (response.data.errors) { dispatch({ type: Actions.LOGIN_FAIL, payload: response.data }) }
            else {
                localStorage.setItem('token', response.data.token)
                dispatch({
                    type: Actions.LOGIN_SUCCESS,
                    payload: response.data
                })

            }

        }).catch((err) => {

        });
    }
}

export const checkUsersigned = () => (dispatch) => {
    dispatch({ type: Actions.USER_LOADING });
    const token = localStorage.getItem('token');
    if (token) {
        const user = jwtDecode(token);
        dispatch({ type: Actions.USER_LOADED, user, token });
    } else { dispatch({ type: Actions.AUTH_ERROR }); }

}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: Actions.LOGOUT_SUCCESS });
}






// Setup config/headers and token
export const tokenConfig = (getState => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
});