import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Users } from '../types/type';

const initialState:Users[] = [
    {
      "username" : "Cavidan",
      "password" : "123123"
    }
  ]
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const existingUser = state.find((user) => user.username === action.payload.username);
      if (existingUser) {
        existingUser.role = action.payload.role;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export const setSelectUser = createSelector(
  (state: { user: Users[] }) => state.user,
  (users) => users.map(user => user.username)
);
export default userSlice.reducer;


//   extraReducers: (builder) =>
//   builder
//     .addCase(fetchAddress.pending, (state, action) => {
//       state.status = 'loading';
//     })
//     .addCase(fetchAddress.fulfilled, (state, action) => {
//       state.position = action.payload.position;
//       state.address = action.payload.address;
//       state.status = 'idle';
//     })
//     .addCase(fetchAddress.rejected, (state, action) => {
//       state.status = 'error';
//       state.error =
//         'There was a problem getting your address. Make sure to fill this field!';
//     }),