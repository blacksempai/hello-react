const SET_USERS = 'SET_USERS';
const DATE = 'DATE';
const CHANGE_PAGE = 'CHANGE_PAGE';

let initialState = {
    users: [],
    total: 0,
    limit: 3,
    currentPage: 0
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

        default: 
            return state;
    }
}

export default datingReducer;

export const setUsersActionCreator = (users, total) => {
    return { type: SET_USERS, users, total}
}

export const dateUserActionCreator = (id) => {
    return { type: DATE, id}
}

export const changePageActionCreator = (page) => {
    return { type: CHANGE_PAGE, page }
}