import React from 'react'

type Props = {
    page: number;
    setPage: (page: number) => void;
}



const PaginationNav: React.FC<Props> = ({ page, setPage }) => {
    return (
        <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={
                        () => {
                            setPage(0);
                        }
                    }
                >
                    <svg className="h-5 w-5">
                        <path fillRule='evenodd' d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <svg className="h-5 w-5">
                        <path fillRule='evenodd' d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                </button>
                <button
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    onClick={
                        () => {
                            if (page !== 0) setPage(page - 1);
                        }
                    }
                >
                    <h2>{page + 1}</h2>
                </button>
                <button
                    className="bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"

                >
                    <h2>{page + 2}</h2>
                </button>
                <button
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    onClick={
                        () => {
                            setPage(page + 1);
                        }
                    }
                >
                    <h2>{page + 3}</h2>
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <svg className="h-5 w-5">
                        <path fillRule='evenodd' d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <svg className="h-5 w-5">
                        <path fillRule='evenodd' d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </nav>
        </div>
    )
}

export default PaginationNav
