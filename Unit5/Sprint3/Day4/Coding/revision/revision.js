const action= {type:" ",payload:""};
const incermentCount= {type:"INCREMENT",payload:1};
const decermentCount= {type:"DECREMENT",payload:1};
const addTodo={type:"ADDTODO",payload:{name:"narendra",age:21}};
class Store{
    constructor(reducer,satte){
        this.reducer=reducer;
        this.state=satte;
    }
    getState(){
        return this.state;
    }
    dispatch(action){
       this.state=this.reducer(this.state,action);
    }
  
}
const reducer=(state,{type,payload})=>{
    switch(type){
        case "INCREMENT":
        return {...state,count:state.count+payload};
        case "DECREMENT":
        return {...state,count:state.count-payload};
        case "ADDTODO":
        return {...state,todo:[...state.todo, payload]};
        default:
        return state;
    }
};
const satte={count:1,todo:[]};
const store=new Store(reducer,satte);
console.log(store.state);
store.dispatch(incermentCount);
console.log(store.state);
store.dispatch(decermentCount);
console.log(store.state);
store.dispatch(addTodo);
store.dispatch(addTodo);
console.log(store.state);