export const kgToPound = weight => weight * 2.20462;
export const poundToKg = weight => weight / 2.20462;

export const tryConvert = (weight, convert) => {
    const input = parseFloat(weight);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 100000) / 100000;
    return rounded.toString();
};

export const calculateBMI = (height, weight) => {
    let bmi = weight / (height * height);
    bmi = Math.round(bmi * 1000) / 1000;
    return bmi;
};
