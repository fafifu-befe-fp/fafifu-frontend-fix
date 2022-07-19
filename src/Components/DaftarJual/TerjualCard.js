import React from 'react'
import style from './DaftarJual.module.css'
import NumberFormat from 'react-number-format';

const TerjualCard = (props) => {
  return (
    <div className={`col-3 p-2 mx-2 mb-3 ${style.cardProductDiminati}`}>
        <img className={`${style.imgProduct}`} src={props.productTerjual.imageUrl} alt="Card image" />
        <h5 className={`card-title mt-2 ${style.cardTitle}`}>{props.productTerjual.name}</h5>
        <div className={`card-text ${style.cardCategory} d-flex flex-row flex-wrap`}>
            {props.productTerjual.category.map((productCategory) => {
                return(
                    <div className={`${style.commaText}`}>
                        {productCategory.name}
                    </div>
                )
            })}
        </div>
        <div className={`mt-2 ${style.cardPrice}`}>
            <div>
                Harga Penjualan
            </div>
            <div className={`${style.cardPriceOffer}`}>
                <NumberFormat value={props.productTerjual.offerPrice} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
            </div>
        </div>
    </div>
  )
}

export default TerjualCard