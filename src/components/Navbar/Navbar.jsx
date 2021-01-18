import React from "react";

import Links from "./Links/Links";
import Logo from "../UI/Logo/Logo";
import ToggleButton from "../UI/ToggleButton/ToggleButton";

import classes from "./Navbar.module.css";

const Navbar = ({handleClick, totalItems}) => {
    return (
        <div className={classes.Navbar}>
            <p>Free Shipping on orders of $50 or more!</p>
            <Logo />
            <nav>
                <Links totalItems={totalItems} />
            </nav>
            <ToggleButton handleClick={handleClick} />
        </div>
    );
}

export default Navbar;