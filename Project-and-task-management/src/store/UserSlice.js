import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
const UserSlice = createSlice({
    name:"user",
    initialState: {
    username: "admin",
    password: "1234",
    isLogged: false
    },
     reducers: {

    login: (state) => {
      state.isLogged = true;
    },

    logout: (state) => {
      state.isLogged = false;
    }

=======

const UserSlice = createSlice({
  name: "user",
  initialState: {
    username: "admin",
    password: "1234",
    isLogged: false
  },
  reducers: {
    login: (state) => {
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
    }
>>>>>>> c96b055c50d1da7c05d0a2d09b19643ea7643df5
  }
});

export const { login, logout } = UserSlice.actions;
<<<<<<< HEAD
export default UserSlice.reducer;
=======
export default UserSlice.reducer;
>>>>>>> c96b055c50d1da7c05d0a2d09b19643ea7643df5
