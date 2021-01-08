import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import classes from "./CTAButton.module.css";

const CTAButton = ({styles}) => {
    const location = useLocation();

    return (
        <button className={classes.CTAButton} style={{
            ...styles,
            borderRadius: location.pathname === "/shop" && "50%",
            display: location.pathname === "/cart" && "none"
        }}>
            <NavLink to={location.pathname === "/shop" ? "/cart" : "/shop"}>
                {location.pathname !== "/shop" && "Start Shopping"} <ShoppingCartIcon />
            </NavLink>
        </button>
    );
}

export default CTAButton;