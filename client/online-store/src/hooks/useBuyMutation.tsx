import { useMutation } from "@apollo/client"
import { BUY_MUTATION } from "../mutations/BuyMutation";

const useBuyMutation = (cart_id: string, refetch: () => void) => {
    const [buy] = useMutation<any>(BUY_MUTATION, {
        onCompleted() {
            window.confirm("Proizvodi su kupljeni");
        }
    });

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

export default useBuyMutation
