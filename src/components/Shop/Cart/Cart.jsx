import React from "react";
import {NavLink} from "react-router-dom";

import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartItem from "./CartItem/CartItem";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./Cart.module.css";

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    return (
        <div className={classes.Cart}>
            <h3>Shopping Cart</h3>
            <main>
                {!cart.line_items ? <Spinner /> :
                    <>
                        <div className={classes.CartItems}>
                            {cart.line_items.map(item => (
                                <CartItem key={item.id} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty} item={item} />
                            ))}
                        </div>
                        <div className={classes.Controls}>
                            <button className={classes.EmptyCart} onClick={handleEmptyCart}>Empty Cart <RemoveShoppingCartIcon fontSize="large" /></button>
                            <button className={classes.Checkout}><NavLink to="/checkout">Checkout <ShoppingCartIcon fontSize="large" /></NavLink></button>
                        </div>
                    </>
                }
            </main>
        </div>
    );
}

export default Cart;