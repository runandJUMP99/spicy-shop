import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';

import classes from "./CartItem.module.css";

const CartItem = ({handleRemoveFromCart, handleUpdateCartQty, item}) => {
    return (
        <div className={classes.CartItem}>
            <div className={classes.CartItemLeft}>
                <img src={item.media.source} alt=""/>
                <div className={classes.LeftText}>
                    <h4>{item.name}</h4>
                    <h5>{item.line_total.formatted_with_symbol}</h5>
                </div>
            </div>
            <div className={classes.CartItemControls}>
                <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} style={{background: "#ccc"}}>+</button>
                <button className={classes.Delete} onClick={() => handleRemoveFromCart(item.id)}><DeleteIcon /></button>
            </div>
        </div>
    );
}

export default CartItem;