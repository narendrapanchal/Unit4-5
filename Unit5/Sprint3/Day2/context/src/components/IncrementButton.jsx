import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export const Body=()=>{
    const {handleCartUpdate} =useContext(CartContext);
    return (<button onClick={()=>{
        handleCartUpdate(10)
    }}>Increase 10</button>)
}