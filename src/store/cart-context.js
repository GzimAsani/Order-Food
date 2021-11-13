import React from 'react';

const CartCOntext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartCOntext;