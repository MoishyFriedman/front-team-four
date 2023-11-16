import { createContext, useState } from "react";
import { IProduct } from "../interface/interfaceDB";
// import { Trip } from "../components/TripsDisplay/TripsDisplay";
interface ProductContextData {
 product: IProduct | null
 setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>;
}
interface ProductContextProviderProps {
 children: React.ReactNode;
}
export const ProductContext = createContext<ProductContextData | null>(null);

export const ProductContextProvider: React.FC<ProductContextProviderProps> = (props) => {
 const [product, setProduct] = useState<IProduct | null>(null);
 return (
  <>
   <ProductContext.Provider value={{ product, setProduct }}>
    {props.children}
   </ProductContext.Provider>
  </>
 );
};

