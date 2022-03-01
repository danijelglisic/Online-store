import { gql, useQuery, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import CartArticleCard from './CartArticleCard';
import { ArticleType } from './ArticleList';
import { BuyMutation } from '../mutations/BuyMutation';



const ARTICLES_IN_CART = gql`
query ArticlesInCart($cartId: ID!) {
  articlesInCart(cart_id: $cartId) {
    id
    name
    price
    image_url
    category {
      id
      name
    }
  }
}`;
const BUY_MUTATION = gql`
mutation Mutation($cartId: ID!) {
buy(cart_id: $cartId)
}
`;

type Props = {
  cart_id: string,
  cartRefetch: () => void;
}

const CartArticleList: React.FC<Props> = ({ cart_id, cartRefetch }) => {
  // const [articles, setArticles] = useState<ArticleType[]>([]);
  const { data, error, loading, refetch } = useQuery(ARTICLES_IN_CART, {
    variables: {
      cartId: cart_id
    }
  });
  const [buy, { }] = useMutation<any>(BUY_MUTATION,
    {
      onCompleted: () => {
        cartRefetch();
        console.log("Artikli su kupljeni");
      }
    });





  useEffect(() => {
    refetch();
  }, [refetch])

  console.log('>>>>>>> data', data, loading)



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
                id={article.id}
                name={article.name}
                image_url={article.image_url}
                price={article.price}
                category_id={article.category.id}
                category_name={article.category.name}
                cart_id={cart_id}
                refetch={refetch} />)
            }
          </tbody>
        </table>
        <div className="py-2 min-w-full divide-y divide-gray-200">
          <button type='button' className="text-left text-xs text-white uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={
              () => buy({
                variables: {
                  cartId: cart_id,
                }
              })
            }>Buy</button>
        </div>
      </div>
    </div >
  )
}

export default CartArticleList

