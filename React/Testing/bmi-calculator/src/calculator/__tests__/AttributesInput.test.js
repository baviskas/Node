import { shallowWrapper } from "./../../testUtil";
import AttributesInput from "../AttributesInput";

const handler = jest.fn();
const requiredProps = {
    scale: "k",
    attribute: "KiloGram",
    value: 100,
    handler: handler
};
const wrapComponent = (props) => {
    return shallowWrapper(AttributesInput, requiredProps, props);
};

describe("AttributesInput: ", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("Smoke Test", () => {
        it("render smoketest", () => {
            const wrapper = wrapComponent();
            expect(wrapper.debug()).toMatchSnapshot();
        });
    });

    describe("Event handlers", () => {
        const event = { target: { value: 120 }};
        const wrapper = wrapComponent();
        wrapper.find("input").simulate("change", event);
        expect(handler).toHaveBeenCalled();
    });
});
