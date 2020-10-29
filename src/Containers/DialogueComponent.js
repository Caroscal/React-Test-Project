import React, { Component } from 'react';
import DialogueBox from '../Components/DialogueBox';
import classes from './TestApp.module.css';

class DialogueComponent extends Component{
    state = {
        Dialogues: [
            this.DialogueItem(
                'This is an example of some dialogue that can be displayed into the box',
                'http://pm1.narvii.com/6088/9be8a07e5eb8d8a23d1162f289c314d0abc133ed_hq.jpg',
                'left'
            ),
            this.DialogueItem(
                'ZZZZZzzzzz...',
                'https://pm1.narvii.com/6088/1de48357872d139d58cd0dc8d0d2f9b0a83add63_hq.jpg',
                'right'
            ),
            this.DialogueItem(
                '.....',
                'http://pm1.narvii.com/6088/9be8a07e5eb8d8a23d1162f289c314d0abc133ed_hq.jpg',
                'left'
            )
        ],
        counter: 0
    }

    DialogueItem(dialogue, image, position){
        return {
            dialogue: dialogue,
            image: image,
            position: position
        }
    }

    nextDialogue = () => {
        let newCounter = this.state.counter + 1;

        if(newCounter >= this.state.Dialogues.length){
            newCounter = 0;
        }

        const newState = {
            ...this.state,
            counter: newCounter            
        }

        this.setState(newState);
    }

    render () {
        return(
            <div className={classes.Item} style={{width:this.props.width, height:this.props.height}}>
                <h1>Dialogue Box</h1>
                <DialogueBox 
                    next={this.nextDialogue}
                    text={this.state.Dialogues[this.state.counter].dialogue} 
                    image={this.state.Dialogues[this.state.counter].image}
                    position={this.state.Dialogues[this.state.counter].position}/>
            </div>
        );
    }
}

export default DialogueComponent;