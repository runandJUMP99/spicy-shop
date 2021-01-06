import React from "react";
import {Link} from "react-router-dom";

import classes from "./Links.module.css";

const Links = () => {
    function handleClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className={classes.Links}>
            <Link onClick={handleClick} to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
    );
}

export default Links;