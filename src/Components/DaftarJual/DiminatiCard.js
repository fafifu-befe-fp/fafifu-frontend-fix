import React from 'react'
import style from './DaftarJual.module.css'
import NumberFormat from 'react-number-format';

const DiminatiCard = (props) => {
  return (
    <div className={`col-3 p-2 mx-2 mb-3 ${style.cardProductDiminati}`}>
        <img className={`${style.imgProduct}`} src={props.productDiminati.imageUrl} alt="Card image" />
        <h5 className={`card-title mt-2 ${style.cardTitle}`}>{props.productDiminati.name}</h5>
        <div className={`card-text ${style.cardCategory} d-flex flex-row flex-wrap`}>
            {props.productDiminati.category.map((productCategory) => {
                return(
                    <div className={`${style.commaText}`}>
                        {productCategory.name}
                    </div>
                )
            })}
        </div>
        <div className={`mt-2 ${style.cardPrice}`}>
            <div>
                Harga Asli
            </div>
            <div className={`${style.cardPriceOriginal}`}>
                <NumberFormat value={props.productDiminati.productPrice} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
            </div>
        </div>
        <div className={`mt-2 ${style.cardPrice}`}>
            <div>
                Harga Penawar
            </div>
            <div className={`${style.cardPriceOffer}`}>
                <NumberFormat value={props.productDiminati.offerPrice} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
            </div>
        </div>
    </div>
  )
}

export default DiminatiCard