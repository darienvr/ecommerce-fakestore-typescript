import { useContext } from 'react'
import Product from './Product'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'

const GridView = () => {

    const { filterProducts} = useContext(AppContext) as ProductContextType

  return (
    <>
        <div className='product-grid-container'>
            {filterProducts.map((item)=>{
                return(
                    <Product key={item.id} {...item} />
                )
            })}
        </div>
    </>
  )
}

export default GridView