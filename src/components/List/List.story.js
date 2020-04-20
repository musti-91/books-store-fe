// Importing global styling
import "../../styles/global.scss";

// JS import
import React from "react";
import { storiesOf } from "@storybook/react";

// Import of the component
import List from "./index";

const BOOKS = (size =>
    new Array(size).fill(undefined).map((_, i) => ({
        id: "A1",
        name: "The light of Darkness",
        published: "2019-10-10",
        coverPicture: "https://bit.ly/2NL7gjn",
        rating: i * 0.1,
        pages: i * 10,
        awards: [`${i} award`],
        languages: ["English", "French"],
        genre: {
            name: "Genre",
        },
        author: {
            name: "My Author",
        },
    })))(2);

const props = {
    books: BOOKS,
};
/**
 * Stories: List
 */
// eslint-disable-next-line no-undef
storiesOf("General.List", module).add("Default", () => <List {...props} />);
