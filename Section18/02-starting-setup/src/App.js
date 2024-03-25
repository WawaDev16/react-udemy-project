// import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  return (
    <CartProvider>
      {showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
