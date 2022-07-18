import React from 'react'
import style from './DaftarJual.module.css'

const DaftarJualCard = (props) => {
  return (
    <div className={`col-3 p-2 mx-2 mb-3 ${style.cardProduct}`}>
        <img className={`${style.imgProduct}`} src={props.productProfile.imageUrl} alt="Card image" />
        <h5 className={`card-title mt-2 ${style.cardTitle}`}>{props.productProfile.name}</h5>
        <div className={`card-text ${style.cardCategory} d-flex flex-row flex-wrap`}>
            {props.productProfile.category.map((productCategory) => {
                return(
                    <div className={`${style.commaText}`}>
                        {productCategory.name}
                    </div>
                )
            })}
        </div>
        <div className={`mt-2 ${style.cardPrice}`}>Rp. {props.productProfile.price}</div>
    </div>
  )
}

export default DaftarJualCard