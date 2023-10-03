import { combineReducers } from "@reduxjs/toolkit";
import chatboatReducer from "../slices/chatboatSlice"
import userReducer from "../slices/userSlice"

const rootReducer = combineReducers({
    chatbot:chatboatReducer,
    user: userReducer
})


export default rootReducer