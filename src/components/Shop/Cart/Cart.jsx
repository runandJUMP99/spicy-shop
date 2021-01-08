import React from "react";
import {NavLink} from "react-router-dom";

import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartItem from "./CartItem/CartItem";

import classes from "./Cart.module.css";

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    return (
        <div className={classes.Cart}>
            <h3>Shopping Cart</h3>
            <div className={classes.CartItems}>
                {cart.line_items && cart.line_items.map(item => (
                    <CartItem handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty} item={item} />
                ))}
            </div>
            <div className={classes.Controls}>
                <button className={classes.EmptyCart}>Empty Cart <RemoveShoppingCartIcon fontSize="large" /></button>
                <button className={classes.Checkout}><NavLink to="/checkout">Checkout <ShoppingCartIcon fontSize="large" /></NavLink></button>
            </div>
        </div>
    );
}

export default Cart;