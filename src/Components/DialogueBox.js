import React from 'react';
import classes from './DialogueBox.module.css';

const DialogueBox = (props) => {

    let imgPos;
    if(props.position === 'right'){
        imgPos = {right: '0'}
    }
    else{
        imgPos = {left: '0'}
    }

    return(
        <div className={classes.Box}>
            <div className={classes.ImageSection}><img style={imgPos} src={props.image} alt='Character Portrait' /></div>
            <div className={classes.TextSection}>
                <p>{props.text}</p>
                <button onClick={props.next}>Next</button>
            </div>
        </div>
    );
};

export default DialogueBox;