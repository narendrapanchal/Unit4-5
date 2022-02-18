import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export const Cart=()=>{
    const {cart}=useContext(CartContext);
    console.log(cart)
    return ( <div>Hi div {cart}</div>)
}