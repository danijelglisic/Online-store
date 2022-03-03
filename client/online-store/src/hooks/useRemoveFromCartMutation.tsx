import { useMutation } from "@apollo/client"
import { REMOVE_FROM_CART_MUTATION } from "../mutations/RemoveFromCartMutation"

const useRemoveFromCartMutation = (articleId: any, cartId: any, refetch: () => void) => {
    const [removeFromCart] = useMutation(REMOVE_FROM_CART_MUTATION);

    const handleRemoveFromCart = async () => {
        try {
            await removeFromCart({
                variables: {
                    articleId: articleId,
                    cartId: cartId
                }
            });
            refetch();
        } catch (error: any) {
            console.log(error)
        }
    }
    return handleRemoveFromCart
}

export default useRemoveFromCartMutation
