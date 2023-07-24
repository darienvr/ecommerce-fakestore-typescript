export interface CharacterAPIInfo {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
    quantity:    number;
}

export interface Rating {
    rate:  number;
    count: number;
}

export type ProductContextType = {
    products: CharacterAPIInfo[];
    filterProducts: CharacterAPIInfo[];
    allCategories: string[];
    inputText: string;
    filterCategory: (i: CharacterAPIInfo['category'])=>void;
    handleInput: (i:React.ChangeEvent<HTMLInputElement>)=>void;
    gridView: boolean;
    changeGridView: ()=>void;
    changeListView: ()=>void;
    categorySelect: string;
    sort: string;
    updateSort: (i:React.ChangeEvent<HTMLSelectElement>)=>void;
    filterPrice: (i: React.ChangeEvent<HTMLInputElement>)=>void;
    price: number;
    maxPrice: number;
    changePriceFilter: (i:React.ChangeEvent<HTMLInputElement>)=>void;
    handleClear: ()=>void;
}

export type CartContextType = {
    cart: CharacterAPIInfo[];
    addToCart: (i:CharacterAPIInfo, e:number)=>void;
    openSidebar: ()=>void;
    isSidebarOpen: boolean;
    deleteItem: (i:CharacterAPIInfo['id'])=>void;
    decreaseAmount: (id: CharacterAPIInfo['id'])=>void;
    increaseAmount: (id: CharacterAPIInfo['id'])=>void;
    totalQuantity: number;
}