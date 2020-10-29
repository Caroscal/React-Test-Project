import React, { Component } from 'react';
import classes from './TestApp.module.css';
import EditableInput from '../Components/Colours/Editable/EditableInput';

class InputsComponent extends Component {
    state = {
        Name: 'Bright',
        Age: 32,
        Occupation: 'Psychiatrist',
    }

    changeField = (key, event) => {
        const newState = {
            ...this.state,
            [key]: event.target.value
        };
        this.setState(newState);
    }

    render() {
        let inputs = [];
        inputs = Object.keys(this.state).map((key) => {
            return (<EditableInput 
                label={key}
                value={this.state[key]}
                changed={(event) => this.changeField(key, event)}
                />);
        });

        return(
            <div className={classes.Item} style={{width:this.props.width, height:this.props.height}}>
                <h1>Editable Input</h1>
                {inputs}
            </div>
        )
    };
};

export default InputsComponent;