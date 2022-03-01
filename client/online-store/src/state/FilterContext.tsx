import { createContext } from "react";

export type FilterContextType = {
    searchBar: string,
    setSearchBar: (searchBar: string) => void,
    categories: string[],
    setCategories: (categoryIds: string[]) => void,
    minPrice: number;
    setMinPrice: (minPrice: number) => void,
    maxPrice: number,
    setMaxPrice: (maxPrice: number) => void,
    sortByClmn: string,
    setSortByClmn: (sortByClmn: string) => void,
    sortDir: string,
    setSortDir: (sortDir: string) => void,
}

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


