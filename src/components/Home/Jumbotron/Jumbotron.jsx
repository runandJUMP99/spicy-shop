import React from "react";

import classes from "./Jumbotron.module.css";

const Jumbotron = () => {
    return (
        <div className={classes.Jumbotron}>
            <h1>THE SPICE YOU <em>crave</em></h1>
            <button>SHOP</button>
        </div>
    );
}

export default Jumbotron;