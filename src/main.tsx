import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppProvider } from './context/products_context.tsx'
import { CartProvider } from './context/cart_context.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'
import SingleProduct from './routes/SingleProduct.tsx'
import Navbar from './components/Navbar.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <SingleProduct />
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider> 
    </AppProvider>
  </React.StrictMode>,
)
