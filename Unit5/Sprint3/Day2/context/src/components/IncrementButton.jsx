import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export const Body=()=>{
    const {cart,handleCartUpdate} =useContext(CartContext);
    return (<button onClick={()=>{
        handleCartUpdate(1)
    }}>Increase{cart}</button>)
}