import Filters from '../compontents/Filters'
import ArticleList from '../compontents/ArticleList';
import LastCart from '../queries/LastCart';



const Home = () => {

    const cart_id = LastCart();

    return (
        <div className="main">
            <ArticleList cart_id={cart_id} />
            <Filters />
        </div>
    )
}

export default Home
