import React from 'react'
import { Link } from 'react-router-dom'
import { PurchaseState } from '../mobX/PurchaseState'

type Props = {
    id: string
}

const PurchaseRow: React.FC<Props> = ({ id }) => {
    PurchaseState.useFetchPurchase(id);
    return (
        <tr className='flex bg-gray-100 px-6 py-4 text-left whitespace-nowrap'>
            <div className='text-white-600 h-10 w-10 mr-2 rounded-md fill-current justify-right '>
                <img className='text-white-600 h-10 w-10 rounded-md fill-current' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7_FqnbrHnEnQF89PnAmrWx90mzGrrvClvjfEwsnEfdGxgyP8m1HQHR6bolklQuzg994&usqp=CAU' alt=""></img>
            </div>
            <div className='my-2 mx-8 '>
                {"Purchase Id:"}
            </div>
            <div className='my-2 w-1/2'>
                {id}
            </div>
            <div className='m-2 mx-8'>
                <p>Amount: {PurchaseState.articles.length}</p>
            </div>
            <Link to={`/purchase/${id}`} className="">
                <button className='text-left text-xs text-white uppercase bg-blue-500 hover:bg-blue-700 text-white h-8 font-bold my-1 px-4 border border-blue-700 rounded'>See more</button>
            </Link>
        </tr>
    )
}

export default PurchaseRow
