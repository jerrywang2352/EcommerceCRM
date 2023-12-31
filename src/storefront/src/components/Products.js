import React, {useContext} from 'react';
import { ProductsContext } from '../global/ProductsContext';
import { CartContext } from '../global/CartContext';

const Products = () => {    
    const {products} = useContext(ProductsContext); 
    const {dispatch} = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>loading...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.productID}>
                        <div className='product-img'>
                            <img src={product.productImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.productName}
                        </div>
                        <div className='product-price'>
                            $ {product.productPrice}.00
                    </div>
                        <button className='addcart-btn' onClick = {() => dispatch({type: 'ADD_TO_CART',id:product.productID,product})}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Products;