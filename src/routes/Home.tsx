import Filter from '../components/Filter'
import Sort from '../components/Sort'
import ProductList from '../components/ProductList'
import '../styles/Home.css'


const Home = () => {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <Filter />
            </div>
            <div className='col-9'>
                <Sort />
                <ProductList />
            </div>
        </div>
    </div>
  )
}

export default Home