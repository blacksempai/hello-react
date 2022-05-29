import { configureStore } from "@reduxjs/toolkit";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import datingReducer from './datingPageReducer';

let store = configureStore({
    reducer: {
        profilePage: profilePageReducer,
        dialogPage: dialogPageReducer,
        datingPage: datingReducer
    }
});

export default store;