import React from "react";

import Product from "./Product/Product";

import classes from "./NewProducts.module.css";

const NewProducts = () => {
    return (
        <div className={classes.NewProducts}>
            <h2>New Creations</h2>
            <div className={classes.Products}>
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default NewProducts;