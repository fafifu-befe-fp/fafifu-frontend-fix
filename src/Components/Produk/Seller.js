import React from 'react'
import style from './product.module.css'

const Seller = () => {
  return (
    <div className={`card w-100 ${style.cardSeller}`}>
        <div className='card-body'>
            <div className='row mt-1'>
                <div className={`col-3`}>
                    <img src='img/profilephoto.png' alt='' className={`${style.profPic} mx-auto`} />
                </div>
                <div className={`col-9 ${style.sellerName}`}>
                    <h5 className={`${style.namaSeller}`}>Nama Penjual</h5>
                    <p className={`${style.asalSeller}`}>Kota</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seller