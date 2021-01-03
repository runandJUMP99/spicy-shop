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
            <div className={classes.ImageGroup}>
                <div className={classes.BigSquare}></div>
                <div className={classes.MediumSquare}></div>
                <div className={classes.LittleSquare}></div>
                <img src="https://cdn.pixabay.com/photo/2016/06/06/17/05/model-1439909_960_720.jpg" alt="Model"/>
            </div>
        </div>
    );
}

export default Jumbotron;