import { useMutation } from "@apollo/client"
import { BUY_MUTATION } from "../mutations/BuyMutation";


const BuyMutation = (cart_id: string, refetch: () => void) => {
    const [buy] = useMutation<any>(BUY_MUTATION);

    const handleBuy = async () => {
        try {
            await buy({
                variables: {
                    cartId: cart_id
                }
            });
            refetch();
        } catch (error: any) {
            console.log(error)
        }
    }

    return handleBuy;
}

export default BuyMutation
