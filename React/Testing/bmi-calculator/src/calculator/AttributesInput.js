import React, { Component } from "react";

const scaleNames = {
    k: "Kilograms",
    p: "Pounds",
    m: "Meters"
};

export  default class AttributesInput extends Component {
    handleChange = (e) => {
      this.props.handler(e.target.value)
    };

    render() {
        const { scale, attribute, value } = this.props;
        return(
            <fieldset>
                <legend>
                    Enter {attribute} in {scaleNames[scale]}
                </legend>
                <input value={value} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
