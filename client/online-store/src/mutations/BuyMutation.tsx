import { gql } from "@apollo/client"

export const BUY_MUTATION = gql`
  mutation Mutation($cartId: ID!) {
  buy(cart_id: $cartId)
}
 `;

