import React, { Component } from 'react';
import classes from './TestApp.module.css';
import ColourSelector from '../Components/Colours/ColourSelector';
import ColourShower from '../Components/Colours/ColourShower';


class ColourComponent extends Component {
    state = {
        colours:{
            Red: 0,
            Blue: 0,
            Green: 0 
        },
        visibleColour:'rgb(0,0,0)'
    }

    colourChangeHandler = (event, colour) =>{
        const newState = {
            ...this.state,
            colours:{
                ...this.state.colours,
                [colour]: event.target.value
            },
            visibleColour: `rgb(${this.state.colours.Red},${this.state.colours.Green},${this.state.colours.Blue})`
        }

        this.setState(newState);
    }

    render() {
        let colourControls = [];
        
        //map each colour to its own ColourSelector
        colourControls = Object.keys(this.state.colours).map( 
            key => (<ColourSelector 
                key={key} 
                colourName={key} 
                value={this.state.colours[key]} 
                changeHandler={(event) => this.colourChangeHandler(event, key)} />)
        )
        

        return (
            <div className={classes.Item} style={{width:this.props.width, height:this.props.height}}>
                <h1>Colour Picker</h1>
                {colourControls}
                <ColourShower colour={this.state.visibleColour}/>
            </div>
        );
    }

};

export default ColourComponent;