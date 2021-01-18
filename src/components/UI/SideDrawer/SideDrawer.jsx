import React from "react";

import Links from "../../Navbar/Links/Links";
import Logo from "../Logo/Logo";

import classes from "./SideDrawer.module.css";

const SideDrawer = ({show, handleClick}) => {
    function handleClick(link) {
        handleClick();
    }


    return (
        <div className={classes.SideDrawer} style={{
            transform: show ? "translateX(0)" : "translateX(-110%)",
        }}>
            <Logo />
            <nav>
                <Links handleClick={handleClick} />
            </nav>
        </div>
    )
}

export default SideDrawer;