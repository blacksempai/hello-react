import state, { changeNewPostText, addPost, addLike} from './state';
import {renderEntireTree} from './render';

renderEntireTree(state, addPost, changeNewPostText, addLike);