import './OutfitCreator.scss';
import {useState, useEffect } from "react";
import ProductList from "./ProductList";
import OutfitForm from './OutfitForm/OutfitForm';


function OutfitCreator() {

      // ella setting state for fetched products
  const [products, setProducts] = useState([])
  const [outfitFormTop, setOutfitFormTop] = useState([]);
  //changed the useState to {} for the object

  //ella adding in fetch for rendering products
  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(productData =>
      setProducts(productData))
  }, [])

  //we got handleAddTop from the ProductList props, with the parameter (topToAdd), which is (product) 
  function handleAddTop(topToAdd) {
    // console.log(topToAdd) will consolelog the link, name, category, style and link of the picture
    //Then we create a variable topInForm that first, because there is no Top rendered in the OutfitForm
    //which translates to (!topInForm) it will then setOutfitFormTop to topToAdd
    //which is the object of all the info about the picture clicked
    //Now that the outfitFormTop is set to topToAdd, topInFom now becomes
    //true. topInForm is the 
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

//onAddTop is recieved from ProductList so we can use it in OutfitCreator as handleAddTop