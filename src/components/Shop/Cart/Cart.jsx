import React from "react";
import {NavLink} from "react-router-dom";

import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartItem from "./CartItem/CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";
import Spinner from "../../UI/Spinner/Spinner";

import classes from "./Cart.module.css";

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, handleClick, show, styles}) => {
    function handleEmpty() {
        if (show) {
            handleClick();
        }
        handleEmptyCart();
    }

    return (
        <div className={classes.Cart}>
            <h3>Shopping Cart</h3>
            <main>
                {!cart.line_items ? <Spinner /> : cart.line_items.length === 0 ? <EmptyCart /> :
                    <>
                        <div className={classes.CartItems}>
                            {cart.line_items.map(item => (
                                <CartItem key={item.id} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty} item={item} />
                            ))}
                        </div>
                        <div className={classes.Controls} style={styles}>
                            <button className={classes.EmptyCart} onClick={handleEmpty}>Empty Cart <RemoveShoppingCartIcon /></button>
                            <button className={classes.Checkout} onClick={show ? handleClick : undefined}><NavLink to="/checkout">Checkout <ShoppingCartIcon /></NavLink></button>
                        </div>
                    </>
                }
            </main>
        </div>
    );
}

export default Cart;