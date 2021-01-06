import React from "react";

import Contact from "./Contact/Contact";
import FooterBottom from "./FooterBottom/FooterBottom";
import Links from "./Links/Links";
import Newsletter from "./Newsletter/Newsletter";

import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.MainContent}>
                <Links />
                <Contact />
                <Newsletter />
            </div>
            <FooterBottom />
        </div>
    );
}

export default Footer;