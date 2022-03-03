import { gql } from "@apollo/client";

export const ARTICLES_IN_CART = gql`
query ArticlesInCart($cartId: ID!) {
  articlesInCart(cart_id: $cartId) {
    id
    name
    price
    image_url
    category {
      id
      name
    }
  }
}`;