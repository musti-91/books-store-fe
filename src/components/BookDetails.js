import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries'

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data
    if (book) {
      const { name, genre, author } = book
      return (
        <div>
          <h2>{name}</h2>
          <p>{genre}</p>
          <p>{author.name}</p>
          {author.books.length !== 0 && (
            <div>
              <h4>All {author.name} Books: </h4>
              {book.author.books.map(item => {
                return <li key={item.id}>{item.name}</li>
              })}
            </div>
          )}
        </div>
      )
    } else {
      return <div>No book selected...</div>
    }
  }
  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>
  }
}

export default graphql(getBookQuery, {
  options: props => ({
    variables: {
      id: props.bookId
    }
  })
})(BookDetails)
