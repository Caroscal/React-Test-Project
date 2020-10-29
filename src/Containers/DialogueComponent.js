import React, { Component } from 'react';
import classes from './TestApp.module.css';

class DialogueComponent extends Component{
    state = {
        Dialogues: [
            this.DialogueItem(
                'This is an example of some dialogue that can be displayed into the box'
                ,'http://pm1.narvii.com/6088/9be8a07e5eb8d8a23d1162f289c314d0abc133ed_hq.jpg'
            ),
            this.DialogueItem(
                'ZZZZZzzzzz...'
                ,'https://pm1.narvii.com/6088/1de48357872d139d58cd0dc8d0d2f9b0a83add63_hq.jpg'
            ),
            this.DialogueItem(
                '.....'
                ,'http://pm1.narvii.com/6088/9be8a07e5eb8d8a23d1162f289c314d0abc133ed_hq.jpg'
            )
        ],
        counter: 0
    }

    DialogueItem(dialogue, image){
        return {
            dialogue: dialogue,
            image: image
        }
    }

    render () {
        return(
            <div className={classes.Item} style={{width:this.props.width, height:this.props.height}}>
                <h1>Dialogue Box</h1>
            </div>
        );
    }
}

export default DialogueComponent;