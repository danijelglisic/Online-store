import { ArticleType } from "../compontents/ArticleList";
import { gql, useQuery } from '@apollo/client'

const ARTICLES_QUERY = gql`
   query Query($articleId: ID!) {
  article(id: $articleId) {
    id
    name
    price
    image_url
    category {
      id
      name
    }
  }
   }
  `;

export const ArticleQuery = (id: string | undefined) => {
    const { data, loading, error } = useQuery(ARTICLES_QUERY, {
        variables: {
            articleId: id,
        }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error, item don't exist :(</p>
    if (data) return data.article
}