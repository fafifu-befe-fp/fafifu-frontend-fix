import React from 'react'
import style from './DaftarJual.module.css'

const DaftarJualCard = (props) => {
  return (
    <div className={`col-3 p-2 mx-2 mb-3 ${style.cardProduct}`}>
        <div className="">
            <img className={`${style.imgProduct}`} src={props.productProfile.imageUrl[0].imageUrl} alt="Card image" />
        </div>
        <div className={`mx-1 mt-3 ${style.cardTitle}`}>
            {props.productProfile.name}
        </div>
        <div className={`mx-1 ${style.cardCategory} d-flex flex-row flex-wrap`}>
            {/* {props.productProfile.category} */}
            {props.productProfile.category.map((productCategory) => {
                return(
                    <div className={`${style.commaText}`}>
                    {productCategory.name}
                    </div>
                )
            })}
        </div>
        <div className={`mx-1 mt-2 mb-2 ${style.cardPrice}`}>
            Rp. {props.productProfile.price}
        </div>
    </div>
  )
}

export default DaftarJualCard