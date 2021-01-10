import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";
import Link from "./Link/Link";

import classes from "./Links.module.css";

const Links = ({totalItems}) => {
    return (
        <ul className={classes.Links}>
            <Link link="/about" name="About Us" />
            <Link link="/contact" name="Contact Us" />
            <CTAButton totalItems={totalItems} styles={{fontSize: "1rem", padding: "0.5rem"}}/>
        </ul>
    );
}

export default Links;