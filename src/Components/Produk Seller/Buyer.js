import React, { useState, useEffect } from 'react'
import style from './product.module.css'

const Buyer = (props) => {

  return (
    <div className={`card w-100 ${style.cardProductBuyer} mb-4`}>
      <div className='card-body mx-2'>
        <h5 className={`${style.namaBarang}`}>{props.productsProfile[0].name}</h5>
        <p className={`${style.jenisBarang}`}>
          {props.productsProfile[0].category.map((productCategory) => {
            return(
              <div>
                {productCategory.name}
              </div>
            )
          })}
        </p>
        <h5 className={`${style.hargaBarang}`}>Rp. {props.productsProfile[0].price}</h5>
        <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-3 mt-3`}>Terbitkan</button>
        <button type="submit" class={`${style.buttonedit} w-100 mb-3 `}>Edit</button>
      </div>
    </div>
  )
}

export default Buyer