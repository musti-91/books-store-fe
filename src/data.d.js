// @flow

export type Genre = {
    id: string,
    name: string,
    description?: string,
};

export type Author = {
    id: string,
    name: string,
    description?: string,
};

export type Book = {
    id: string,
    name: string,
    published?: string,
    rating?: number,
    pages?: number,
    description?: string,
    awards: string[],
    languages: string[],
    coverPicture?: string,
    genre?: Genre,
    author?: Author,
};

export type Data = {
    loading: boolean,
    books: Book[],
};
