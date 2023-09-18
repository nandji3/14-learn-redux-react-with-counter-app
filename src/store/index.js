import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSlice'
import authReducer from './authSlice'

// configureStore function better than combineReducer fn --> configureStore like create store but its merging multiple reducer into into one reducer easier there after. In configure store we pass not a reducer fn but an object. Its a configuration object expected by configureStore. A configuration object then set reducer object property

//// ----> Our Global Store <---- ////
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

//// ----> export our globalStore <---- ////
export default store;



