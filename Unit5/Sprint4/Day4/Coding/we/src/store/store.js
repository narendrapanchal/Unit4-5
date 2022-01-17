import {compose,createStore,combineReducers, applyMiddleware} from "redux";
import { reducer as TodosReducer } from "../feature/Todos/reducer";
import { reducer as CounterReducer } from "../feature/Counter/reducer";
import thunk from 'redux-thunk';
let rootReducer=combineReducers({
    todosState:TodosReducer,
    counterState:CounterReducer
})
// const logger1 =(state)=>(next)=>(action)=>{
//     console.log("enter logger 1")
//     if(typeof(action)==="function"){
//        return action(store.dispatch);
//     }
//     next(action);
//     console.log(" exit logger 1");
// }
/**
 * Always write thuhk first 
 */
export const store=createStore(rootReducer,compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__()));
console.log(store.getState());