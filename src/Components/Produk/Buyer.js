import React, { useState, useEffect } from 'react'
import style from './product.module.css'

const Buyer = (props) => {

  return (
    <div className={`card w-100 ${style.cardProductBuyer} mb-4`}>
      <div className='card-body mx-2'>
        <h5 className={`${style.namaBarang}`}>{props.products[0].name}</h5>
        <p className={`${style.jenisBarang}`}>
          {props.products[0].category.map((productCategory) => {
            return(
              <div>
                {productCategory.name}
              </div>
            )
          })}
        </p>
        <h5 className={`${style.hargaBarang}`}>Rp. {props.products[0].price}</h5>
        <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-3 mt-3`}>Saya tertarik dan ingin nego</button>
      </div>
    </div>
  )
}

export default Buyer