import { gql } from "apollo-boost";

export const getAuthors = gql`
    {
        authors {
            id
            name
            age
            books {
                id
                name
                genre {
                    id
                    name
                }
            }
        }
    }
`;

export const getBooks = gql`
    {
        books {
            id
            name
            published
            rating
            pages
            awards
            languages
            coverPicture
            genre {
                id
                name
                description
            }
            author {
                id
                name
                description
            }
        }
    }
`;

export const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            id
            name
            genre {
                id
                name
            }
        }
    }
`;
//
export const getBookQuery = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre {
                id
                name
            }
            author {
                name
                age
                id
                books {
                    name
                    id
                }
            }
        }
    }
`;
