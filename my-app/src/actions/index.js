import axios from "axios";

export const SIGNIN_START = "SIGNIN_START";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNOUT_START = "SIGNOUT_START";
export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const signin = creds => dispatch => {
    dispatch({ type: SIGNIN_START });
    return axios
        .post("http://localhost:5000/api/auth/login", creds)
        .then(res => localStorage.setItem("token", res.data.token));
};

export const signup = creds => dispatch => {
    dispatch({ type: SIGNUP_START });
    return axios.post("http://localhost:5000/api/auth/register", creds);
};

export const signout = () => dispatch => {
    dispatch({ type: SIGNOUT_START});
    return axios.delete("http://localhost:5000/api/auth/logout")
        .then(localStorage.removeItem("token"));
}

export const getUsersList = token => dispatch => {
    dispatch({ type: FETCH_USERS_START });
    axios
        .get("http://localhost:5000/api/users", {
            headers: { "authorization": `${token}` }
        })
        .then(res => dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data }))
        .catch(err =>
            dispatch({ type: FETCH_USERS_FAILURE, payload: err.message })
        );
};
