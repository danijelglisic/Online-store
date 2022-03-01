import { useMutation, gql } from "@apollo/client"

const BUY_MUTATION = gql`
  mutation Mutation($cartId: ID!) {
  buy(cart_id: $cartId)
}
 `;

export const BuyMutation = (cart_id: string, refetch: any) => {
    console.log("Udje li????????????")
    const [buy, { data, error }] = useMutation<any>(BUY_MUTATION,
        {
            variables: {
                cartId: cart_id,
            },
            onCompleted: () => {
                refetch();
                console.log("Artikli su kupljeni")
            }
        });

    return buy;
}