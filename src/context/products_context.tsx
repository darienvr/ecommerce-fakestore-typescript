import { useState, useEffect, useContext, createContext, ReactNode} from "react";
import type { CharacterAPIInfo } from '../types'

interface Props {
    children: ReactNode;
}

const AppContext = createContext({})

const AppProvider = ({children}: Props) => {

    const [products, setProducts] = useState<CharacterAPIInfo[]>([])
    const [filterProducts, setFilterProducts] = useState<CharacterAPIInfo[]>([])
    const [tempFilter, setTempFilter] = useState<CharacterAPIInfo[]>([])
    const [inputText, setInputText] = useState('')
    const [gridView, setGridView] = useState(true)
    const [categorySelect, setCategorySelect] = useState('All')
    const [sort, setSort] = useState('')
    const [maxPrice, setMaxPrice] = useState(0)
    const [price, setPrice] = useState(0)
    const [allCategories, setAllCategories] = useState<string[]>([])

    const fetchData = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        setFilterProducts(data)
        setTempFilter(data)
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = tempFilter.filter(item => item.title.toLocaleLowerCase().includes(e.target.value))
        setInputText(e.target.value)
        setFilterProducts(search)
    }

    const filterCategory = (category: CharacterAPIInfo['category']) => {
        if(category === 'All'){
            setCategorySelect(category)
            setTempFilter(products)
            return setFilterProducts(products)
        }
        const newProducts = products.filter(item=>item.category === category)
        setFilterProducts(newProducts)
        setTempFilter(newProducts)
        setCategorySelect(category)
    }

    const changePriceFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        setPrice(value)
    }

    const filterPrice = () => {
        if(products.length > 0){
            const prices = products.map(item=>item.price)
            const maxPrice = Math.max(...prices);
            setPrice(maxPrice)
            setMaxPrice(maxPrice)  
        }
    }

    const changeGridView = () => {
        setGridView(true)
    }

    const changeListView = () => {
        setGridView(false)
    }

    const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value)  
    }    
        
    const sortProducts = () => {
        let tempProduct:CharacterAPIInfo[] = []
        if(sort === 'price-lowest'){
            tempProduct = tempFilter.sort((a,b)=>{
                return a.price - b.price
            })   
        }
        if(sort === 'price-highest'){
            tempProduct = tempFilter.sort((a,b)=>{
                return b.price - a.price
            })  
        }
        if(sort === 'name-a'){
            tempProduct = tempFilter.sort((a,b)=>{
                return a.title.localeCompare(b.title)
            })  
        }
        if(sort === 'name-z'){
            tempProduct = tempFilter.sort((a,b)=>{
                return b.title.localeCompare(a.title)
            })  
        }
        setFilterProducts([...tempProduct])
    }

    const handleClear = () => {
        setInputText('')
        setTempFilter(products)
        setFilterProducts(products)
        setCategorySelect(allCategories[0])
        filterPrice()
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        setAllCategories(['All', ...new Set(products.map((item)=>item.category))])
        filterPrice()
    },[products])

    useEffect(()=>{
        sortProducts()
    }, [sort, categorySelect])

    useEffect(()=>{
        const tempProduct = tempFilter.filter(item=>item.price <= price)
        setFilterProducts([...tempProduct])
    },[price, categorySelect])
    

    return(
        <AppContext.Provider value={{
            products,
            filterProducts,
            allCategories,
            inputText,
            filterCategory,
            handleInput,
            gridView,
            changeGridView,
            changeListView,
            categorySelect,
            sort,
            updateSort,
            filterPrice,
            price,
            maxPrice,
            changePriceFilter,
            handleClear
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}