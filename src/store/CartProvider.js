import CartCOntext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount = 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return <CartCOntext.Provider value={cartContext} >{props.children}</CartCOntext.Provider>;
};

export default CartProvider;
