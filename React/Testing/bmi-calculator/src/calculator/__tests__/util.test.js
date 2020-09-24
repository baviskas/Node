import util from "./../util";

describe("Test BMI calculator Util functions", () => {
    it("converts weight in kg to pounds", () => {
        expect(util.kgToPounds(100)).toEqual(220.462);
    });

    it("converts weight in pounds to kg", () => {
        expect(util.poundsToKg(220.462)).toEqual(100);
    });

    it("calculates BMI", () => {
        expect(util.calculateBMI(1.83,86)).toEqual(25.68);
    });

    it("converts weight based on function passed to it", () => {
        expect(util.tryConvert(100, util.kgToPounds)).toEqual(220.462);
    });

    it("returns empty string if invalid data is passed to tryConvert function", () => {
        expect(util.tryConvert(NaN, util.kgToPounds)).toEqual("");
    });
});
