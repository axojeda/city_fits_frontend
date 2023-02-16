import ProductCard from "./ProductCard";
import Slider from "react-slick";


 function ProductList ({ displayTops, displayBottoms, displayShoes, onAddTop }) {
    //products is passed as a prop. so far we can access each product as an object.
    //onAddTop is passed as a prop from OutfitCreator



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
                onAddTop={onAddTop}
                />
                
                    })
                }
          </Slider>
        </div>
        <div className="cards">
            <Slider {...settings}>
                {displayBottoms.map(bottom => {
                return <ProductCard key={bottom.id} product={bottom}/>
                    })
             }
            </Slider>
        </div>
        <div className="cards">
            <Slider {...settings}>
                {displayShoes.map(shoe => {
                return <ProductCard key={shoe.id} product={shoe}/>
                    })
            }
            </Slider>
        </div>
    </div>
   
    )}

    export default ProductList