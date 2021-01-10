import React, {useEffect, useState, Suspense} from "react";
import {Route, Switch} from "react-router-dom";

import About from "./components/About/About";
import Cart from "./components/Shop/Cart/Cart";
import Checkout from "./components/Shop/Cart/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";

import {commerce} from "./lib/commerce";

function App() {
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
  }

  const addToCart = async (productId, quantity) => {
      const {cart} = await commerce.cart.add(productId, quantity);

      setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const {cart} = await commerce.cart.empty();

    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const captureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      console.log(newOrder);
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      console.log(incomingOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch(error) {
      console.log(error);
      setErrorMessage(error.data.error.message);
    }
  }

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/cart" exact render={() => <Cart cart={cart} handleEmptyCart={handleEmptyCart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/checkout" exact render={() => <Checkout captureCheckout={captureCheckout} cart={cart} error={errorMessage} order={order} />} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/shop" exact render={() => <Shop addToCart={addToCart} />} />
          </Switch>
        </Suspense>
      <Footer />
    </div>
  );
}

export default App;
