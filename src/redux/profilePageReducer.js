const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const ADD_LIKE = 'ADD_LIKE';

export const addPostActionCreator = () => ({type: ADD_POST});
export const addLikeActionCreator = (id) => ({type: ADD_LIKE, id: id});
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text});

let initialState = {
    posts:  [
        {id:0, text:":33 OwO", likes: 0},
        {id:1, text:"The tuna is a sleek and streamlined fish, adapted for speed. It has two closely spaced dorsal fins on its back; VERYYYY TAAASSSTYYY!! MEUW", likes: 8},
        {id:2, text:"First Post", likes: 3}
    ],
    newPostText: ''
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
            posts: [...state.posts, {id: state.posts.length, text: state.newPostText, likes: 0}],
            newPostText: ''
        } 

        case ADD_LIKE: 
        return {
            ...state,
            posts: state.posts.map(p => p.id === action.id ? {id:p.id, text: p.text, likes: p.likes+1} : p)
        }

        default: return state;
    }
}

export default profilePageReducer;