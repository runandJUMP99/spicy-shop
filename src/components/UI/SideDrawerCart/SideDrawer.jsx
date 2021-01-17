import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./SideDrawer.module.css";

const SideDrawer = ({handleClick, show}) => {

    return (
        <div className={classes.SideDrawer} style={{
            transform: show ? "translateX(0)" : "translateX(110%)",
        }}>
            <div>
                Cart!
                <button onClick={handleClick}><NavLink to="/cart">Checkout</NavLink></button>
            </div>
        </div>
    )
}

export default SideDrawer;