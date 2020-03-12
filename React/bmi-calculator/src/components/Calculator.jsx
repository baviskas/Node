import React, { Component } from 'react';
import AttributesInput from './AttributesInput';
import BMIVerdict from './BMIVerdict';
import { kgToPound, poundToKg, tryConvert, calculateBMI }  from './../util/util';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleKGChange = this.handleKGChange.bind(this);
        this.handlePoundChange = this.handlePoundChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.state = {
            weight: '',
            height: '',
            weightScale: 'k'
        };
    }

    handleKGChange(weight) {
        this.setState({ weight, weightScale: 'k' });
    }

    handlePoundChange(weight) {
        this.setState({ weight, weightScale: 'p' });
    }

    handleHeightChange(height) {
        this.setState({height});
    }
    render() {
        const scale = this.state.weightScale;
        const weight = this.state.weight;
        const height = this.state.height;
        const kg = scale === 'p' ? tryConvert(weight, poundToKg) : weight;
        const pound = scale === 'k' ? tryConvert(weight, kgToPound) : weight;
        const BMI = calculateBMI(parseFloat(height),kg);
        return (
            <div>
                <h2>Please enter your weight & height: </h2>
                <AttributesInput
                    attribute={'Weight'}
                    scale={'k'}
                    value={kg}
                    onInputChange={this.handleKGChange}
                />
                <AttributesInput
                    attribute={'Weight'}
                    scale={'p'}
                    value={pound}
                    onInputChange={this.handlePoundChange}
                />
                <AttributesInput
                    attribute={'Height'}
                    scale={'m'}
                    value={height}
                    onInputChange={this.handleHeightChange}
                />
                <BMIVerdict BMI={BMI}/>
            </div>
        )
    }
}

export default Calculator;
