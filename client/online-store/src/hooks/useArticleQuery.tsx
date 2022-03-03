import { useQuery } from '@apollo/client'
import { ARTICLE_QUERY } from '../queries/ArticleQuery'

const useArticleQuery = (id: string | undefined) => {
    const { data, loading, error } = useQuery(ARTICLE_QUERY, {
        variables: {
            articleId: id,
        }
    })

    const loadingArticle = loading
    const errorLoadingArticle = error

    return { data, loadingArticle, errorLoadingArticle }
}


export default useArticleQuery;
