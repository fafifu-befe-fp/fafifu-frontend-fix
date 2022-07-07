import React from 'react'
import style from './DaftarJual.module.css'

const DaftarJualCard = (props) => {
  return (
    <div className="col-auto p-2 mx-2 mb-3 shadow rounded">
        <div className="">
            <div className="">
                <img className={``} src={props.productProfile.imageUrl[0].imageUrl} alt="Card image" />
            </div>
        </div>
        <div className="mx-1 mt-3">
            {props.productProfile.name}
        </div>
        <div className={`mx-1 ${style.keteranganCategory}`}>
            {/* {props.productProfile.category} */}
            {props.productProfile.category.map((productCategory) => {
                return(
                    <div>
                    {productCategory.name}
                    </div>
                )
            })}
        </div>
        <div className="mx-1 mt-2 mb-2">
            Rp. {props.productProfile.price}
        </div>
    </div>
  )
}

export default DaftarJualCard