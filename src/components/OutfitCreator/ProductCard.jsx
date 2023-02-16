function ProductCard({product, onAddTop}) {
    const { link } = product;
    //destructuring link,name,style, category from product
    function handleClick() {
    onAddTop(link);
    // console.log(link);
    }
    
    return (

        <div className="pic-ctn" onClick={handleClick}> 
        <li className="productcard">
             <img src={link} /> 
        </li>
        </div>
            )}


export default ProductCard