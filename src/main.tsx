import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppProvider } from './context/products_context.tsx'
import { CartProvider } from './context/cart_context.tsx'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './routes/Home.tsx'
import SingleProduct from './routes/SingleProduct.tsx'
import Navbar from './components/Navbar.tsx'
import NotFound from './routes/NotFound.tsx'


const router = createHashRouter([
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
      {
        path: "*",
        element: <NotFound />
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
