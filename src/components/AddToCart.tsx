import { useState, useContext } from "react"
import AmountBtn from '../components/AmountBtn'
import { CartContext } from "../context/cart_context"
import { CartContextType } from "../types"
import type { CharacterAPIInfo } from '../types'

interface Props {
    product: CharacterAPIInfo,
}

const AddToCart = ({product}:Props) => {

    const { addToCart, openSidebar } = useContext(CartContext) as CartContextType

    const [amount, setAmount] = useState(1)

    const handleIncrease = () => {
        if(amount>=9)return
        setAmount(amount+1)
      }
    
      const handleDecrease = () => {
        if(amount<=1)return
        setAmount(amount-1)
      }

  return (
    <div>
        <AmountBtn increase={handleIncrease} decrease={handleDecrease} amount={amount}/>
        <button 
          onClick={()=>{
            addToCart(product, amount)
          }} 
          className='btn btn-primary'>Add To Cart</button>
    </div>
  )
}

export default AddToCart