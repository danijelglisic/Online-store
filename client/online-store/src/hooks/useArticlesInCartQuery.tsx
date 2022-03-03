import { QueryResult, useQuery } from "@apollo/client";
import { ARTICLES_IN_CART } from "../queries/ArticlesInCart"

const useArticlesInCartQuery = (cartId: string) => {

    const { data, loading, error, refetch }: QueryResult<any> = useQuery(ARTICLES_IN_CART, {
        variables: {
            cartId: cartId
        }
    });

    return { data, loading, error, refetch }
}

export default useArticlesInCartQuery
