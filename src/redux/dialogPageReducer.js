const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeNewMessageTextActionCreator = (text) => ({type:CHANGE_NEW_MESSAGE_TEXT, text: text});


function addMessage(state, action) {
    let message = {
        id: state.messanges.length,
        author: 'Admin',
        text: state.newMessageText
    };
    state.messanges.push(message);
}

function changeNewMessageText(state, action) {
    state.newMessageText = action.text;
}

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: addMessage(state, action);
        break;

        case CHANGE_NEW_MESSAGE_TEXT: changeNewMessageText(state, action);
        break;

        default: break;
    }
    return state;
}

export default dialogPageReducer;