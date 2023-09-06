import { useContext } from 'react'
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import ProductList from '../components/ProductList'
import '../styles/Home.css'
import { AppContext } from '../context/products_context'
import { ProductContextType } from '../types'


const Home = () => {

  const { products } = useContext(AppContext) as ProductContextType

  if(products.length > 0){
    return(
      <div className='container'>
        <div className='row'>
            <div className='col-md-3'>
                <Filter />
            </div>
            <div className='col-md-9'>
                <Sort />
                <ProductList />
            </div>
        </div>
      </div>
    )
  }

  return (
    <div className='spinner'>
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Home