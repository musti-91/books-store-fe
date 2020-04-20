/**
 * @jest-environment jsdom
 */
/* eslint-disable react/display-name */
import React from "react";
import { shallow } from "enzyme";
import MockDate from "mockdate";
/**
 *import  Component
 */
import Card from "./index";
/**
 * props
 */
const props = {
    book: {
        id: "A1",
        name: "The light of Darkness",
        published: "2019-10-10",
        coverPicture: "https://bit.ly/2NL7gjn",
        rating: 0.1,
        pages: 10,
        awards: [`award`],
        languages: ["English", "French"],
        genre: {
            name: "my genre name",
        },
        author: {
            name: "My Author",
        },
    },
};
/**
 * Tests: Card Component
 */
describe("Card Component", () => {
    beforeEach(() => {
        MockDate.set("2019-01-01 8:00");
    });
    /**
     * Snapshot:[default]
     */
    test("should match default snapshot", () => {
        expect.assertions(1);

        const wrapper = shallow(<Card {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
