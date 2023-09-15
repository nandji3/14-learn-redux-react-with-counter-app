import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action = { type: "INC5", payload: 1 }) => {
    if (action.type === "INC") {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === "DEC") {
        if (state.counter === 0) {
            return {
                counter: 0,
            }
        }
        return {
            counter: state.counter - 1,
        };
    }
    if (action.type === "INCBY5") {
        return {
            counter: state.counter + action.payload,
        };
    }
    return state;
};

const store = createStore(counterReducer);

export default store;
