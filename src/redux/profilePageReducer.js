const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const ADD_LIKE = 'ADD_LIKE';

export const addPostActionCreator = () => ({type: ADD_POST});
export const addLikeActionCreator = (id) => ({type: ADD_LIKE, id: id});
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text});

function addPost(state, action) {
    let post = {
        id: state.posts.length,
        text: state.newPostText,
        likes: 0
    };
    state.posts.push(post);
    state.newPostText = '';
}

function changeNewPostText(state, action) {
    state.newPostText = action.text;
}

function addLike(state, action) {
    state.posts[action.id].likes++;
}


const profilePageReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: addPost(state, action);
        break;   

        case CHANGE_NEW_POST_TEXT: changeNewPostText(state, action);
        break;

        case ADD_LIKE: addLike(state, action);
        break;

        default: break;
    }
    return state;
}

export default profilePageReducer;