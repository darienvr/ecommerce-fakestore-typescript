import { useContext } from 'react'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'
import { Link } from "react-router-dom";

const ListView = () => {

    const { filterProducts} = useContext(AppContext) as ProductContextType

  return (
    <>
        <div className='product-list-container'>
            {filterProducts.map((item)=>{
                return(
                    <div className="product-list-view">
                        <div className="product-image-container">
                            <img src={item.image} className="product-image"/>
                        </div>
                        <div>
                            <h6>{item.title}</h6>
                            <p>S./{item.price}</p>
                            <p>{item.description.substring(0, 150)}...</p>
                            <Link to={`product/${item.id}`}>
                                <button className="btn btn-warning btn-details">Details</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default ListView