import GridView from "./GridView"
import ListView from "./ListView"
import { useContext } from 'react'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'


const ProductList = () => {

    const { gridView } = useContext(AppContext) as ProductContextType

    if(gridView === false){
        return(
                <ListView />
        )
    }

  return (
    <GridView />
  )
}

export default ProductList