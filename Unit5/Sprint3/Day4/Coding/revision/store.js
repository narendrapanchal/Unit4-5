import { createStore } from "redux";
import { reducer } from "./reducer.js";
import {incCount,decCount,addTodo} from "./action.js";

const init={count:1,todo:[]};
const store= createStore(reducer,init);
console.log(store.getState());
store.dispatch(incCount(1));
console.log(store.getState());
store.dispatch(decCount(1));
console.log(store.getState());
store.dispatch(addTodo({name:"narendra",age:21}));
console.log(store.getState());
