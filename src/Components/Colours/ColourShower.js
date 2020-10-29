import React from 'react';
import classes from './ColourComponents.module.css';

const colourShower = (props) => (
    <div className={classes.Shower} style={{
        backgroundColor: props.colour
    }}></div>
);

export default colourShower;