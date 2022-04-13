import {renderEntireTree} from './render';

const state = {
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
        ]
    },
    profilePage: {
        posts:  [
            {id:0, text:":33 OwO", likes: 0},
            {id:1, text:"The tuna is a sleek and streamlined fish, adapted for speed. It has two closely spaced dorsal fins on its back; VERYYYY TAAASSSTYYY!! MEUW", likes: 8},
            {id:2, text:"First Post", likes: 3}
        ],
        newPostText: ''
    }
};

export const addPost = () => {
    let post = {
        id: state.profilePage.posts.length,
        text: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(post);
    changeNewPostText('');
    renderEntireTree(state, addPost, changeNewPostText, addLike);
}

export const changeNewPostText = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state, addPost, changeNewPostText, addLike);
}

export const addLike = (id) => {
    state.profilePage.posts[id].likes++;
    renderEntireTree(state, addPost, changeNewPostText, addLike);
}


export default state;