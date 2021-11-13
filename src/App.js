import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [showPrice, setShowPrice] = useState(false);

  const showCartHandler = () => {
    setShowPrice(true);
  };

  const hideCartHandler = () => {
    setShowPrice(false)
  }

  return (
    <CartProvider>
      {showPrice && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
