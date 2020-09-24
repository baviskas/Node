import React from "react";

const BMIVerdict = (props) => {
    let BMI = props.bmi;
    let verdict = "Your Weight is normal";

    if(Number.isNaN(BMI)) {
        return null;
    }

    BMI = parseFloat(BMI);

    if(BMI < 18) {
        verdict = "You are UnderWeight"
    } else if(BMI >= 18 && BMI <= 25) {
        verdict = "You are Normal"
    } else if(BMI > 25 && BMI <= 30) {
        verdict = "You are Overweight"
    } else {
        verdict = "You are Obese";
    }

    return (
        <p> BMI is {BMI}. {verdict} </p>
    );
};

export default BMIVerdict;
