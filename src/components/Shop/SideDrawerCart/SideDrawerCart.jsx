import React from "react";

import Cart from "../Cart/Cart";

import classes from "./SideDrawerCart.module.css";

const SideDrawerCart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, handleClick, show}) => {

    return (
        <div className={classes.SideDrawer} style={{
            transform: show ? "translateX(0)" : "translateX(110%)",
        }}>
            <div>
                <Cart 
                    cart={cart} 
                    handleUpdateCartQty={handleUpdateCartQty} 
                    handleRemoveFromCart={handleRemoveFromCart} 
                    handleEmptyCart={handleEmptyCart} 
                    handleClick={handleClick} 
                    show={show}
                    styles={{justifyContent: "center"}}
                />
            </div>
        </div>
    )
}

export default SideDrawerCart;