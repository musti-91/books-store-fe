import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import AddBook from "../../components/AddBook";
import { addBookMutation, getAuthors, getBooks } from "../../queries";

const Composer = compose(
    graphql(getAuthors, { name: "getAuthors" }),
    graphql(getBooks, { name: "getBooks" }),
    graphql(addBookMutation, { name: "addBook" }),
);
export default Composer(AddBook);
