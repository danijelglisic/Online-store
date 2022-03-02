import Filters from '../filters/Filters'
import ArticleList from './ArticleList';
import useActiveCart from '../hooks/useActiveCart';

const Home = () => {
    const result = useActiveCart();

    if (result.loading) return <div>Loading...</div>

    if (result.error) return <div>Error...</div>

    const cartId = result.data.lastCartId;

    return (
        <div className="main">
            <ArticleList cart_id={cartId} />
            <Filters />
        </div>
    )
}

export default Home
