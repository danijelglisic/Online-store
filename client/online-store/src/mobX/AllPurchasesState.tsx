import { types, cast } from "mobx-state-tree";
import useAllPurchasesQuery from "../hooks/useAllPurchasesQuery";

export const AllPurchases = types.model({
    ids: types.array(types.string)
})
    .actions(self => ({
        useFetchPurchases() {
            const result = useAllPurchasesQuery()
            console.log("res je:>>", result)
            if (result.loading) return result
            if (result.error) return result
            const array: Array<any> = result.data.allPurchases
            self.ids = cast(array.map(a => a.id))
        }
    }))
    .create({})