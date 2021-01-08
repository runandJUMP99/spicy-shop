import React from "react";

import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    console.log(cart);
    return (
        <div className={classes.Cart}>
            <h3>Shopping Cart</h3>
            {cart.line_items.map(item => (
                <CartItem item={item} />
            ))}
        </div>
    );
}

export default Cart;