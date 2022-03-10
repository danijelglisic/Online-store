import { QueryResult, useQuery } from '@apollo/client';
import { ALL_PURCHASES } from '../queries/AllPurchases';

const useAllPurchasesQuery = () => {
    const result: QueryResult<any> = useQuery(ALL_PURCHASES);
    return result;
}

export default useAllPurchasesQuery