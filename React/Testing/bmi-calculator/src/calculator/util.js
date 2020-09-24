const kgToPounds = (weight) => {
    return weight * 2.20462
};

const poundsToKg = (weight) => {
    return weight / 2.20462
};

const tryConvert = (weight, convert) => {
    if(Number.isNaN(weight)) {
        return "";
    }
    const input = parseFloat(weight);
    const output = convert(input);

    return (Math.round(output * 1000)/ 1000) || "";
};

const calculateBMI = (height, weight) => {
    let bmi = weight /(height * height);
    bmi = Math.round(bmi * 1000)/ 1000;
    return bmi
};


export default {
  kgToPounds,
  poundsToKg,
  tryConvert,
  calculateBMI,
};

