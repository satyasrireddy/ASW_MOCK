import React, { createContext, useReducer, useEffect } from "react";
import CartReducer from '../reducers/CartReducer';
const initialState = {
  myShoppingCart: JSON.parse(localStorage.getItem("myShoppingCart"))||[]
};

export const GlobalCartContext=createContext(initialState);

export const GlobalCartContextProvider=({children})=>{
    const [state, dispatch]=useReducer(CartReducer,initialState)
    useEffect(()=>{
      localStorage.setItem("myShoppingCart", JSON.stringify(state.myShoppingCart));
    });
    
    const addItemTocart=(cartItem)=>{
      dispatch({
        type: "ADD_ITEM_TO_CART",
        payload: cartItem,
      }

      );
    };

    const removeItemFromCart=(cartItemId)=>{
      dispatch({
        type: "REMOVE_ITEM_FROM_CART",
        payload: cartItemId,

      })
    };

    const totalCartPrice = () =>
    state.myShoppingCart.reduce((acc, item) => (acc += item.price * item.quantity), 0);

    return(
        <GlobalCartContext.Provider value={{
          myShoppingCart: state.myShoppingCart,
            addItemTocart,
            removeItemFromCart,
            totalCartPrice
        }}>
        {children}
        </GlobalCartContext.Provider>
    );
}
