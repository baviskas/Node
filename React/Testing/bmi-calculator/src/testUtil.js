import React from "react";
import { shallow } from "enzyme";

export const shallowWrapper = (testComponent, requiredProps = {}, props = {}) => {
    const Component = testComponent;
    const wrapper = shallow(<Component {...requiredProps} {...props} />);
    return wrapper;
};

