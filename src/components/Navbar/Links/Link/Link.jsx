import React from "react";
import {NavLink} from "react-router-dom";

import classes from "./Link.module.css";

const Link = ({link, name}) => {
    return (
        <li className={classes.Link}>
            <NavLink to={link}>
                {name}
            </NavLink>
        </li>
    );
}

export default Link;