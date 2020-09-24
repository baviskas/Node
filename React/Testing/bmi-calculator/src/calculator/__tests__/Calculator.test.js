import { shallowWrapper } from "./../../testUtil";
import Calculator from "../Calculator";

const requiredProps = {};
const wrapComponent = (props) => {
    return shallowWrapper(Calculator, requiredProps, props);
};

describe("Calculator: ", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("Smoke Test", () => {
        it("render smoketest", () => {
            const wrapper = wrapComponent();
            expect(wrapper.debug()).toMatchSnapshot();
        });
    });

    describe("Test methods", () => {
       it("sets weight in state in kg", () => {
           const wrapper = wrapComponent();
           wrapper.instance().handleWeightInKg(100);
           expect(wrapper.instance().state.weight).toEqual(100);
           expect(wrapper.instance().state.weightScale).toEqual("k");
       });

        it("sets weight in state in pounds", () => {
            const wrapper = wrapComponent();
            wrapper.instance().handleWeightInPounds(100);
            expect(wrapper.instance().state.weight).toEqual(100);
            expect(wrapper.instance().state.weightScale).toEqual("p");
        });

        it("sets height in state", () => {
            const wrapper = wrapComponent();
            wrapper.instance().handleHeight(1.80);
            expect(wrapper.instance().state.height).toEqual(1.80);
        });
    });
});
