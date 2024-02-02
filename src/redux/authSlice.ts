import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  role: '', // Add role property to track user role
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.role = action.payload.role; // Set user role
    },
  },
});

export const { setAuthenticated } = authSlice.actions;

export default authSlice.reducer;
