import { gql } from "@apollo/client";

export const ALL_PURCHASES = gql`
   query AllPurchases {
  allPurchases {
    id
  }
}
  `;