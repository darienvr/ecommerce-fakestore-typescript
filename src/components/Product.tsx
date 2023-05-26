import { Link } from "react-router-dom";

interface Props {
    id: number,
    image: string,
    title: string,
    price: number,
    description: string,
}

const Product = ( {id, title, image, price}: Props ) => {
  return (
    <div className="product">
        <div className="product-image-container">
          <img src={image} className="product-image"/>
        </div>
        <div>
          <div className="product-header">
              <h6>{title}</h6>
              <p>S./{price}</p>
          </div>
          <Link to={`product/${id}`}>
            <button className="btn btn-warning btn-details">Details</button>
          </Link>
        </div>
    </div>
  )
}

export default Product