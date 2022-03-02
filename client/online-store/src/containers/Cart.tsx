import CartArticleList from '../compontents/cart/article_list/CartArticleList';
import useActiveCart from "../hooks/useActiveCart";



const Cart = () => {

    //aktivna korpa u bazi
    const result = useActiveCart();

    if (result.loading) return <div>Loading...</div>

    if (result.error) return <div>Error...</div>

    const cartId = result.data.lastCartId;

    return (
        <div>
            <CartArticleList cartId={cartId} cartRefetch={result.refetch} />
        </div>
    )
}

export default Cart
