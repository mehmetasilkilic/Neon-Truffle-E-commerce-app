import { createContext, useState, useEffect } from "react";

// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import PRODUCTS from '../shop-data.json'

//as the actual value you want to access
export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

/*     useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscribe
    }, []); */

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}