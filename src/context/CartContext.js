import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (product) => {
    const newItem = { ...product };
    const updatedCartItems = [...cartItems, newItem];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
const removeAll=()=>{
console.log("hi abc");
  let updatedCartItems = [];
  setCartItems(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
}
  const removeItem = (index) => {
    let updatedCartItems;
    if (index === -1) {
      updatedCartItems = [];
    } else {
      updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem ,removeAll}}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
