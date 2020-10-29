import React from 'react';
import classes from './ColourComponents.module.css';

const colourSelector = (props) => {
    //we expect props.colourName
    return (
        <div className={classes.Selector}>
            <label>{props.colourName}</label>
            <input 
            type="range" 
            id='value' 
            value={props.value} 
            name='value' 
            step='5'
            min='0' max='255' 
            onChange={props.changeHandler}/>
        </div>
    );
};

export default colourSelector;