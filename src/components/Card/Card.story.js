// Importing global styling
import "../../styles/global.scss";

// JS import
import React from "react";
import { storiesOf } from "@storybook/react";
// Action addons
// import { action } from "@storybook/addon-actions";
// Import of the component
import Card from "./index";

/**
 * Props
 * NOTE: that if you want knobs like [boolean, or text], better to use down directly
 * Otherwise Storybook knobs will not effect changes
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
            id: "AE",
            name: "Genre",
        },
        author: {
            id: "AZ",
            name: "My Author",
        },
    },
};
/**
 * Stories: Card
 */
// eslint-disable-next-line no-undef
storiesOf("General.Card", module)
    .addDecorator(storyFn => <div style={{ margin: "2em" }}>{storyFn()}</div>)
    .add("Default", () => <Card {...props} />);
