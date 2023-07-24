import { useContext } from 'react';
import { CartContextType } from '../types'
import { CartContext } from '../context/cart_context';
import CartItem from './CartItem';

export const Sidebar = () => {

    const { openSidebar, isSidebarOpen, cart, totalQuantity } = useContext(CartContext) as CartContextType

    const totalPrice = cart.reduce((acc, item) => {
      return acc + item.price*item.quantity
    }, 0)

    

    const handleCheckOut = () => {
      alert('¡Función de pago en desarrollo! Esta característica estará disponible próximamente. Gracias por su comprensión y paciencia.')
    }

    if(cart.length < 1){
      return(
        <div className={`${ isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
        <div className='siderbar-header'>
          <h3>Your cart is empty</h3>
          <button className='cart-btn-close' onClick={openSidebar}>X</button>
        </div>
        </div>
      )
    }

  return (
    <div className={`${ isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
        <div className='siderbar-header'>
          <h3>Shopping <span className='cart-length'>{totalQuantity}</span> items</h3>
          <button className='cart-btn-close' onClick={openSidebar}>X</button>
        </div>
        {cart.map((item)=>{
          return(
            <CartItem key={item.id} {...item}/>
          )
        })}
        <div className='cart-total'>
          <h5>Total: </h5>
          <h3>S./ {totalPrice.toFixed(2)}</h3>
        </div>
        <button className='btn btn-primary cart-total-btn' onClick={handleCheckOut}>Proceed To Checkout</button>
    </div>
  )
}
