import { reducer } from "../reducers/todo/reducer";
import {combineReducers, createStore} from "redux"
import { reducer as todoReducer } from "../reducers/todo/reducer";
import { reducer as loginReducer } from "../reducers/login/reducer";
const rootreducer=combineReducers({
    todoReducer,
    loginReducer
})
export const store = new createStore(rootreducer);