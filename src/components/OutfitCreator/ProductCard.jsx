import {useState} from 'react';

function ProductCard({ product, setProduct }) {

    function handleClick() {
        setProduct(product)
    }
    
 
    return (

        <div className="pic-ctn" onClick={handleClick}> 
        <li className="productcard">
             <img src={product.link} /> 
        </li>
        </div>
            )}


export default ProductCard