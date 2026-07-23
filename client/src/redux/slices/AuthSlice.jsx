import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",

    initialState,

    reducers: {

        login(state, action) {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },


        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
        },
    },
});

export const {
    login,
    logout,
} = authSlice.actions;

export default authSlice.reducer;