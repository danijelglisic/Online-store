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

export type ArticleType = {
    id: string,
    name: string,
    price: number,
    image_url: string;
    category: CategoryType
}

export type CategoryType = {
    id: string,
    name: string,
    image_url: string,
    parent_id: string,
    articles: ArticleType[]
}