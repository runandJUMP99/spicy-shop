import React from "react";

import CTAButton from "../../../UI/CTAButton/CTAButton";

import classes from "./EmptyCart.module.css";

const EmptyCart = () => {
    return (
        <div className={classes.EmptyCart}>
            <h2>Your cart is empty!</h2>
            <p>Click the button below to shop our wares.</p>
            <CTAButton />
        </div>
    );
}

export default EmptyCart;