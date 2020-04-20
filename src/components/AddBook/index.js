// @flow
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

type Props = {
    addBook: (variables: *) => void,
    getAuthors: *,
    getBooks: *,
    isOpen: boolean,
};

type State = {
    name: string,
    genre: string,
    authorId: string,
    open: false,
};
export default class AddBook extends Component<Props, State> {
    state = {
        name: "",
        genre: "",
        authorId: "",
        open: false,
    };

    static getDerivedStateFromProps(props: Props, state: State) {
        return {
            ...state,
            open: props.isOpen ? props.isOpen : false,
        };
    }

    _onChange = e => {
        const { value, name } = e.target;
        this.setState(() => ({
            [name]: value,
        }));
    };

    _onSubmit = e => {
        e.preventDefault();
        const { addBook, getBooks } = this.props;
        const { name, genre, authorId } = this.state;
        if (
            name.trim() !== "" &&
            genre.trim() !== "" &&
            authorId.trim() !== ""
        ) {
            addBook({
                variables: {
                    name,
                    genre,
                    authorId,
                },
                // update getBooks with new book.
                refetchQueries: [
                    {
                        query: getBooks,
                    },
                ],
            });
        }
    };

    _renderAuthors = () => {
        const { getAuthors } = this.props;
        if (getAuthors.loading) {
            return <option disabled>loading...</option>;
        } else {
            return getAuthors.authors.map(author => (
                <option value={author.id} key={author.id}>
                    {author.name}
                </option>
            ));
        }
    };

    render() {
        const { open } = this.state;

        return (
            <Dialog open={open}>
                <Grid>
                    <div className="add-book">
                        <DialogTitle>Add Book</DialogTitle>
                        <DialogContent>
                            <form onSubmit={this._onSubmit}>
                                <div className="field">
                                    <DialogContentText>
                                        Book name:{" "}
                                    </DialogContentText>
                                    <input
                                        type="text"
                                        onChange={this._onChange}
                                        name="name"
                                    />
                                </div>
                                <div className="field">
                                    <DialogContentText>
                                        Genre:{" "}
                                    </DialogContentText>
                                    <input
                                        type="text"
                                        onChange={this._onChange}
                                        name="genre"
                                    />
                                </div>
                                <div className="field">
                                    <DialogContentText>
                                        Author name:{" "}
                                    </DialogContentText>
                                    <select
                                        onChange={this._onChange}
                                        name="authorId"
                                    >
                                        <option>Select Author</option>
                                        {this._renderAuthors()}
                                    </select>
                                </div>
                                <DialogActions>
                                    <Button type="submit" color="primary">
                                        Add Book
                                    </Button>
                                    <Button
                                        color="danger"
                                        onClick={() =>
                                            this.setState(() => ({
                                                open: false,
                                            }))
                                        }
                                    >
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </form>
                        </DialogContent>
                    </div>
                </Grid>
            </Dialog>
        );
    }
}
