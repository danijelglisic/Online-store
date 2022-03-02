import { gql } from '@apollo/client'

export const ADD_TO_CART_MUTATION = gql`
  mutation Mutation($articleId: ID!, $cartId: ID!, $amount: Int!) {
  addToCart(article_id: $articleId, cart_id: $cartId, amount: $amount) {
    cart_id
    article_id
    amount
    id
  }
}
 `;