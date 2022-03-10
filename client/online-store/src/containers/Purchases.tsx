import React, { useEffect } from 'react'
import PurchasesList from '../compontents/PurchasesList';
import { AllPurchases } from '../mobX/AllPurchasesState'

const Purchases = () => {

    const result = AllPurchases.useFetchPurchases();

    if (result?.loading) return <p>Loading...</p>
    if (result?.error) return <p>Error...</p>

    console.log("AJDIDZEJEVISU: >>:", AllPurchases.ids)
    return (
        <div className="mt-20 w-full justify-center inline-flex ">
            <PurchasesList ids={AllPurchases.ids} />
        </div>
    )
}

export default Purchases
