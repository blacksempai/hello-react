import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";

const store = {
    _state: {
        dialogPage: {
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
        },
        profilePage: {
            posts:  [
                {id:0, text:":33 OwO", likes: 0},
                {id:1, text:"The tuna is a sleek and streamlined fish, adapted for speed. It has two closely spaced dorsal fins on its back; VERYYYY TAAASSSTYYY!! MEUW", likes: 8},
                {id:2, text:"First Post", likes: 3}
            ],
            newPostText: ''
        }
    },
    _notifySubscriber() {
        console.error('no subscriber');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._notifySubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);
        this._notifySubscriber();
    }
}

export default store;