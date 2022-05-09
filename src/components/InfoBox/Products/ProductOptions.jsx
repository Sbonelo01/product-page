import React from 'react'
import "../../../styles/components.css"
import ProductQuantityButton from './ProductQuantityButton'

function ProductOptions() {
  return (
    <div class="grid-container">
  <div class="item1">Options</div>
  <div class="item2">1060P</div>
  <div class="item3">R833.99</div>  
  <div class="item4"><ProductQuantityButton /></div>
  <div class="item5">4k</div>
  <div class="item6">R895.31</div>
  <div class="item7"><ProductQuantityButton /></div>
  <div class="item8">Battery(accessories)</div> 
   <div class="item6">R78.50</div>
  <div class="item7"><ProductQuantityButton /></div>
  
</div>
  )
}

export default ProductOptions