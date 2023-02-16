import './OutfitCreator.scss';
import {useState, useEffect } from "react";
import ProductList from "./ProductList";
import OutfitForm from './OutfitForm/OutfitForm';


function OutfitCreator() {

      // ella setting state for fetched products
  const [products, setProducts] = useState([])
  const [outfitFormTop, setOutfitFormTop] = useState([]);

  //ella adding in fetch for rendering products
  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(productData =>
      setProducts(productData))
  }, [])

  function handleAddTop(topToAdd) {
    // console.log(topToAdd)
    const topInForm = outfitFormTop.find(
      (displayTops) => displayTops.link === topToAdd
    );
    if (!topInForm) {
      setOutfitFormTop([...outfitFormTop, topToAdd]);
    }
  }


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
        onAddTop={handleAddTop}
        />
        <OutfitForm outfitFormTop={outfitFormTop} />
        
        </>
    )
}

export default OutfitCreator 