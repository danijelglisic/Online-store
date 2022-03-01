import React from 'react'

import {
    useQuery,
    gql,
    QueryResult
} from "@apollo/client";
import CartArticleList from '../compontents/CartArticleList';


const LAST_CART = gql`
query Query {
  lastCartId
}
`;

const Cart = () => {

    //poslednja korpa u bazi
    const result: QueryResult<any> = useQuery(LAST_CART);

    if (result.loading) return <div>Loading...</div>

    if (result.error) return <div>Error...</div>

    console.log("OVO JE LAST CART: >> ", result)
    const cart_id = result.data.lastCartId;

    return (
        <div>
            <CartArticleList cart_id={cart_id} cartRefetch={result.refetch} />
        </div>
    )
}

export default Cart
