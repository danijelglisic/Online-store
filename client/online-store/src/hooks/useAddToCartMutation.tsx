import { useMutation } from "@apollo/client"
import Fltrs from "../mobX/State";
import { ADD_TO_CART_MUTATION } from "../mutations/AddToCartMutation"

const useAddToCartMutation = (cart_id: string | undefined, article_id: string | undefined, amount: number | undefined) => {
    const [addToCart] = useMutation<any>(ADD_TO_CART_MUTATION, {
        onCompleted() {
            window.confirm("Artikal je dodat");
            Fltrs.setNumberInCart(Fltrs.numberInCart++);
        }
    });
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



