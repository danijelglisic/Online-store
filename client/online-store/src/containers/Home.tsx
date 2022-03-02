import Filters from '../filters/Filters'
import ArticleList from './ArticleList';

const Home = () => {
    return (
        <div className="main">
            <ArticleList />
            <Filters />
        </div>
    )
}

export default Home
