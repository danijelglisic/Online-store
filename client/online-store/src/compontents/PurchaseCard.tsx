import React from 'react'
import { useParams } from 'react-router'
import { PurchaseState } from '../mobX/PurchaseState';


const PurchaseCard = () => {

    const { params } = useParams();

    PurchaseState.useFetchPurchase(params ? params : '')

    return (
        <div className='mt-20 w-full justify-center inline-flex '>
            <table className="w-1/2  shadow-gray-500/50 divide-y divide-gray-200 border-y-2">
                <thead className="bg-gray-50">
                    <tr className=' shadow-gray-500 /50'>
                        < th scope="col" className="px-6 py-3 text-left text-bg font-medium text-gray-500 uppercase tracking-wider" > Purchase: </th >
                        <th scope="col" className="px-6 py-3 text-left text-bg font-medium text-gray-500 uppercase tracking-wider">{PurchaseState.id}</th>
                    </tr >
                </thead >
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        PurchaseState.articles.map(article => (<tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-full" src={article.imageUrl} alt="" />
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

                            <td className="px-6 py-4 text-left flex whitespace-nowrap">
                                <div className="mx-2 p-1">1</div>
                            </td>
                        </tr >))
                    }
                </tbody>
            </table >
        </div >
    )
}

export default PurchaseCard
