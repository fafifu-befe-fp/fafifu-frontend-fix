import React from 'react'
import style from './product.module.css'

const Seller = (props) => {
  return (
    <div className={`card w-100 ${style.cardSeller}`}>
        <div className='card-body'>
            <div className='row mt-1'>
                <div className={`col-3 border rounded`}>
                    <img src={props.productsProfile.seller.imageUrl} alt='' className={`${style.profPic} mx-auto`} />
                </div>
                <div className={`col-9 bg-white ${style.sellerName}`}>
                    <h5 className={`${style.namaSeller}`}>{props.productsProfile.seller.name}</h5>
                    <p className={`${style.asalSeller}`}>{props.productsProfile.seller.city}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seller