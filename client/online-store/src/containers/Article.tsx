import React from 'react'
import { useParams } from "react-router-dom";
import { ArticleQuery } from '../queries/ArticleQuery';
import { ArticleType } from '../compontents/ArticleList';
import { gql, useMutation } from '@apollo/client'
import LastCart from '../queries/LastCart';
import { Link } from "react-router-dom";

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



const Article = () => {
    const { params } = useParams();
    const [addToCart] = useMutation<any>(ADD_TO_CART_MUTATION,
        {
            onCompleted: () => {
                console.log("Artikal je dodan u korpu")
            }
        });

    const article: ArticleType = ArticleQuery(params);

    const cart_id = LastCart();

    console.log("ARTIKAL U KARTICI JE", article)

    return (
        <div className='flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl'>
            <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'>
                    <span className="sr-only">Back</span>
                    <Link to="/"><p>  Back </p></Link>
                </button>
                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                        <img src={article.image_url} alt='' className="object-center object-cover"></img>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{article.name}</h2>
                        <section className="mt-8" aria-labelledby='price'>
                            <p className="text-2xl text-gray-900">{article.price?.toFixed(2) + "EUR"}</p>
                        </section>
                        <section className="mt-8" aria-labelledby='product-options'>
                            <form>
                                <div className="mt-10">
                                    <div className='flex items-center justify-between'>
                                        <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                                    </div>
                                    <fieldset className="mt-4">
                                        <legend className="sr-only">Chooze a size</legend>
                                        <div className="grid grid-cols-4 gap-4">
                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer undefined">
                                                <input type="radio" className="sr-only"></input>
                                                <p className=''>XXS</p>
                                                <div className='absolute -inset-px rounded-md pointer-events-none border-2 border-transparent'></div>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                <button
                                    type='button'
                                    className="mt-6 w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    onClick={
                                        () => addToCart({
                                            variables: {
                                                articleId: params,
                                                cartId: cart_id,
                                                amount: 1
                                            }
                                        })
                                    }
                                >Add to cart</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
