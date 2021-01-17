import React from "react";

import classes from "./OwnerProfile.module.css";

const OwnerProfile = ({profile}) => {
    return (
        <div className={classes.OwnerProfile}>
            <div className={classes.Text} style={{
                opacity: profile ? 1: 0,
                transform: profile ? "translateX(0)" : "translateX(-8rem)"
            }}>
                <h2>Hello.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna sit amet elit ullamcorper volutpat. Aenean fermentum euismod convallis. Cras iaculis, massa blandit venenatis commodo, orci lacus porttitor turpis, vel pretium odio felis sed diam. Donec in purus pharetra, semper nunc id, imperdiet lorem.</p>
            </div>
            <img 
                src="https://cdn.pixabay.com/photo/2020/08/06/12/28/woman-5467838__340.jpg" 
                alt="Owner Profile" 
                style={{
                    opacity: profile ? 1 : 0,
                    transform: profile ? "translateX(-10%) scaleX(-1)" : "translateX(0) scaleX(-1)"
                }} 
            />
        </div>
    );
}

export default OwnerProfile;