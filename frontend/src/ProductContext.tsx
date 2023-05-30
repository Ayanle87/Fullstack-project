import React, { createContext, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    isOpen?: boolean;
}

//Bestämmer vad som får finnas (strukturen) i contextet.
interface ProductContextProps {
    allProducts: Product[];
    //Initialt en tom array. Det är bestämt vad den får innehålla utifrån Product interfacet ovan.
    products: Product[];

    //Initialt en tom array.
    pins: number[];

    //Här bestäms vad som får uppdatera det nya värdet, i detta fallet den fetchade datan får vara.
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    setPins: React.Dispatch<React.SetStateAction<number[]>>;
}

//Här är själva start-contexet! ProductContextProps ovan skickas med.
export const ProductContext = createContext<ProductContextProps>({
    allProducts: [],
    products: [],
    pins: [],
    setProducts: () => {},
    setPins: () => {},
});

//Allt som sedan ligger i ProductContext.Provider i app.tsx har åtkomst till det som ligger här.
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    //Används för att lagra och hantera datan som delas via contexten.
    const [products, setProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [pins, setPins] = useState<number[]>([]);


    return (
        <ProductContext.Provider
            value={{ allProducts, products, pins, setProducts, setPins }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
