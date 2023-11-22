import React from 'react'
import "../card/CardComponent.css"

export const CardComponent = () => {
  {/* podemos usar esta api para la tienda https://fakestoreapi.com/products */}
  const imgURL = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"

  return (
    <li className='productCard'>
      <img className="productImage" src={imgURL} alt="imagen" />
      <div className='card-body'>
        <div className='card-title'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>
        <div className='card-text'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</div>
        <div className='price'>$109.95</div>
        <button type="button" class="btnBuy">Comprar</button>
      </div>
    </li>
  )
}
