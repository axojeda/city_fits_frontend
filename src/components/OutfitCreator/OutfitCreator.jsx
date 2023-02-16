import './OutfitCreator.scss';
import {useState, useEffect } from "react";
import ProductList from "./ProductList";
import OutfitForm from './OutfitForm/OutfitForm';


function OutfitCreator() {

      // ella setting state for fetched products
  const [products, setProducts] = useState([])
  const [outfitFormTop, setOutfitFormTop] = useState([]);
  //changed the useState to {} for the object???
  const [outfitFormBottom, setOutfitFormBottom] = useState([]);
  const [outfitFormShoes, setOutfitFormShoes] = useState([])

  //ella adding in fetch for rendering products
  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(productData =>
      setProducts(productData))
  }, [])

  //we got handleAddTop from the ProductList props, with the parameter (productToAdd), which is (product) 
  function handleAddProduct(topClick, bottomClick, shoeClick) {
    //handleAddTop(productToAdd) is a function that is initiated when the user clicks on a product card
    //The object of this product is saved as an argument to the paramater (productToAdd)
    //So this function now has the product object it needs to add to the product.link in the form.
    setOutfitFormTop(topClick)
    setOutfitFormBottom(bottomClick)
    setOutfitFormShoes(shoeClick)
    // setOutfitFormBottom(productToAdd)
    // setOutfitFormShoes(productToAdd)
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
        onAddProduct={handleAddProduct}
        // setOutfitFormTop={setOutfitFormTop}
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

//onAddProduct is recieved from ProductList so we can use it in OutfitCreator as handleAddTop