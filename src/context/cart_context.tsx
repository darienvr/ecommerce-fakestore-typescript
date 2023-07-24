import { useState, useContext, createContext, ReactNode, useEffect} from "react";
import type { CharacterAPIInfo } from '../types'

interface Props {
    children: ReactNode;
}

const CART_STORAGE_KEY = "cart";

const CartContext = createContext({})

const CartProvider = ({children}: Props) => {

    const [cart, setCart] = useState<CharacterAPIInfo[]>([])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)|| '[]');
        setCart(savedCart); 
        setLoaded(true);
    }, []);
    
      useEffect(() => {
        if(loaded){
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        }
        
    }, [cart, loaded]);

    const totalQuantity = cart.reduce((acc, item)=>acc + item.quantity, 0);

    const addToCart = (product:CharacterAPIInfo, quantity: number) => {
        setCart(item=>{
            const tempItem = item.find(i=>i.id === product.id)
            if(tempItem){
                const newQuantity = tempItem.quantity + quantity;
                const updatedQuantity = newQuantity > 9 ? 9 : newQuantity;
                return item.map(i=>i.id === product.id 
                    ? {...i, quantity: updatedQuantity} 
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

    const increaseAmount = (id: CharacterAPIInfo['id']) => {
        const tempCart = cart.map(item=>{
            if(item.id === id){
                let newQuantity = item.quantity+1
                if(newQuantity>9) newQuantity=9
                return {...item, quantity: newQuantity}
            }
            return item
        })
        setCart(tempCart)
    }

    const decreaseAmount = (id: CharacterAPIInfo['id']) => {
        const tempCart = cart.map(item=>{
            if(item.id === id){
                let newQuantity = item.quantity-1
                if(newQuantity<1) newQuantity=1
                return {...item, quantity: newQuantity}
            }
            return item
        })
        setCart(tempCart)
    }

    return(
        <CartContext.Provider value={{
            addToCart,
            cart,
            openSidebar,
            isSidebarOpen,
            deleteItem,
            increaseAmount,
            decreaseAmount,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(CartContext)
}

export { CartContext, CartProvider}