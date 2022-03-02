import { createContext, useState } from "react";
import { FilterContextType } from "../types/Types";

export const FilterContext = createContext<FilterContextType>({
    searchBar: "",
    setSearchBar: () => { },
    minPrice: 0.00,
    categories: [],
    setCategories: () => { },
    setMinPrice: () => { },
    maxPrice: 10000000,
    setMaxPrice: () => { },
    sortByClmn: "",
    setSortByClmn: () => { },
    sortDir: "",
    setSortDir: () => { },
});

const CtxProvider: React.FC = (props) => {

    const [searchBar, setSearchBar] = useState<string>("");
    const [categoryIds, setCategoryIds] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState<number>(0.00);
    const [maxPrice, setMaxPrice] = useState<number>(1000000);
    const [sortByClmn, setSortByClmn] = useState<string>("");
    const [sortDir, setSortDir] = useState<string>("")

    const filtersInitialState: FilterContextType = {
        searchBar: searchBar,
        setSearchBar: setSearchBar,
        categories: categoryIds,
        setCategories: setCategoryIds,
        minPrice: minPrice,
        setMinPrice: setMinPrice,
        maxPrice: maxPrice,
        setMaxPrice: setMaxPrice,
        sortByClmn: sortByClmn,
        setSortByClmn: setSortByClmn,
        sortDir: sortDir,
        setSortDir: setSortDir
    }

    return (
        <div>
            <FilterContext.Provider value={filtersInitialState}>
                {props.children}
            </FilterContext.Provider>
        </div>
    )
}

export default CtxProvider
