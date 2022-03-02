import { useQuery } from '@apollo/client'
import { ARTICLE_QUERY } from '../queries/ArticleQuery'


const useArticleQuery = (id: string | undefined) => {
    const { data, loading, error } = useQuery(ARTICLE_QUERY, {
        variables: {
            articleId: id,
        }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error, item don't exist :(</p>
    if (data) return data.article
}


export default useArticleQuery;
