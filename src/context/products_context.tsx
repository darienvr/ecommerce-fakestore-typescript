import { useState, useEffect, useContext, createContext, ReactNode} from "react";
import type { CharacterAPIInfo } from '../types'

interface Props {
    children: ReactNode;
}

const AppContext = createContext({})

const AppProvider = ({children}: Props) => {

    const [products, setProducts] = useState<CharacterAPIInfo[]>([])
    const [filterProducts, setFilterProducts] = useState<CharacterAPIInfo[]>([])
    const [inputText, setInputText] = useState('')
    const [gridView, setGridView] = useState(true)
    const [categorySelect, setCategorySelect] = useState('All')

    const fetchData = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        setFilterProducts(data)
    }

    const AllCategories = ['All', ...new Set(products.map((item)=>item.category))]

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = products.filter(item => item.title.toLocaleLowerCase().includes(e.target.value))
        setInputText(e.target.value)
        setFilterProducts(search)
    }

    const filterCategory = (category: CharacterAPIInfo['category']) => {
        if(category === 'All'){
            setCategorySelect(category)
            return setFilterProducts(products)
        }
        const newProducts = products.filter(item=>item.category === category)
        setFilterProducts(newProducts)
        setCategorySelect(category)
    }

    const changeGridView = () => {
        setGridView(true)
    }

    const changeListView = () => {
        setGridView(false)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <AppContext.Provider value={{
            products,
            filterProducts,
            AllCategories,
            inputText,
            filterCategory,
            handleInput,
            gridView,
            changeGridView,
            changeListView,
            categorySelect,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}