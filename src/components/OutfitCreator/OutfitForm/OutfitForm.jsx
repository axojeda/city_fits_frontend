import './OutfitForm.scss'
import { useState } from "react"

export default function OutfitForm({outfitFormTop, outfitFormBottom, outfitFormShoes}) {
  const topLink = outfitFormTop.link
  const bottomLink = outfitFormBottom.link
  const shoesLink = outfitFormShoes.link



  

  return (
    <div className="new-outfit-form">
      <div className='saved-outfit'>
        <div className='box'>
        <span className='imgBox'>
          <picture ><img className="productcard-form" src={topLink} /></picture>
        </span>
        </div>
            
            <div className='box'>
        <span className='imgBox'>
          <picture ><img className="productcard-form" src={bottomLink} /></picture>
        </span>
        </div>
            

            <div className='box'>
        <span className='imgBox'>
          <picture ><img className="productcard-form" src={shoesLink}></img></picture>						
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
