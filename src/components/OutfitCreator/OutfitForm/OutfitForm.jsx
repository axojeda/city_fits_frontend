import './OutfitForm.scss'
import { useState } from "react"

export default function OutfitForm({outfitFormTop}) {
  console.log(outfitFormTop)

  
  

  return (
    <div className="new-outfit-form">
      <div className='saved-outfit'>
        <div className='box'>
        <span className='imgBox'>
          <picture ><img className="productcard-form" src={outfitFormTop[0]} /></picture>
        </span>
        </div>
            
            <div className='box'>
        <span className='imgBox'>
          <picture ><img className="productcard-form" src="https://images.urbndata.com/is/image/FreePeople/82717968_000_a/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080" /></picture>
        </span>
        </div>
            

            <div className='box'>
        <span className='imgBox'>
          <picture ><img className="productcard-form" src="https://images.urbndata.com/is/image/FreePeople/56313224_111_c/?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080"></img></picture>						
        </span>
        </div>
      </div>

        <h2 id='form-title'>CREATE YOUR OUTFIT</h2>

      <div id='form-div'>
      <form id='outfit-form'>
        <input
          type="text"
          name="name"
          placeholder="Outfit name"
        />
         <input
          type="text"
          name="name"
          placeholder="User name"
        />
        <button id='form-btn' type="save">Save Outfit</button>
        <p href="#">Don't have an account? Sign In</p>
      </form>

      
  <div class="drops">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-5"></div>
  </div>
    </div>
    </div>
  );
}

      // <form onSubmit={handleSubmit}>
      //   <input
      //     type="text"
      //     name="name"
      //     placeholder="Outfit name"
      //     value={name}
      //     onChange={(e) => setNewOutfitName(e.target.value)}
      //   />
      //   <button type="save">Save Outfit</button>
      // </form>
