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
    AllCategories: string[];
    inputText: string;
    filterCategory: (i: CharacterAPIInfo['category'])=>void;
    handleInput: (i:React.ChangeEvent<HTMLInputElement>)=>void;
}

export type CartContextType = {
    cart: CharacterAPIInfo[];
    addToCart: (i:CharacterAPIInfo, e:number)=>void
    openSidebar: ()=>void;
    isSidebarOpen: boolean;
    deleteItem: (i:CharacterAPIInfo['id'])=>void
}