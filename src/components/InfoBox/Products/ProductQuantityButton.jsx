import React from 'react'
import {decreaseValue, increaseValue} from './utils'
import "../../../styles/components.css"

function ProductQuantityButton() {
  return (
    <form style={{margin: 0, padding: 0}}>
  <div class="value-button" onclick={decreaseValue} value="Decrease Value">-</div>
  <input type="number" id="number" value="0" />
  <div class="value-button" onclick={increaseValue} value="Increase Value">+</div>
</form>
  )
}

export default ProductQuantityButton