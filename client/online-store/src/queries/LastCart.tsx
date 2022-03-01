import { useQuery, gql, QueryResult } from "@apollo/client"

const LAST_CART = gql`
query Query {
  lastCartId
}
`;


const LastCart = () => {

    const result: QueryResult<any> = useQuery(LAST_CART);

    if (result.loading) return <div>Loading...</div>

    if (result.error) return <div>Error...</div>

    return result.data.lastCartId;
}

export default LastCart
