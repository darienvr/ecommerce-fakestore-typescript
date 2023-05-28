import { useContext } from 'react'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'

interface Props {
    category: string,
}

const BtnCategory = ({category}: Props) => {

  const { filterCategory, categorySelect } = useContext(AppContext) as ProductContextType

  return (
    <button
      onClick={()=>filterCategory(category)} 
      className={`${category === categorySelect ? 'btn-categories active' : 'btn-categories'}`}>
      {category}
    </button>
  )
}

export default BtnCategory