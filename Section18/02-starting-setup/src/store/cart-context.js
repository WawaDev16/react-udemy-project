import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  // addMenu: (id) => {},
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
