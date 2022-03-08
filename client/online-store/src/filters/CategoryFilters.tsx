import { useQuery, gql } from "@apollo/client";
import Fltrs from '../mobX/State';

export type Category = {
    id: string,
    name: string,
    price: number,
    image_url: string;
    parent_id: string;
}

export type CategoryData = {
    categories: Category[];
}

const CATEGORIES_QUERY = gql`
   query Query {
  categories {
    id
    name
    image_url
    parent_id
  }}
  `;

const CategoryFilters = () => {
    const { data, loading, error } = useQuery<CategoryData>(CATEGORIES_QUERY);
    if (error) return <div>Error...</div>

    return loading ? (<div>Loading...</div>) : (
        <div className="space-y-4">
            {data?.categories.map(category => {
                return (
                    <div key={category.id} className="flex items-center">
                        <input id={category.id}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            onChange={
                                (e) => {
                                    if (e.target.checked === true) {
                                        const newC = [...Fltrs.categoryIds, category.id];
                                        Fltrs.setCategoryIds(newC);
                                        console.log("NEWC", newC)
                                    }
                                    else if (e.target.checked === false) {
                                        const newC = Fltrs.categoryIds.filter(c => c !== category.id);
                                        Fltrs.setCategoryIds(newC);
                                        console.log("NEWC", newC)
                                    }
                                }
                            }
                        />
                        <label htmlFor={category.id} className="ml-3 text-md text-gray-600">{category.name}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryFilters