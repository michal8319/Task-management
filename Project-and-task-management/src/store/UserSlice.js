import { createSlice } from "@reduxjs/toolkit";
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

  }
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
