import React from "react";

import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';

import classes from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={classes.Contact}>
            <p><a href="mailto:spicymama@spicy-shop.com"><EmailIcon />spicymama@spicy-shop.com</a></p>
            <p><a href="tel:407-555-5555"><PhoneIcon />(407) 555-5555</a></p>
            <p><a href="https://www.instagram.com/spicyshopofficial/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a></p>
        </div>
    );
}

export default Contact;