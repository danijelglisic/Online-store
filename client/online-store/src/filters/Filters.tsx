import React, { useContext, useState } from 'react'
import Select from 'react-select'
import CategoryFilters from './CategoryFilters'
import './Filters.css'
import { FilterContext } from '../state/FilterContext';
import { FilterContextType } from '../types/Types';

type tmpState = {
    minPrice: number,
    maxPrice: number,
    sortByClmn: string,
    sortDir: string,
}

const Filters = () => {

    const { setMinPrice, setMaxPrice, setSortByClmn, setSortDir } = useContext<FilterContextType>(FilterContext)
    const [tmpState, setTmpState] = useState<tmpState>({
        minPrice: 0.0,
        maxPrice: 10000000,
        sortByClmn: "",
        sortDir: ""
    });

    return (
        <div className="w-1/4 max-w-2xl mx-auto py-5 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
            <label className="py-3 bg-white w-full flex items-center justify-between text-lg text-gray-600 ">Categories </label>
            <CategoryFilters />
            <div>
                <label htmlFor="minPrice" className="py-3 bg-white w-full flex items-center justify-between text-lg text-gray-600">Min price</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-lg">$</span>
                    </div>
                    <input type="number"
                        id="minPrice"
                        placeholder="0.00"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-lg border-gray-300 rounded-md"
                        onChange={
                            e => {
                                setTmpState(prev => (
                                    {
                                        ...prev,
                                        minPrice: e.target.valueAsNumber || 0.00
                                    }
                                ))
                            }
                        }></input>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <p className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-lg rounded-md">EUR</p>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="maxPrice" className="py-3 bg-white w-full flex items-center justify-between text-lg text-gray-600">Max price</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-lg">$</span>
                    </div>
                    <input type="number"
                        id="maxPrice"
                        placeholder="0.00"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-lg border-gray-300 rounded-md"
                        onChange={
                            e => {
                                setTmpState(prev => (
                                    {
                                        ...prev,
                                        maxPrice: e.target.valueAsNumber || 1000000
                                    }
                                ))
                            }
                        }></input>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <p className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-lg rounded-md">EUR</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="sortBy" className="pt-3 bg-white w-full flex items-center justify-between text-lg text-gray-600">Sort By</label>
                <div className="w-full flex">
                    <Select
                        className="w-1/2 md-2 ml-0 p-4 pl-0"
                        options={[
                            { value: "name", label: "Name" },
                            { value: "price", label: "Price" },
                            { value: "category", label: "Category" }
                        ]}
                        onChange={
                            e => {
                                setTmpState(prev => (
                                    {
                                        ...prev,
                                        sortByClmn: e?.value || ""
                                    }
                                ))
                            }
                        } />
                    <Select className="w-1/2 md-2 ml-0 p-4 pl-0"
                        options={[
                            { value: "asc", label: "Ascending" },
                            { value: "desc", label: "Descendig" }
                        ]}
                        onChange={
                            e => {
                                setTmpState(prev => (
                                    {
                                        ...prev,
                                        sortDir: e?.value || ""
                                    }
                                ))
                            }
                        } />
                </div>
            </div>
            <button type="button"
                className="text-left  float-left text-md text-white uppercase my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded"
                onClick={
                    () => {
                        setMaxPrice(tmpState.maxPrice);
                        setMinPrice(tmpState.minPrice);
                        setSortByClmn(tmpState.sortByClmn);
                        setSortDir(tmpState.sortDir);
                    }
                }
            >Apply</button>
        </div>
    )
}

export default Filters
