export const reducer=(state,{type,payload})=>{
   { // if(action.type=="INREMENT"){
    //     return {...state,count:state.count+action.payload}
    // }
    // if(action.type=="DECREMENT"){
    //     return {...state,count:state.count-action.payload}
    // }
}
    switch (type){
        case "INREMENT":
            return {...state,count:state.count+payload}
        case "DECREMENT":
            return {...state,count:state.count-payload}
        default:
            return state;
    }
}