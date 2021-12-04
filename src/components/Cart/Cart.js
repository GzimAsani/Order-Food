import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartCOntext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartCOntext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onCheckout = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartRemoveHandler.bind(null, item.id)}
          onAdd={cartAddHandler.bind(null, item)}
        />
      ))}{" "}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["btn--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button onClick={onCheckout} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
