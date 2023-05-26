import { useContext } from 'react'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'

interface Props {
    category: string,
}

const BtnCategory = ({category}: Props) => {

  const { filterCategory } = useContext(AppContext) as ProductContextType

  return (
    <button
      onClick={()=>filterCategory(category)} 
      className="btn-categories">{category}
    </button>
  )
}

export default BtnCategory