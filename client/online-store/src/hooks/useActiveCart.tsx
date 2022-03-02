import { QueryResult, useQuery } from '@apollo/client';
import ACTIVE_CART from '../queries/ActiveCart';

const useActiveCart = () => {
    const result: QueryResult<any> = useQuery(ACTIVE_CART);

    return result;
}

export default useActiveCart
