import { observer } from 'mobx-react'
import React from 'react'
import PurchaseRow from './PurchaseRow'

type Props = {
    ids: string[]
}

const PurchasesList: React.FC<Props> = ({ ids }) => {
    return (
        <table className="w-1/2  shadow-gray-500/50 divide-y divide-gray-200 border-y-2">
            <thead className="bg-gray-50">
                <tr className=' shadow-gray-500/50'>
                    <th scope="col" className="px-6 py-3 text-left text-bg font-medium text-gray-500 uppercase tracking-wider">All Purchases</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    ids.map(id => <PurchaseRow key={id} id={id} />)
                }
            </tbody>
        </table>
    )
}



export default observer(PurchasesList)
