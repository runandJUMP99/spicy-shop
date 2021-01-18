import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <div className={classes.AboutUs}>
            <div className={classes.Text}>
                <h2>Who Brings the Spice?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt libero et nisl aliquet, eget porta leo commodo. Vivamus at nunc elit. Nulla tempor erat sapien, non euismod turpis varius eu.</p>
                <p>Aliquam ullamcorper auctor elit, nec laoreet ex tempor sit amet. Proin lobortis ante felis, non sodales diam finibus id. Vivamus ultricies neque diam, tincidunt pulvinar nulla egestas in. Duis.</p>
                <button><NavLink to="/about">Learn More</NavLink></button>
            </div>
            <div className={classes.ImageGroup}>
                <div className={classes.BigSquare}></div>
                <div className={classes.MediumSquare}></div>
                <div className={classes.LittleSquare}></div>
                <img src="https://cdn.pixabay.com/photo/2016/11/22/10/47/woman-1848949__340.jpg" alt=""/>
            </div>
        </div>
    );
}

export default AboutUs;