const express = require("express");
const knex = require("./db/db");
const app = express();
const Article = require("./resolvers/article");
const typeDefs = require("./schema/schema");
const { ApolloServer } = require("apollo-server");
const Query = require("./resolvers/Query");
const Category = require("./resolvers/Category");
const Mutation = require("./resolvers/mutation");
//app.use(express.json());

console.log("QUERY~~~", Query);

const resolvers = {
  Article,
  Query,
  Category,
  Mutation,
};

console.log("resolvers~~~", resolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`rocket server ready at ${url}`);
});
