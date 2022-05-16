import React from 'react';
import './slider.css';

export default class Slider extends React.Component {

    render(){
        return(
            <div className="sliderBox">
                <label htmlFor="fontSize">{this.props.name}</label>
                <input type="range" id={this.props.id} min={this.props.min} max={this.props.max} defaultValue={this.props.value} className="slider"/>
            </div>
        )
    }
}