import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom'
import { ArticleType } from '../../types/Types'
import Fltrs from '../../mobX/State'

type Props = {
    article: ArticleType
}

const ArticleCard: React.FC<Props> = ({ article }) => {

    return (
        <div className='group-relative pb-3 bg-gray-200 rounded-xl'>
            <Link to={`/article/${article.id}`} >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={article.image_url} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full"></img>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm m-1  px-3 float-left text-gray-700">
                            {article.name}
                        </h3>
                        <p className='mt-1 ml-1 px-3 float-left text-sm text-gray-500'>{article.category.name}</p>
                    </div>
                    <p className="text-sm mt-1 ml-1  font-medium pr-3 text-gray-900">{article.price.toString() + "EUR"}</p>
                </div>
            </Link>
        </div >
    )
}

export default ArticleCard


