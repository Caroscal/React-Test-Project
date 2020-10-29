import React, {useState} from 'react';
import classes from './EditableInput.module.css';

//handler for setting field to not-editable if enter key is pressed
const enterHandler = (event, setEditing) => {
    if(event.charCode === 13){
        setEditing(false);
    }
}

const EditableInput = (props) => {
    const [editing, setEditing] = useState(false);


    let buttonClasses = [classes.EditButton];
    buttonClasses.push(editing ? classes.Green : classes.Blue);
    buttonClasses = buttonClasses.join(' ');

    return(
        <div className={classes.EditableInput}>
            <label>{props.label}: </label>
            {
            editing ? 
             <input   //If we're editing, show the editable input field
                type="text" 
                value={props.value} 
                onChange={props.changed} 
                onKeyPress={(event) => enterHandler(event, setEditing)}
             />:
             <p>{props.value}</p> //otherwise show the value from the property
            }
            <div className={buttonClasses} onClick={() => setEditing(!editing)}/>
        </div>
    )
};

export default EditableInput;