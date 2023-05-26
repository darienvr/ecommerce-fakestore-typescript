import { useContext } from 'react'
import Product from './Product'
import Sort from './Sort'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'

const ProductList = () => {

    const { filterProducts} = useContext(AppContext) as ProductContextType

  return (
    <>
        <Sort length = {filterProducts.length} />
        <div className='product-list-container'>
            {filterProducts.map((item)=>{
                return(
                    <Product key={item.id} {...item} />
                )
            })}
        </div>
    </>
  )
}

export default ProductList