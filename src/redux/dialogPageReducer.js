const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeNewMessageTextActionCreator = (text) => ({type:CHANGE_NEW_MESSAGE_TEXT, text: text});

let initialState = {
    dialogs: [
        {id:0, name: 'Anya'},
        {id:1, name: 'Bogdan'},
        {id:2, name: 'Demon'},
        {id:3, name: 'Johney'},
        {id:4, name: 'Kurama'},
        {id:5, name: 'Matataby'},
        {id:6, name: 'Marik'}
    ],
    messanges: [
        {id:0, author:"Anya", text:"Hi!"},
        {id:1, author:"Andrey", text:"Hello!"},
        {id:2, author:"Andrey", text:"How Are U?"}
    ],
    newMessageText: ''
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
        return {
            ...state,
            messanges: [...state.messanges, {id: state.messanges.length, author: 'Admin', text: state.newMessageText }],
            newMessageText: ''
        }

        case CHANGE_NEW_MESSAGE_TEXT:
        return {
            ...state,
            newMessageText: action.text
        }

        default: break;
    }
    return state;
}

export default dialogPageReducer;