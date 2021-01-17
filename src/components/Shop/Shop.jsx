import React from "react";

import Products from "./Products/Products";
import Spinner from "../UI/Spinner/Spinner";

import classes from "./Shop.module.css";

const Shop = ({addToCart, handleClick, products}) => {
    return (
        <div className={classes.Shop}>
            {products.length === 0 ? <Spinner /> : <Products addToCart={addToCart} handleClick={handleClick} products={products} />}
        </div>
    );
}

export default Shop;