import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./CTAButton.module.css";

const CTAButton = () => {
    return (
        <div className={classes.CTAButton}>
            <NavLink to="/products">
                Start Shopping
            </NavLink>
        </div>
    );
}

export default CTAButton;