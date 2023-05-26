import BtnCategory from "./BtnCategory"
import { useContext } from 'react'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'

const Filter = () => {

  const { AllCategories, inputText, handleInput } = useContext(AppContext) as ProductContextType

  return (
    <div className="filter-container">
      <input value={inputText} className="filter-input" placeholder="Search" onChange={handleInput}/>
      <div className="categories-container">
        <h5>Category</h5>
        {AllCategories.map((item, index)=>{
          return(
            <BtnCategory key={index} category={item}/>
          )
        })}
      </div>
      <button className="btn btn-danger">Clear Filters</button>
    </div>
  )
}

export default Filter