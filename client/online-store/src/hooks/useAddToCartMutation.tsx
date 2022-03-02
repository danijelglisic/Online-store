import { useMutation } from "@apollo/client"
import { ADD_TO_CART_MUTATION } from "../mutations/AddToCartMutation"


const useAddToCartMutation = (cart_id: string | undefined, article_id: string | undefined, amount: number | undefined) => {
    const [addToCart] = useMutation<any>(ADD_TO_CART_MUTATION);

    const handleAddToCart = async () => {
        try {
            await addToCart({
                variables: {
                    cartId: cart_id,
                    articleId: article_id,
                    amount: 1,
                }
            });
        } catch (error: any) {
            console.log(error)
        }


    }

    return handleAddToCart;
}

export default useAddToCartMutation



