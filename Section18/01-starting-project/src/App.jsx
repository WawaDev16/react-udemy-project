import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextrovider } from "./Store/CartContext";
import { UserProgressContextProvider } from "./Store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextrovider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextrovider>
    </UserProgressContextProvider>
  );
}

export default App;
