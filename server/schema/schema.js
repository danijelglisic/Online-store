const { gql } = require("apollo-server");

const typeDefs = gql`
  type Article {
    id: ID
    name: String
    price: Float
    image_url: String
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    image_url: String!
    parent_id: ID
    articles: [Article]
  }
  type Cart {
    id: ID!
  }
  type Order {
    id: ID!
  }
  type Cart_Articles {
    id: ID!
    cart_id: ID!
    article_id: ID!
    amount: Int!
  }
  type Order_Articles {
    id: ID!
    article_id: ID!
    order_id: ID!
    amount: Int!
  }
  type Query {
    articles: [Article]
    article(id: ID!): Article
    cart: [Cart_Articles]
    orders: [Order_Articles]
    categories: [Category]
    category(id: ID!): Category
    articlesBetween(min: Float, max: Float): [Article]
    articlesInCart(cart_id: ID!): [Article]
    articlesSortBy(column: String, direction: String): [Article]
    articlesSearch(param: String): [Article]
    articlesFilter(
      search: String
      category_ids: [ID]
      price_min: Float
      price_max: Float
      column: String
      direction: String
      limit: Int
      offset: Int
    ): [Article]
    lastCartId: ID
  }
  type Mutation {
    addToCart(article_id: ID!, cart_id: ID!, amount: Int!): Cart_Articles
    buy(cart_id: ID!): Boolean!
    removeFromCart(article_id: ID!, cart_id: ID!): Boolean
  }
`;

module.exports = typeDefs;
