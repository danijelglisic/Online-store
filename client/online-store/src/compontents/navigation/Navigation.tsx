import './Navigation.css'
import { Link } from "react-router-dom";
import debounce from 'lodash.debounce';
import Fltrs from '../../mobX/State';

const Navigation = () => {
    const handleEventChange = debounce((search) => {
        Fltrs.setSearchBar(search);
    }, 300)


    return (
        <div className="bg-gray-100 nav-bar">
            <nav className="bg-gray-800">
                <div className="max-w-9xl mx-5 px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16 logo">
                        <div className="flex-1 flex items-center w-full justify-center">

                            <div className="flex-shrink-0  flex w-1/4 ">
                                <Link to="/" className="">
                                    <h1 className="text-lg text-white">Online-Store</h1>
                                </Link>
                            </div>

                            <div className=" w-1/2 mx-5 search1 ">
                                <div className="pt-2 relative mx-auto  w-full text-gray-600 search2">
                                    <input
                                        className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none input"
                                        placeholder="Search"
                                        type="search"
                                        onChange={e => handleEventChange(e.target.value)}></input>
                                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                                        <img className='text-gray-600 h-4 w-4 fill-current' src='https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640' alt=""></img>
                                    </button>
                                </div>
                            </div>
                            <Link to='/cart' className="flex-1 flex ml-14 items-center w-full w-1/4 justify-end ">
                                <div className='flex-shrink-0 flex items-center mx-10 justify-right '>
                                    <div className='relative z-0 text-white-600 h-10 w-10 rounded-md fill-current justify-right '>
                                        <img className='z-10 absolute text-white-600 h-10 w-10 rounded-md fill-current' src='https://cdn3.iconfinder.com/data/icons/e-commerce-2-2/380/1-512.png' alt=""></img>
                                        <div className='z-20 absolute rounded-lg bg-blue-500 text-white text-sm px-1 float-right' >
                                            {2}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
