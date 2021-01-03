import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/products" exact component={Products} />
          </Switch>
        </Suspense>
      <Footer />
    </div>
  );
}

export default App;
