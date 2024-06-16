import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./rdx_features/auth/authSlice.js";
// import userReducer from "./rdx_features/user/userSlice.js";
import chatReducer from "./rdx_features/chat/chatSlice.js";
import jobsReducer from './rdx_features/jobs/jobsSlice.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    jobs: jobsReducer,
    // user: userReducer,
    chat: chatReducer,
  },
});

export default store;
