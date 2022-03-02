import React from 'react'
import ArticleCard from '../compontents/article_card/ArticleCard';
import PaginationNav from '../pagination/PaginationNav';
import { ArticleType } from '../types/Types';
import useArticles from '../hooks/useArticles'

type Props = {
  cart_id: string
}

const AllArticles: React.FC<Props> = ({ cart_id }) => {

  const { result, page, setPage } = useArticles();
  if (result.loading) return <p>Loading...</p>
  if (result.error) return <p>Error...</p>
  const articles: ArticleType[] = result.data.articlesFilter;

  return (
    <div className="bg-white w-3/4">
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-left text-gray-900">Artikli</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
          {
            articles.map(article => <ArticleCard key={article.id} article={article} />)
          }
        </div>
      </div>
      <PaginationNav page={page} setPage={setPage} />
    </div >
  )
}

export default AllArticles

