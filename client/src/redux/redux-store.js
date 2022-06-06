import { configureStore } from "@reduxjs/toolkit";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import datingReducer from './datingPageReducer';
import authReducer from './authReducer'

let store = configureStore({
    reducer: {
        profilePage: profilePageReducer,
        dialogPage: dialogPageReducer,
        datingPage: datingReducer,
        auth: authReducer
    }
});

window.store = store;

export default store;