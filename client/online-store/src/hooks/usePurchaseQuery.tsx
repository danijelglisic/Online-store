import { QueryResult, useQuery } from "@apollo/client";
import { PURCHASE_QUERY } from "../queries/PuchaseQuery";


const usePurchaseQuery = (orderId: string) => {

    const { data, loading, error, refetch }: QueryResult<any> = useQuery(PURCHASE_QUERY, {
        variables: {
            orderId: orderId
        }
    });

    return { data, loading, error, refetch }
}

export default usePurchaseQuery