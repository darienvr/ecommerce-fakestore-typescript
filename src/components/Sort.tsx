import { useContext } from 'react';
import { AppContext } from '../context/products_context';
import { ProductContextType } from '../types';
import { BsGridFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';



const Sort = () => {

  const { filterProducts, changeGridView, changeListView} = useContext(AppContext) as ProductContextType

  return (
    <div className="sort-container"> 
        <button onClick={changeGridView} className='btn-sort'><BsGridFill /></button>
        <button onClick={changeListView} className='btn-sort'><FaList /></button>
        <div>{filterProducts.length} Products found</div>
    </div>
  )
}

export default Sort