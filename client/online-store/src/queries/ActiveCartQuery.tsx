import { gql } from "@apollo/client"

const ACTIVE_CART = gql`
query Query {
  lastCartId
}
`;

export default ACTIVE_CART;