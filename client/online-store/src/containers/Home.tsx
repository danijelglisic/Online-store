import Filters from '../compontents/Filters'
import ArticleList from '../compontents/article_list/ArticleList';
import ActiveCart from '../queries/ActiveCart';
import useActiveCart from '../hooks/useActiveCart';

const Home = () => {
    const cart_id = useActiveCart();

    return (
        <div className="main">
            <ArticleList cart_id={cart_id.data.id} />
            <Filters />
        </div>
    )
}

export default Home
