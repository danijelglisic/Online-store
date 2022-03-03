import React, { useEffect } from 'react'
import CartArticleCard from './CartArticleCard';
import { ArticleType } from '../../types/Types';
import useBuyMutation from '../../hooks/useBuyMutation'
import useArticlesInCartQuery from '../../hooks/useArticlesInCartQuery'

type Props = {
  cartId: string,
  cartRefetch: () => void;
}

const CartArticleList: React.FC<Props> = ({ cartId, cartRefetch }) => {

  const { data, error, loading, refetch } = useArticlesInCartQuery(cartId);
  const handleBuy = useBuyMutation(cartId, cartRefetch);

  useEffect(() => {
    refetch();
  }, [refetch])

  if (loading) return <div>Loading...</div>
  if (error || !data) return <div>Error...</div>
  const articles: ArticleType[] = data.articlesInCart;

  console.log("Ovo su artikli", articles)
  return (
    <div>
      <div className="">
        <table className="min-w-full divide-y divide-gray-200 border-y-2">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Add or remove</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {
              articles.map(article => <CartArticleCard
                key={article.id}
                article={article}
                cartId={cartId}
                refetch={refetch} />)
            }
          </tbody>
        </table>
        <div className="py-2 min-w-full divide-y divide-gray-200">
          <button type='button' className="text-left text-xs text-white uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={
              () => {
                handleBuy();
              }
            }>Buy</button>
        </div>
      </div>
    </div >
  )
}

export default CartArticleList

