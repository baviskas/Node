import React from 'react';

const BMIVerdict = ({BMI}) => {
    if(Number.isNaN(BMI)) {
        return null;
    } else {
        const bmiIndex = parseFloat(BMI);
        let verdict = 'your weight is normal.';
        if (bmiIndex < 18.5) {
            verdict = 'you are underweight.';
        } else if (bmiIndex>=25 && bmiIndex<=29.9) {
            verdict = 'you are overweight.';
        } else if (bmiIndex >= 30) {
            verdict = 'you are Obese.';
        }
        return <p>Your BMI is {BMI} and, {verdict}</p>;
    }
};

export default BMIVerdict;
