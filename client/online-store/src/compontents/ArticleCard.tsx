import { useMutation, gql } from "@apollo/client";
import React from 'react'
import './ArticleCard.css'
import { Link } from 'react-router-dom'


type Props = {
    id: string;
    name: string;
    image_url: string;
    price: number;
    category_id: string;
    category_name: string;
    cart_id: string;
}

const ADD_TO_CART_MUTATION = gql`
  mutation Mutation($articleId: ID!, $cartId: ID!, $amount: Int!) {
  addToCart(article_id: $articleId, cart_id: $cartId, amount: $amount) {
    cart_id
    article_id
    amount
    id
  }
}
 `;

const ArticleCard: React.FC<Props> = ({ id, name, image_url, price, category_id, category_name, cart_id }) => {
    const [addToCart] = useMutation<any>(ADD_TO_CART_MUTATION,
        {
            onCompleted: () => {
                console.log("Artikal je dodan u korpu")
            }
        });

    return (
        <div className='group-relative pb-3 bg-gray-200 rounded-xl'>
            <Link to={`/article/${id}`} >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src={image_url} alt="" className="w-full h-full object-center object-cover lg:w-full lg:h-full"></img>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm m-1  px-3 float-left text-gray-700">
                            {name}
                        </h3>
                        <p className='mt-1 ml-1 px-3 float-left text-sm text-gray-500'>{category_name}</p>
                    </div>
                    <p className="text-sm mt-1 ml-1  font-medium pr-3 text-gray-900">{price.toString() + "EUR"}</p>
                </div>
            </Link>
        </div >
    )
}

export default ArticleCard


