import { gql } from '@apollo/client'

export const ARTICLES_QUERY = gql`
   query ArticlesFilter($limit: Int!, $offset: Int!, $search: String, $categoryIds: [ID], $priceMin: Float, $priceMax: Float, $column: String, $direction: String) {
  articlesFilter(limit: $limit, offset: $offset, search: $search, category_ids: $categoryIds, price_min: $priceMin, price_max: $priceMax, column: $column, direction: $direction) {
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


