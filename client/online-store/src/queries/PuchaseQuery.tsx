import { gql } from "@apollo/client";

export const PURCHASE_QUERY = gql`
query Purchase($orderId: ID!) {
  purchase(order_id: $orderId) {
    id
    name
    price
    image_url
    category {
      id
      name
      image_url
      parent_id
    }
  }
}`;