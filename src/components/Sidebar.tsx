import { useContext } from 'react';
import { CartContextType } from '../types'
import { CartContext } from '../context/cart_context';
import CartItem from './CartItem';

export const Sidebar = () => {

    const { openSidebar, isSidebarOpen, cart } = useContext(CartContext) as CartContextType

  return (
    <div className={`${ isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
        <div className='siderbar-header'>
          {cart.length > 0 ? <h3>Shopping {cart.length} items</h3> : <h3>Your cart is empty</h3>}
          <button className='cart-btn-close' onClick={openSidebar}>X</button>
        </div>
        {cart.map((item)=>{
          return(
            <CartItem key={item.id} {...item}/>
          )
        })}
    </div>
  )
}
