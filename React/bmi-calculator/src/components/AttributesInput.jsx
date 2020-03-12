import React, { Component } from 'react';

class AttributesInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    scaleNames = {
        k: 'kilograms',
        p: 'pounds',
        m: 'metres'
    };

    handleChange(e) {
        this.props.onInputChange(e.target.value);
    }

    render() {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter {this.props.attribute} in {this.scaleNames[scale]}:</legend>
                <input value={this.props.value}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default AttributesInput;
