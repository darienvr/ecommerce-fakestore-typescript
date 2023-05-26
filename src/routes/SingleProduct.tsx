import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import type { CharacterAPIInfo } from '../types'
import '../styles/SingleProduct.css'
import AddToCart from '../components/AddToCart'

const SingleProduct = () => {

    let { id } = useParams();
    const [singleProduct, setSingleProduct] = useState<CharacterAPIInfo>()

    const fetchSingleProduct = async() => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        setSingleProduct(data)
    }

    useEffect(()=>{
        fetchSingleProduct()
    },[id])

    if(singleProduct){
        return(
            <>
                <div className='single-product-container'>
                    <img src={singleProduct.image}/>
                    <div className='single-product-header'>
                        <h2>{singleProduct.title}</h2>
                        <h5>S./ {singleProduct.price}</h5>
                        <p>{singleProduct.description}</p>
                        <AddToCart product={singleProduct}/>
                    </div>
                </div>
                <Link to={'/'}>
                    <button className='btn btn-warning'>Back To Product</button>
                </Link>
            </>
        )    
    }else{
        return <h1>Loading</h1>
    }
}

export default SingleProduct