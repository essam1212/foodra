import React from 'react'
import './header.css'
export default function Header() {
  return <>
    <header>
      <div className=' container'>
        <div className="row">
          <div className="col-md-6">
            <h1 className=' pt-5 mt-5'>Good food choices<br /> are good investments.</h1>
            
            <p className=' py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Etiam et purus a odio finibus bibendum amet leo.</p>
         <button id='order' className=' btn mx-4' > Order Naw  <i class="fa-solid fa-cart-arrow-down"></i></button>
         <button id='lern' className=' btn' >lern more</button>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
    </header>
  </>


}
