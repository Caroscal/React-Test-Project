import React, { Component } from 'react';
import classes from './TestApp.module.css';
import ColourComponent from './ColourComponent';
import InputsComponent from './InputsComponent';
import DialogueComponent from './DialogueComponent';

class TestApp extends Component{

    render() {
        return (
            <div className={classes.Container}>
                <ColourComponent width='300px' height='400px' />
                <InputsComponent width='300px' height='400px' />
                <DialogueComponent width='600px' height='400px' />
            </div>
        );
    }
};

export default TestApp;