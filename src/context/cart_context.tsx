import { useState, useContext, createContext, ReactNode} from "react";
import type { CharacterAPIInfo } from '../types'

interface Props {
    children: ReactNode;
}

const CartContext = createContext({})

const CartProvider = ({children}: Props) => {

    const [cart, setCart] = useState<CharacterAPIInfo[]>([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const addToCart = (product:CharacterAPIInfo, quantity: number) => {
        setCart(item=>{
            const tempItem = item.find(i=>i.id === product.id)
            if(tempItem){
                return item.map(i=>i.id === product.id 
                    ? {...i, quantity: i.quantity + quantity}
                    : i
                );
            }else{
                return [...item, {...product, quantity: quantity}]
            }
        })
        setIsSidebarOpen(true)
    }

    const openSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    } 
    
    const deleteItem = (id: CharacterAPIInfo['id']) => {
        const tempCart = cart.filter(item=>item.id !== id)
        setCart(tempCart)
    }

    return(
        <CartContext.Provider value={{
            addToCart,
            cart,
            openSidebar,
            isSidebarOpen,
            deleteItem,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(CartContext)
}

export { CartContext, CartProvider}