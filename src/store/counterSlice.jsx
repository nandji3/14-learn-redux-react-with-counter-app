import { createSlice } from "@reduxjs/toolkit";

//// ----> counterSlice() for counter <---- ////
const initialCounterState = { counter: 0, showCounter: true };

//createSlice is more powerful than createReducer
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState, //or only write initialState = initialState: initialState
    reducers: {
        INC(state) {
            state.counter++;
        },
        DEC(state) {
            state.counter--;
        },
        INCBY(state, action) {
            state.counter = state.counter + action.payload;
        },
        DECBY(state, action) {
            state.counter = state.counter - action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});
//// ----> Now, counterSlice() exposses some action. So, export it <---- ////
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
