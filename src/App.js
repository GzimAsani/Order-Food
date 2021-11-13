import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [showPrice, setShowPrice] = useState(false);

  const showCartHandler = () => {
    setShowPrice(true);
  };

  const hideCartHandler = () => {
    setShowPrice(false)
  }

  return (
    <Fragment>
      {showPrice && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
