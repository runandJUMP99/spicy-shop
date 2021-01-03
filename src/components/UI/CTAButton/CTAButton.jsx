import React from "react";
import {NavLink} from "react-router-dom";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import classes from "./CTAButton.module.css";

const CTAButton = ({styles}) => {
    return (
        <button className={classes.CTAButton} style={styles}>
            <NavLink to="/products">
                Start Shopping <ShoppingCartIcon />
            </NavLink>
        </button>
    );
}

export default CTAButton;