// @flow

// $FlowFixMe: resolve file
import "./list.scss";

import React from "react";
import Card from "../Card";
import { type Book } from "../../data.d";
/**
 * @author
 * @function List
 **/

type Props = {
    books: Book[],
};
const List = ({ books }: Props) => {
    return (
        <div className="list">
            {books &&
                books.length !== 0 &&
                books.map((book, i) => (
                    <Card key={`book-key-${i}`} book={book} />
                ))}
        </div>
    );
};

export default List;
