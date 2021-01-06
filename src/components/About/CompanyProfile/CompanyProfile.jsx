import React from "react";

import classes from "./CompanyProfile.module.css";

const CompanyProfile = () => {
    return (
        <div className={classes.CompanyProfile}>
            <img src="https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_960_720.jpg" alt="Company Profile"/>
            <div className={classes.Text}>
                <h2>The Power of Anime!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna sit amet elit ullamcorper volutpat. Aenean fermentum euismod convallis. Cras iaculis, massa blandit venenatis commodo, orci lacus porttitor turpis, vel pretium odio felis sed diam. Donec in purus pharetra, semper nunc id, imperdiet lorem.</p>
            </div>
        </div>
    );
}

export default CompanyProfile;