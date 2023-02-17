import './OutfitCreator.scss';
import {useState, useEffect } from "react";
import ProductList from "./ProductList";
import OutfitForm from './OutfitForm/OutfitForm';


function OutfitCreator() {

      // ella setting state for fetched products
  const [products, setProducts] = useState([])
  const [outfitFormTop, setOutfitFormTop] = useState({});
  const [outfitFormBottom, setOutfitFormBottom] = useState({});
  const [outfitFormShoes, setOutfitFormShoes] = useState({})

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
        displayTops={displayTops} 
        displayBottoms={displayBottoms} 
        displayShoes={displayShoes}
        setOutfitFormTop={setOutfitFormTop}
        setOutfitFormBottom={setOutfitFormBottom}
        setOutfitFormShoes={setOutfitFormShoes}
        />
        <OutfitForm 
        outfitFormTop={outfitFormTop}
        outfitFormBottom={outfitFormBottom}
        outfitFormShoes={outfitFormShoes}
       
         />
        
        </>
    )
}

export default OutfitCreator 

