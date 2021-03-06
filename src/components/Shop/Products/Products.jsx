import React from "react";

import Product from "./Product/Product";

import classes from "./Products.module.css";

const Products = ({addToCart, handleClick, products}) => {
    return (
        <div className={classes.Products}>
            {products.map(product => (
                <Product key={product.id} addToCart={addToCart} handleClick={handleClick} product={product} />
            ))}
        </div>
    );
}

export default Products;