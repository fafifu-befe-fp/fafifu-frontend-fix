import React from 'react'
import style from './DaftarJual.module.css'

const WishlistCard = (props) => {
  return (
    <div className={`col-3 p-2 mx-2 mb-3 ${style.cardProduct}`}>
        <img className={`${style.imgProduct}`} src={props.productWishlist.imageUrl} alt="Card image" />
        <h5 className={`card-title mt-2 ${style.cardTitle}`}>{props.productWishlist.name}</h5>
        <div className={`card-text ${style.cardCategory} d-flex flex-row flex-wrap`}>
            {props.productWishlist.category.map((productCategory) => {
                return(
                    <div className={`${style.commaText}`}>
                        {productCategory.name}
                    </div>
                )
            })}
        </div>
        <div className={`mt-2 ${style.cardPrice}`}>Rp. {props.productWishlist.price}</div>
    </div>
  )
}

export default WishlistCard