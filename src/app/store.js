import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.jsx";
import newsReducer from "../features/newsSlice.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});

export default store;
