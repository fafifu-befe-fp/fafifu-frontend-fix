import React from 'react'
import style from './DaftarJual.module.css'

const DiminatiCard = (props) => {
  return (
    <div className={`col-3 p-2 mx-2 mb-3 ${style.cardProduct}`}>
        <div className="">
            <img className={`w-full ${style.imgProduct}`} src={props.productDiminati.imageUrl} alt="Card image" />
        </div>
        <div className={`mx-1 mt-3 ${style.cardTitle}`}>
            {props.productDiminati.name}
        </div>
        <div className={`mx-1 ${style.cardCategory} d-flex flex-row flex-wrap`}>
            {props.productDiminati.category.map((productCategory) => {
                return(
                    <div className={`${style.commaText}`}>
                        {productCategory.name}
                    </div>
                )
            })}
        </div>
        <div className={`mx-1 mt-2 mb-2 ${style.cardPrice}`}>
            <div>
                Harga Asli
            </div>
            <div className={`${style.originalPrice}`}>
                Rp. {props.productDiminati.productPrice}
            </div>
        </div>
        <div className={`mx-1 mt-2 mb-2 ${style.cardPrice}`}>
            <div>
                Harga Penawar
            </div>
            <div>
                Rp. {props.productDiminati.offerPrice}
            </div>
        </div>
    </div>
  )
}

export default DiminatiCard