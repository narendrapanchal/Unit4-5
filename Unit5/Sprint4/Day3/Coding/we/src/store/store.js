import {createStore,combineReducers} from "redux";
import { reducer as TodosReducer } from "../feature/Todos/reducer";
import { reducer as CounterReducer } from "../feature/Counter/reducer";

let rootReducer=combineReducers({
    todosState:TodosReducer,
    counterState:CounterReducer
})
export const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());