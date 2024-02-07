import { createSlice } from '@reduxjs/toolkit';
import { Role } from '../models';

interface AuthSlice{
  isAuthenticated : boolean,
  role: string; // Role tipine göre ayarlayın
}

const initialState : AuthSlice = {
  isAuthenticated: !!localStorage.getItem('RIN_AUTH'),
  role: localStorage.getItem('role') ?? Role.GUEST, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.role = action.payload.role; 
    },
    logout(state) {
      state.isAuthenticated = false;
      state.role = Role.GUEST
    },
  },
});

export const { setAuthenticated ,logout } = authSlice.actions;
export const authSliceService = (state: {auth : AuthSlice}) => state.auth;
export default authSlice.reducer;
