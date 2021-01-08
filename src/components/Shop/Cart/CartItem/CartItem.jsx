import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';

import classes from "./CartItem.module.css";

const CartItem = ({item}) => {
    console.log(item);
    return (
        <div className={classes.CartItem}>
            <div className={classes.CartItemLeft}>
                <img src={item.media.source} alt=""/>
                <div className={classes.LeftText}>
                    <h4>{item.name}</h4>
                    <h5>{item.line_total.formatted_with_symbol}</h5>
                </div>
            </div>
            <div className={classes.CartItemRight}>
                <button>+</button>
                <p>{item.quantity}</p>
                <button>-</button>
            </div>
            <button><DeleteIcon /></button>
        </div>
    );
}

export default CartItem;