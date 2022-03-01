import React, { useContext, useEffect, useState } from 'react'
import { useQuery, gql, QueryResult } from "@apollo/client";
import ArticleCard from './ArticleCard';
import './ArticleList.css';
import { FilterContext, FilterContextType } from '../state/FilterContext';



export type ArticleType = {
  id: string,
  name: string,
  price: number,
  image_url: string;
  category: {
    id: string,
    name: string,
  }
}



const ARTICLES_QUERY = gql`
   query ArticlesFilter($search: String, $categoryIds: [ID], $priceMin: Float, $priceMax: Float, $column: String, $direction: String) {
  articlesFilter(search: $search, category_ids: $categoryIds, price_min: $priceMin, price_max: $priceMax, column: $column, direction: $direction) {
    id
    name
    price
    image_url
    category {
      id
      name
    }
  }
}
  `;


type Props = {
  cart_id: string
}


const AllArticles: React.FC<Props> = ({ cart_id }) => {

  const [page, setPage] = useState<number>(1);

  const { searchBar, categories, minPrice, maxPrice, sortByClmn, sortDir } = useContext<FilterContextType>(FilterContext)

  const result: QueryResult<any> = useQuery(ARTICLES_QUERY, {
    variables: {
      search: searchBar,
      categoryIds: categories || [""],
      priceMin: minPrice,
      priceMax: maxPrice,
      column: sortByClmn,
      direction: sortDir
    }
  });

  console.log(result)
  if (result.loading) return <div>Loading...</div>

  if (result.error) return <div>Error...</div>



  const articles: ArticleType[] = result.data.articlesFilter;
  console.log("ovo su artikli : ", articles)



  return (
    <div className="bg-white w-3/4">
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-left text-gray-900">Artikli</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
          {
            articles.map(article => <ArticleCard key={article.id} id={article.id}
              name={article.name}
              image_url={article.image_url}
              price={article.price}
              category_id={article.category.id}
              category_name={article.category.name}
              cart_id={cart_id}
            />)
          }
        </div>
      </div>
    </div >
  )
}

export default AllArticles

