import { authAPI } from './../api/auth-api';

const SET_CREDENTIALS = 'SET_CREDENTIALS';
const SET_FETCHING = 'SET_FETCHING'

export const setCredetionals = data => ({type: SET_CREDENTIALS, data});
export const setFetching = isFetching => ({type: SET_FETCHING, isFetching});

export const login = (email, password) => {
    return (dispatch) => {
        authAPI.login(email, password)
        .then(data => dispatch(setCredetionals(data))
        )
    }
}

export const register = (user) => {
    return (dispatch) => {
        authAPI.register(user)
        .then( )
    }
}


let initialState = {
    userId: '',
    token: '',
    isAuthenticated: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {       

        case SET_CREDENTIALS: 
        return {
            ...state,
            ...action.data,
            isAuthenticated: true
        }

        case SET_FETCHING: 
        return {
            ...state,
            isFetching: action.isFetching
        }

        default: 
        return state;
    }
}

export default authReducer;