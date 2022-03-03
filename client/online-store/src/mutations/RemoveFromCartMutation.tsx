import { gql } from "@apollo/client";

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation Mutation($articleId: ID!, $cartId: ID!) {
  removeFromCart(article_id: $articleId, cart_id: $cartId)
}
 `;