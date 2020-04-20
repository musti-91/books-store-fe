/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from "react";
import { shallow } from "enzyme";
/**
 *import  Component
 */
import List from "./index";
/**
 * props
 */
const props = {};
/**
 * Tests: List Component
 */
describe("List Component", () => {
    /**
     * Snapshot:[default]
     */
    test("should match default snapshot", () => {
        expect.assertions(1);

        const wrapper = shallow(<List {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
