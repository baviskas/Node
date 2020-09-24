import { shallowWrapper } from "./../../testUtil";
import BMIVerdict from "../BMIVerdict";

const requiredProps = {
    bmi: 24,
};
const wrapComponent = (props) => {
    return shallowWrapper(BMIVerdict, requiredProps, props);
};

describe("VinInput: ", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("Smoke Test", () => {
        it("render smoketest for normal weight", () => {
            const wrapper = wrapComponent();
            expect(wrapper.debug()).toMatchSnapshot();
            console.log(wrapper.debug());
        });
        it("render smoketest for over weight", () => {
            const wrapper = wrapComponent({ bmi: 29 });
            expect(wrapper.debug()).toMatchSnapshot();
        });
        it("render smoketest for under weight", () => {
            const wrapper = wrapComponent({ bmi: 17 });
            expect(wrapper.debug()).toMatchSnapshot();
        });
        it("render smoketest for Obese", () => {
            const wrapper = wrapComponent({ bmi: 32 });
            expect(wrapper.debug()).toMatchSnapshot();
        });
        it("render smoketest for NAN", () => {
            const wrapper = wrapComponent({ bmi: NaN });
            expect(wrapper.debug()).toMatchSnapshot();
        });
    });
});
