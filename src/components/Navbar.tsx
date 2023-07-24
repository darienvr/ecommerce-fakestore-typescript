import { useContext } from "react"
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import logo  from '../assets/logo-react.png'
import { Outlet } from "react-router-dom";
import '../App.css'
import { CartContext } from "../context/cart_context"
import { CartContextType } from "../types"
import { Sidebar } from "./Sidebar";

const Navbar = () => {

  const { openSidebar, totalQuantity } = useContext(CartContext) as CartContextType

  return (
    <>
      <div className='nav'>
        <section className='navbar'>
          <div>
              <img src={logo} className='logo'></img>
              <h2 style={{color: '#fff'}}>Fakestore API</h2>
          </div>
          <div>
              <button className='btn-navbar'>
                <div style={{color: '#fff'}}>Login</div>
                <FaUserAlt style={{color: '#fff'}}/>
              </button>
              <div>
                <button className='btn-navbar' onClick={openSidebar}>
                  <div style={{color: '#fff'}}>Cart</div>
                  <BsFillCartFill style={{color: '#fff'}} />
                </button>
                <span className='cart-quantity'>{totalQuantity}</span>
              </div>
          </div>
        </section>
      </div>
      <Sidebar />
      <div className='home'>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar