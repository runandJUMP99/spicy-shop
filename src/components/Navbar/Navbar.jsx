import React from "react";

import Links from "./Links/Links";
import Logo from "../UI/Logo/Logo";

import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <Logo />
            <Links />
        </div>
    );
}

export default Navbar;