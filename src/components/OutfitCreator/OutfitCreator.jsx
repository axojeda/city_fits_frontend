import './OutfitCreator.scss';
import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import OutfitForm from './OutfitForm/OutfitForm';


function OutfitCreator() {

      // ella setting state for fetched products
  const [products, setProducts] = useState([])

  //ella adding in fetch for rendering products
  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(productData =>
      setProducts(productData))
  }, [])


const displayTops = products.filter((product) => {
    return product.category === "top"
});

const displayBottoms = products.filter((product) => {
    return product.category === "bottom"
});

const displayShoes = products.filter((product) => {
    return product.category === "shoes"
});

    return (
        <>
        <ProductList 
        displayTops={displayTops} displayBottoms={displayBottoms} displayShoes={displayShoes}
        />
        <OutfitForm />
        </>
    )
}

export default OutfitCreator 