function ProductCard({product, onAddTop}) {
    const { link } = product;
    //destructuring link,name,style, category from product
    
    function handleClick() {
    onAddTop(link);
    // This function is triggered when any of the pictures are clicked from the onClick={handleClick} below
    //try and change onAddTop(link) to onAdd(product) in order to grab all of the info from the product
    }
    
    return (

        <div className="pic-ctn" onClick={handleClick}> 
        <li className="productcard">
             <img src={link} /> 
        </li>
        </div>
            )}


export default ProductCard