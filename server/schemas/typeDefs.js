const { gql } = require('apollo-server-express');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    title: String
    link: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
    bookCount: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]!
    user(id: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
    # books: [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeBook(bookId: String!): User
    saveBook(
      authors: [String]
      description: String
      bookId: String!
      image: String
      title: String!
      link: String
    ): User
  }
`;

module.exports = typeDefs;
