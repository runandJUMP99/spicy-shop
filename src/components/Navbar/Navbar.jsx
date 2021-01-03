import React from "react";

import Links from "./Links/Links";
import Logo from "../UI/Logo/Logo";

import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <p>Free Shipping on orders of $50 or more!</p>
            <Logo />
            <Links />
        </div>
    );
}

export default Navbar;