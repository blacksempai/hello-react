const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const ADD_LIKE = 'ADD_LIKE';
const SET_STATE = 'SET_STATE';
const SET_FETCHING = 'SET_FETCHING';

export const addPost = () => ({type: ADD_POST});
export const addLike = (id) => ({type: ADD_LIKE, id: id});
export const changeNewPostText = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text});
export const setState = (state) => ({type: SET_STATE, state});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});

let initialState = {
    _id: '',
    email: '',
    name: '',
    photoURL: '',
    sex: '',
    profile: {
        birthDate: '',
        city: '',
        education: '',
        site: '',
        posts: []
    },
    newPostText: '',
    isFetching: false
}


const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_NEW_POST_TEXT: 
        return {
            ...state,
            newPostText: action.text
        }

        case ADD_POST: 
        return {
            ...state,
            profile: {
                ...state.profile,
                posts: [...state.profile.posts, {id: state.profile.posts.length, text: state.newPostText, likes: []}]
            },
            newPostText: ''
        } 

        case ADD_LIKE: 
        console.log(state);
        return {
            ...state,
            profile: {
                ...state.profile,
                posts: state.profile.posts.map(p => p._id === action.id ? {...p, likes: [...p.likes,'placeholder']} : p)
            }
        }

        case SET_STATE: 
        return {
            ...state,
            ...action.state
        }

        case SET_FETCHING:
        return {
            ...state,
            isFetching: action.isFetching
        }

        default: return state;
    }
}

export default profilePageReducer;