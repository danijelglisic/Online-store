import { ARTICLES_QUERY } from "../queries/ArticlesQuery"
import { useQuery, QueryResult } from "@apollo/client";
import { useContext, useState } from "react";
import { FilterContextType } from "../types/Types";
import { FilterContext } from "../state/FilterContext";



const LIMIT: number = 4;

const useArticles = () => {

    const [page, setPage] = useState<number>(0);
    const { searchBar, categories, minPrice, maxPrice, sortByClmn, sortDir } = useContext<FilterContextType>(FilterContext)

    const result: QueryResult<any> = useQuery(ARTICLES_QUERY, {
        variables: {
            search: searchBar,
            categoryIds: categories || [""],
            priceMin: minPrice,
            priceMax: maxPrice,
            column: sortByClmn,
            direction: sortDir,
            limit: LIMIT,
            offset: page * LIMIT,
        }
    });



    return { result, page, setPage };
}

export default useArticles
