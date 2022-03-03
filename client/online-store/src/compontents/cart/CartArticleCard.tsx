import React from 'react'
import { ArticleType } from '../../types/Types';
import useRemoveFromCartMutation from '../../hooks/useRemoveFromCartMutation'

type Props = {
    article: ArticleType,
    cartId: string,
    refetch: () => void
}

const CartArticleCard: React.FC<Props> = ({ article, cartId, refetch }) => {
    const handleRemoveFromCart = useRemoveFromCartMutation(article.id, cartId, refetch)

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={article.image_url} alt="" />
                    </div>
                    <div className="fml-4">
                        <div className="text-sm font-medium text-gray-900">{article.name}</div>
                        <div className="text-sm text-gray-500">VELICINA</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 text-left whitespace-nowrap">
                <div className="text-sm text-gray-900">{article.category.name}</div>
                <div className="text-sm text-gray-200">{article.category.id}</div>
            </td>
            <td className="px-6 py-4 text-left whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{article.price}</span>
            </td>
            <td className="px-6 py-4 text-left whitespace-nowrap">1 </td>
            <td className="px-6 py-4 text-left swhitespace-nowrap">
                <button onClick={
                    () => handleRemoveFromCart()
                } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" >X</button>
            </td>
        </tr >
    )
}

export default CartArticleCard
