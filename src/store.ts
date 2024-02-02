import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';
import authSlice from './redux/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth:authSlice
  },
});

export default store;
