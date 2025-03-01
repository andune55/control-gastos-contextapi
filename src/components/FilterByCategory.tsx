import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {

    const { dispatch } = useBudget() 

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: "add-filter-category", payload: {id: e.target.value}})
    }
  return (
    <div className="bg-white px-5 py-2.5">
      <form action="">        
        {/* <label htmlFor="category">Filtrar gastos</label> */}
        <select 
            id="category"
            className="bg-slate-100 p-3 w-full rounded rounded-t-none"
            onChange={handleChange}
        >
            <option value="">-- Filtrar categorías</option>
            {categories.map(category => (
                <option 
                    key={category.id}
                    value={category.id}
                >
                    {category.name}
                </option>
            ))}
        </select>       
      </form>
    </div>
  )
}
