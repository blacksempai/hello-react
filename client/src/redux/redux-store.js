import { configureStore } from "@reduxjs/toolkit";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";

let store = configureStore({
    reducer: {
        profilePage: profilePageReducer,
        dialogPage: dialogPageReducer
    }
});

export default store;