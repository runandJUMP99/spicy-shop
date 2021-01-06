import React from "react";

import Newsletter from "./Newsletter/Newsletter";

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <Newsletter />
        </div>
    );
}

export default Footer;