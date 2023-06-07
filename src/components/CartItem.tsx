import { useContext } from 'react';
import { CartContextType } from '../types'
import { CartContext } from '../context/cart_context';
import AmountBtn from './AmountBtn';
import { BsFillTrashFill } from 'react-icons/bs'

interface Props {
    id: number,
    image: string,
    title: string,
    price: number,
    quantity: number,
}

const CartItem = ( {id, title, image, price, quantity}:Props ) => {

    const { deleteItem, increaseAmount, decreaseAmount } = useContext(CartContext) as CartContextType

    const increase = () => {
      increaseAmount(id)
    }

    const decrease = () => {
      decreaseAmount(id)
    }

  return (
        <div className='cart-item'>
              <div className='cart-item-header'>
                <img src={image} style={{width: 50, height: 50}}/>
                <button onClick={()=>deleteItem(id)} className='cart-item-btn-delete'><BsFillTrashFill style={{color: '#a01212'}}/></button>
              </div>
              <h6>{title}</h6>
              <div className='cart-item-amount'>
                <p>S./ {price}</p>
                <AmountBtn amount={quantity} increase={increase} decrease={decrease}/>
              </div>
        </div>
  )
}

export default CartItem