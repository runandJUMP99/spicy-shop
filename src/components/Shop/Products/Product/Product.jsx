import React from "react";

import {AddShoppingCart} from "@material-ui/icons";

import classes from "./Product.module.css";

const Product = ({addToCart, handleClick, product}) => {
    function addItem() {
        addToCart(product.id, 1);
        handleClick();
    }

    return (
        <div className={classes.Product}>
            <img src={product.media.source} alt={product.name} />
            <div className={classes.Text}>
                <div className={classes.TextTop}>
                    <h4>{product.name}</h4>
                    <p>{product.price.formatted_with_symbol}</p>
                </div>
                <p className={classes.Description} dangerouslySetInnerHTML={{__html: product.description}}></p>
            </div>
            <button onClick={addItem}>
                <AddShoppingCart />
            </button>
        </div>
    );
}

export default Product;