import React from 'react';

import classes from './Spinner.module.css';

const Spinner = ({color}) => (
    <div className={classes.LdsRipple}><div style={color}></div><div style={color}></div></div>
);

export default Spinner;