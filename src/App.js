import React, {useEffect, useState, Suspense} from "react";
import {Route, Switch} from "react-router-dom";

import About from "./components/About/About";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Cart from "./components/Shop/Cart/Cart";
import Checkout from "./components/Shop/Cart/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import SideDrawerCart from "./components/UI/SideDrawerCart/SideDrawer";

import {commerce} from "./lib/commerce";

function App() {
  const [cart, setCart] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  //BEGIN COMMERCEJS FUNCTIONS

  const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
  }

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    
    setProducts(data);
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
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
      refreshCart();
    } catch(error) {
      console.log(error);
      setErrorMessage(error.data.error.message);
    }
  }

  //END COMMERCEJS FUNCTIONS

  function handleClick() {
    setShow(prevValue => !prevValue);
  }

  return (
    <div className="App">
      <Backdrop show={show} handleClick={handleClick} />
      <SideDrawerCart show={show} handleClick={handleClick} />
      <Navbar totalItems={cart.total_items} />
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" exact render={() => <Home products={products} />} />
            <Route path="/about" exact component={About} />
            <Route path="/cart" exact render={() => <Cart cart={cart} handleEmptyCart={handleEmptyCart} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/checkout" exact render={() => <Checkout captureCheckout={captureCheckout} cart={cart} error={errorMessage} order={order} />} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/shop" exact render={() => <Shop addToCart={addToCart} handleClick={handleClick} products={products} />} />
          </Switch>
        </Suspense>
      <Footer />
    </div>
  );
}

export default App;
