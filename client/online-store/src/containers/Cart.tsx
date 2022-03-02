import CartArticleList from '../compontents/cart/article_list/CartArticleList';
import useActiveCart from "../hooks/useActiveCart";



const Cart = () => {

    //poslednja korpa u bazi
    const result = useActiveCart();

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
