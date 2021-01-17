import React from "react";
import {NavLink, useLocation} from "react-router-dom";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import classes from "./CTAButton.module.css";

const CTAButton = ({styles, totalItems}) => {
    const location = useLocation();

    return (
        <button className={classes.CTAButton} style={{
            ...styles,
            borderRadius: location.pathname === "/shop" && "50%",
            display: location.pathname === "/cart" && "none"
        }}>
            <NavLink to={location.pathname === "/shop" ? "/cart" : "/shop"} style={{borderRadius: location.pathname === "/shop" && "50%"}}>
                <div className={classes.CartTotal} style={{display: !totalItems && "none"}}>{totalItems}</div>
                {location.pathname !== "/shop" && "Start Shopping"} <ShoppingCartIcon />
            </NavLink>
        </button>
    );
}

export default CTAButton;