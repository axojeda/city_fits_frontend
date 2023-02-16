import {useState} from 'react';

function ProductCard({ product, onAddProduct }) {

        const [topClick, setTopClick] = useState({})
        const [bottomClick, setBottomClick] = useState({})
        const [shoeClick, setShoeClick] = useState({})

    function handleClick() {

    
    if (product.category === "top") {
        setTopClick(product);

    } else if (product.category ==="bottom") {
        setBottomClick(product)
    } else if (product.category ==="shoes") {
        setShoeClick(product)
    }
    
   onAddProduct(topClick, bottomClick, shoeClick)
    
    // This function is triggered when ANY of the pictures are clicked from the onClick={handleClick} below
    //onAddProduct is storing (product) as information for an argument
    }
    
 
    return (

        <div className="pic-ctn" onClick={handleClick}> 
        <li className="productcard">
             <img src={product.link} /> 
        </li>
        </div>
            )}


export default ProductCard