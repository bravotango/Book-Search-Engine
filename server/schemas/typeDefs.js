const { gql } = require('apollo-server-express');

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
    savedBooks: [Book!]!
    bookCount: Int
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]!
    user(UserId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(UserId: ID!, skill: String!): User
    removeUser: User
    removeSkill(skill: String!): User
  }
`;

module.exports = typeDefs;
