import React from "react";

import CTAButton from "../UI/CTAButton/CTAButton";

import classes from "./CTASection.module.css";

const CTASection = () => {
    return (
        <div className={classes.CTASection}>
            <h1>Hot girl nerds! Anime lovers! Let us create our own corner of the universe!</h1>
            <CTAButton />
        </div>
    );
}

export default CTASection;