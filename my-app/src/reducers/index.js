// import actions
import {
    SIGNIN_START,
    SIGNUP_START,
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "../actions";

const initialState = {
    users: [],
    isSigningUp: false,
    isLoggingIn: false,
    isFetchingUsers: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_START:
            return {
                ...state,
                isLoggingIn: true,
                isSigningUp: false,
                error: ""
            }
        case SIGNUP_START:
            return {
                ...state,
                isLoggingIn: false,
                isSigningUp: true,
                error: ""
            }
        case FETCH_USERS_START:
            return {
                ...state,
                isFetchingUsers: true,
                isLoggingIn: false,
                isSigningUp: false,
                error: ""
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFetchingUsers: false,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isFetchingUsers: false,
                error: action.payload
            }
        default:
            return state;
    }
};