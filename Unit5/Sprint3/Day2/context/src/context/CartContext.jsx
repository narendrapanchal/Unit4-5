import {createContext, useState} from "react";
import { Cart } from "../components/Cart";
export const CartContext=createContext();
export const CartContextProvider=({children})=>{
    const [cart,setCart]=useState(10);
    const handleCartUpdate=(value)=>{
        setCart(cart+value);
    }
     return ( <CartContext.Provider value={{cart,handleCartUpdate}}>{children}</CartContext.Provider>)
}