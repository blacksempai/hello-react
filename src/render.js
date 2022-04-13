import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export const renderEntireTree = (state, addPost, changeNewPostText, addLike) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}  changeNewPostText={changeNewPostText} addLike={addLike} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
