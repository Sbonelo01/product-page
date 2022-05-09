import React from 'react'
import "../../../styles/components.css"

function Banner() {
  return (
    <div class="banner">
      {/* TODO: figure out how to get images */}
<img src={require(`../../../assets/product/images/Logo/`)} alt="march expo" width="40px" height="40px"></img>
	<span class="banner-text">• Free shipping (up to $40)</span>
    <span class="banner-text">• On-time delivery guaranteed</span>
    <span class="banner-text">djfan</span>
</div>
  )
}

export default Banner