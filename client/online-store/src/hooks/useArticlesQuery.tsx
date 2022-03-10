import { ARTICLES_QUERY } from "../queries/ArticlesQuery"
import { useQuery, QueryResult } from "@apollo/client";
import { useState } from "react";
import Fltrs from "../mobX/State";
import { onPatch } from "mobx-state-tree";

const LIMIT: number = 10;

const useArticlesQuery = () => {

    const [page, setPage] = useState<number>(0);

    const result: QueryResult<any> = useQuery(ARTICLES_QUERY, {
        variables: {
            search: Fltrs.searchBar,
            categoryIds: Fltrs.categoryIds || [],
            priceMin: Fltrs.minPrice,
            priceMax: Fltrs.maxPrice,
            column: Fltrs.sortByClmn,
            direction: Fltrs.sortDir,
            limit: LIMIT,
            offset: page * LIMIT,
        }
    });
    onPatch(Fltrs, () => {
        result.refetch();
        console.log("Search je: ", Fltrs.searchBar)
    })

    return { result, page, setPage };
}

export default useArticlesQuery
