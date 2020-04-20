// @flow
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import List from "../components/List";
import { Data } from "../data.d";
import { getBooks } from "../queries";
import AddBook from "./AddBook";

type Props = {
    data: Data,
};
type State = {
    addBookModal: boolean,
};
class App extends Component<Props, State> {
    state = {
        addBookModal: false,
    };
    render() {
        const { data } = this.props;
        const { addBookModal } = this.state;
        return (
            <div className="main-container">
                {data.loading && this._renderLoading()}
                {!data.loading && data.books && <List books={data.books} />}
                <Button
                    label="Add Book"
                    onClick={() =>
                        this.setState(() => ({ addBookModal: !addBookModal }))
                    }
                >
                    {"Add book"}
                </Button>
                {addBookModal && <AddBook isOpen={true} />}
            </div>
        );
    }
    _renderLoading = () => {
        return <div>Loading ....</div>;
    };
}

export default graphql(getBooks)(App);
