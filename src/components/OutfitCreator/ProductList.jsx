import ProductCard from "./ProductCard";
import Slider from "react-slick";


 function ProductList ({ displayTops, displayBottoms, displayShoes, setOutfitFormTop, setOutfitFormBottom, setOutfitFormShoes }) {
    //ella: displayTops/Bottoms/Shoes is products filtered out to seperate them into categories. Now we can map them here

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    return (
    <div>
        <div className="cards" >
            <Slider {...settings}>
                {displayTops.map(top => {
                return <ProductCard 
                key={top.id} 
                product={top}
                setProduct={setOutfitFormTop}
                
                />
                
                    })
                }
                {/* display tops is being mapped to grab each individual top. 
                Then the product={top} is passed to ProductCard to populate the info about top into a nice card. 
                Each top is placed in a nice card that is then put into the slider here. */}
                {/* Then onAddProduct={onAddProduct} is a prop being passed to or from ProductCard */}
          </Slider>
        </div>
        <div className="cards" >
            <Slider {...settings}>
                {displayBottoms.map(bottom => {
                return <ProductCard 
                key={bottom.id} 
                product={bottom}
                setProduct={setOutfitFormBottom}
                
                
                />
                    })
             }
            </Slider>
        </div>
        <div className="cards" >
            <Slider {...settings}>
                {displayShoes.map(shoe => {
                return <ProductCard 
                key={shoe.id} 
                product={shoe}
                setProduct={setOutfitFormShoes}
                
                />
                    })
            }
            </Slider>
        </div>
    </div>

    
   
    )}

    export default ProductList