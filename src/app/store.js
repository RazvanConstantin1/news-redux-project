import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
