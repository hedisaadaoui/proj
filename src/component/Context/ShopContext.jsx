// ShopContext.js
import React, { createContext, useReducer } from 'react';

// Define initial state and reducer function
const initialState = {
  // Your initial state goes here
  cart: [],
};

const shopReducer = (state, action) => {
  // Your reducer logic goes here
  switch (action.type) {
    case 'ADD_TO_CART':
      // Handle adding to cart
      return { ...state, cart: [...state.cart, action.payload] };
    // Add more cases as needed

    default:
      return state;
  }
};

// Create the context
export const ShopContext = createContext();

// Create the context provider component
export const ShopContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};
