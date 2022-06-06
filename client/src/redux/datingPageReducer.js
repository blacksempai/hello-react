import { usersAPI } from './../api/users-api';
const SET_USERS = 'SET_USERS';
const DATE = 'DATE';
const CHANGE_PAGE = 'CHANGE_PAGE';
const SET_FETCHING = 'SET_FETCHING';

let initialState = {
    users: [],
    total: 0,
    limit: 3,
    currentPage: 0,
    isFetching: false,
    followingInProgress: []
}

const datingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: 
            return {
                ...state,
                users: [...action.users],
                total: action.total
            }
        case DATE: 
            return {
                ...state,
                users: state.users.map(u => u._id === action.id ? {...u, dating: true} : u )
            }
        case CHANGE_PAGE: 
            return {
                ...state,
                currentPage: action.page
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

export default datingReducer;

export const setUsers = (users, total) => {
    return { type: SET_USERS, users, total}
}

export const dateUser = (id) => {
    return { type: DATE, id}
}

export const changePage = (page) => {
    return { type: CHANGE_PAGE, page }
}

export const setFetching = (isFetching) => {
    return { type: SET_FETCHING, isFetching }
}

export const getUsers = (page = 0) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        dispatch(changePage(page));
        usersAPI.getUsers(page)
        .then((data)=> {
            dispatch(setUsers(data.users, data.total));
            dispatch(setFetching(false));
        })
    }
}