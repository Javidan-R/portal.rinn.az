import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role } from '../models';

interface AuthSlice {
  isAuthenticated: boolean;
  role: Role;
}

const initialState: AuthSlice = {
  isAuthenticated: !!localStorage.getItem('RIN_AUTH'),
  role: (localStorage.getItem('role') as Role) ?? Role.GUEST, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<{ isAuthenticated: boolean, role: Role }>) {
      const { isAuthenticated, role } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.role = role; 
    },
    logout(state) {
      state.isAuthenticated = false;
      state.role = Role.GUEST;
    },
    // setDefaultRole(state){
    //   state.role = Role.GUEST;
    // }
    
  },
});

// Ekstra bir durum dışında başka durumlar için varsayılan bir işlev belirleyin
export const { setAuthenticated, logout,  } = authSlice.actions;
export const authSliceService = (state: { auth: AuthSlice }) => state.auth;
export default authSlice.reducer;
