import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "./styles/global.scss";

require("dotenv").config();

// TODO:
// 1. Add Material ui
// 2. Config storybook: restructure Components
// 3. restructure files.
// 4: fix an issue caused running app.
// 5: Add Flowtype
// 6: Add redux?

// apollo client
const client = new ApolloClient({
    uri: `${process.env.REACT_APP_BASE_API}/graphql`,
});
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    // eslint-disable-next-line
    document.getElementById("root"),
);
