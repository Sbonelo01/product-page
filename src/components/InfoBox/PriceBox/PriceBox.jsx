import React from 'react'
import "../../../styles/components.css"

function PriceBox() {
  return (
    <div>
      <hr/>
      <span class="price-box">R78.50-R895.31</span>
      <span class="option"> /Option</span> 
      <span class="number-of-options">2 Options </span>
      <span class="min-max-order">(Min Order)</span>
      <div class="old-price"><s>R 98.12 - R 1,119.14</s></div>
      <hr/>
    </div>
  )
}

export default PriceBox;