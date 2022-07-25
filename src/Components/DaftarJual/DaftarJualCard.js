import React from 'react'
import style from './DaftarJual.module.css'
import NumberFormat from 'react-number-format';

const DaftarJualCard = (props) => {
  return (
    <div className={`col-3 p-2 mx-2 mb-3 ${style.cardProduct}`}>
        <img 
            className={`${style.imgProduct}`} 
            src={props.productProfile.imageUrl ? props.productProfile.imageUrl : '/img/imagena.png'}
            alt="Card image" 
        />
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
        <div className={`mt-2 ${style.cardPrice}`}>
            <NumberFormat value={props.productProfile.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
        </div>
    </div>
  )
}

export default DaftarJualCard