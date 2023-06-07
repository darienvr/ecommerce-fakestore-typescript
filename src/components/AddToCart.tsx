import { useState, useContext } from "react"
import AmountBtn from '../components/AmountBtn'
import { CartContext } from "../context/cart_context"
import { CartContextType } from "../types"
import type { CharacterAPIInfo } from '../types'

interface Props {
    product: CharacterAPIInfo,
}

const AddToCart = ({product}:Props) => {

    const { addToCart } = useContext(CartContext) as CartContextType

    const [amount, setAmount] = useState(1)
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false);

    const handleIncrease = () => {
        if(amount>=9)return
        setAmount(amount+1)
      }
    
      const handleDecrease = () => {
        if(amount<=1)return
        setAmount(amount-1)
      }

    const handleClick = () => {
      addToCart(product, amount)
            setLoading(true)
            setDisabled(true)
            setTimeout(() => {
              setLoading(false)
              setDisabled(false)
              setAmount(1)
            }, 1000);
    }

  return (
    <div>
        <AmountBtn increase={handleIncrease} decrease={handleDecrease} amount={amount}/>
        <button 
          onClick={handleClick}
          className='btn btn-primary btn-add-cart'
          disabled={disabled}
          >
            {loading ? (
                <div className="spinner-border text-ligth spinner" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
            )
              : 'Add To Cart'
            }
          </button>
    </div>
  )
}

export default AddToCart