import { createSlice } from "@reduxjs/toolkit";

//// ----> authSlice() for Authentication <---- ////
const initialAuthState = {
    isAuthenticated: false,
};

//createSlice is more powerful than createReducer
const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

//// ----> Now, authSlice() exposses some action. So, export it <---- ////
export const authActions = authSlice.actions;

export default authSlice.reducer;
