import { types, cast } from "mobx-state-tree";

export const Fltrs = types.model({
    searchBar: types.optional(types.string, ""),
    categoryIds: types.optional(types.array(types.string), []),
    minPrice: types.optional(types.number, 0.00),
    maxPrice: types.optional(types.number, 100000),
    sortByClmn: types.optional(types.string, ''),
    sortDir: types.optional(types.string, ''),
    numberInCart: types.optional(types.number, 0)
})
    .actions(self => ({
        setSearchBar(newSearch: string) {
            self.searchBar = newSearch;
        },
        setCategoryIds(ids: string[]) {
            self.categoryIds = cast(ids);
        },
        setMinPrice(minPrice: number) {
            self.minPrice = minPrice;
        },
        setMaxPrice(maxPrice: number) {
            self.maxPrice = maxPrice;
        },
        setSortByClmn(clmnName: string) {
            self.sortByClmn = clmnName;
        },
        setSortDir(sortDir: string) {
            self.sortDir = sortDir;
        },
        setNumberInCart(number: number) {
            self.numberInCart = number;
        }
    }))
    .create({})



export default Fltrs


