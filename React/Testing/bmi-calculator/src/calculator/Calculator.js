import React, { Component, Fragment } from "react";
import BMIVerdict from "./BMIVerdict";
import AttributesInput from "./AttributesInput";
import util from "./util";

export default class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state = {
            weight: "",
            height: "",
            weightScale: "k"
        };
        this.handleWeightInKg = this.handleWeightInKg.bind(this);
        this.handleWeightInPounds = this.handleWeightInPounds.bind(this);
        this.handleHeight = this.handleHeight.bind(this);
    }

    handleWeightInKg (value) {
        this.setState({
            weight: value,
            weightScale: "k"
        });
    };

    handleWeightInPounds (value)  {
        this.setState({
            weight: value,
            weightScale: "p"
        });
    };

    handleHeight (value) {
        this.setState({
            height: value
        });
    };

    render() {
        const height = this.state.height;
        const weight = this.state.weight;
        const weightScale = this.state.weightScale;

        const pounds = (weightScale === 'k') ? util.tryConvert(weight, util.kgToPounds) : weight;
        const kg = (weightScale === 'p') ? util.tryConvert(weight, util.poundsToKg) : weight;

        const BMI = util.calculateBMI(parseFloat(height), weight);

        return(
            <Fragment>
                <h1>BMI Calculator:</h1>

                <AttributesInput
                    value={kg}
                    attribute={"Weight"}
                    scale={"k"}
                    handler={this.handleWeightInKg}
                />
                <AttributesInput
                    value={pounds}
                    attribute={"Weight"}
                    scale={"p"}
                    handler={this.handleWeightInPounds}
                />
                <AttributesInput
                    value={height}
                    attribute={"Height"}
                    scale={"m"}
                    handler={this.handleHeight}
                />
                <BMIVerdict bmi={ BMI}/>
            </Fragment>
        )
    }
}
