import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';
import authReducer from './redux/authSlice';
import servicesReducer from './redux/serviceBtnSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    services: servicesReducer,
  },
});

export default store;
