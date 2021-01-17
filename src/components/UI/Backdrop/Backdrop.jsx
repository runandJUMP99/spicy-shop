import React from "react";

import classes from "./Backdrop.module.css";

function Backdrop({handleClick, show}) {
    return <div className={classes.Backdrop} onClick={handleClick} style={{
                display: show ? "block" : "none",
                opacity: show ? 1 : 0,
                zIndex: show ? 50 : 0
                }}>
            </div>;
}

export default Backdrop;