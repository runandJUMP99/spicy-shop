import React from "react";

import CTAButton from "../../UI/CTAButton/CTAButton";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <div className={classes.Text}>
                <h1>THE SPICE YOU <em>crave</em></h1>
                <CTAButton />
            </div>
            <img src="" alt="Model"/>
        </div>
    );
}

export default Jumbotron;