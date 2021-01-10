import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <h1>THE SPICE YOU <em>crave</em></h1>
            <button><NavLink to="/shop">SHOP</NavLink></button>
        </div>
    );
}

export default Jumbotron;