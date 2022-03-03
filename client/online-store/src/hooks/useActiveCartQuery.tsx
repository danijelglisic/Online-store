import { QueryResult, useQuery } from '@apollo/client';
import ACTIVE_CART from '../queries/ActiveCartQuery';

const useActiveCartQuery = () => {
    const result: QueryResult<any> = useQuery(ACTIVE_CART);
    return result;
}

export default useActiveCartQuery
