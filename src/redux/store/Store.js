import { combineReducers, createStore } from "redux";
import appReducer from "../reducer/AppReducer";

// let red =combineReducers({
//     appReducer
// })

const store = createStore(appReducer)

export default store