import { useContext } from 'react';
import { AppContext } from '../context/products_context';
import { ProductContextType } from '../types';
import { BsGridFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';



const Sort = () => {

  const { filterProducts, changeGridView, changeListView, gridView, sort, updateSort} = useContext(AppContext) as ProductContextType

  return (
    <div className="sort-container"> 
        <div className='sort-view'>
          <div>
            <button onClick={changeGridView} className={`${ gridView ? 'btn-sort active' : 'btn-sort'}`}><BsGridFill /></button>
            <button onClick={changeListView} className={`${ !gridView ? 'btn-sort active' : 'btn-sort'}`}><FaList /></button>
          </div>
          <div>{filterProducts.length} Products found</div>
        </div>
        <div className='sort-select'>
          <div>Sort By</div>
          <select
            value={sort}
            onChange={updateSort}
            className='sort-options'
          >
            <option value='' disabled>Choose an option</option>
            <option value='price-lowest'>price (lowest)</option>
            <option value='price-highest'>price (highest)</option>
            <option value='name-a'>name (a-z)</option>
            <option value='name-z'>name (z-a)</option>
          </select>
        </div>
    </div>
  )
}

export default Sort