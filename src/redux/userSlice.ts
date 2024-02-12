import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface UserDetail {
  userId: number;
  image: string;
  userAllName: string;
  password: string;
  number: string;
  address1: string;
  address2: string;
  pasDate: string;
  birthday: string;
  document: string;
}

export interface User {
  username: string;
  password: string;
  userdetail: UserDetail[]; // Add userdetail array
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    {
      username: 'Cavidan',
      password: '123123',
      userdetail: [
        {
          userId: 1,
          image: './src/assets/images/user.avif',
          userAllName: 'Rəcəbli Cavidan Ayaz oğlu',
          password: 'XXXXXX',
          number: '1111111',
          address1: 'Bakı şəhəri',
          address2: 'Bakı şəhəri',
          pasDate: '2024-02-20',
          birthday: '1997-07-02',
          document: 'Asan-Gəncə(2)'
        }
      ]
    }
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      const existingUser = state.users.find((user) => user.username === action.payload.username);
      if (existingUser) {
        Object.assign(existingUser, action.payload);
      } else {
        state.users.push(action.payload);
      }
    },
    updateUserDetail(state, action: PayloadAction<{ username: string; userdetail: UserDetail }>) {
      const { username, userdetail } = action.payload;
      const existingUser = state.users.find(user => user.username === username);
      if (existingUser) {
        existingUser.userdetail.push(userdetail);
      }
    },
  },
});

export const { setUser, updateUserDetail } = userSlice.actions;

export const selectUsers = (state: { user: UserState }) => state.user.users;

// If you want to select only usernames:
export const selectUsernames = createSelector(
  selectUsers,
  (users) => users.map(user => user.username)
);
export const useSelectedUser = (selectedUsername:string) => {
  const users = useSelector(selectUsers);
  return users.find(user => user.username === selectedUsername);
}
export default userSlice.reducer;
