import React, { createContext, useState, useEffect } from "react";
import { db } from "../config/Config";
import { collection, onSnapshot } from "firebase/firestore";

const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products,setProducts] = useState([]);
    
    useEffect(() => {
        const colRef = collection(db, "products");
        onSnapshot(colRef, (snapshot) => {
            let changes = snapshot.docChanges();
            changes.forEach((change) => {
              if (change.type === "added") {
                setProducts(prevState => [
                    ...prevState,
                    {
                        productID: change.doc.id,
                        productName: change.doc.data().productName,
                        productPrice: change.doc.data().productPrice,
                        productImg: change.doc.data().productImg,
                    }
                ]);
              }
            });
          }); 
    },[]);

    return (
        <ProductsContext.Provider value={{ products: [...products] }}>
          {props.children}
        </ProductsContext.Provider>
    );
}

export { ProductsContext, ProductsContextProvider };
