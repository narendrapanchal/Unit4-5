import { createStore } from "redux";
import { reducer } from "./reducer.js";
import {INCREMENT,DECREMENT} from "./actionTypes";
const actionIncrement={type:"INREMENT",payload:1}; 
const actionDecrement={type:"DECREMENT",payload:1}; 
// {class Store{
//     constructor(reducer,init){
//         this.reducer=reducer;
//         this.state=init;
//     }
//     getStatus(){
//        return this.state;
//     }
//     dispatch(action){
//         this.state=this.reducer(this.state,action);
       
//        }
//    }
// }

const init={count:0};
const store=new createStore(reducer,init);
console.log(store.state);
store.dispatch(actionIncrement)
console.log(store.state);
store.dispatch(actionDecrement)
console.log(store.state);