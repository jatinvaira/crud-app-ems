const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    age: String!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    age: String!
    dateOfJoining: String!
    title: String!
    department: String!
    employeeType: String!
    
  }
`;

module.exports = typeDefs;
