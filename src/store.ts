import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';
import authSlice from './redux/authSlice';
import servicesReducer from './redux/serviceBtnSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    auth:authSlice,
    services: servicesReducer,
  },
});

export default store;
