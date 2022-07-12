import React from 'react'
import style from './product.module.css'

const Desc = (props) => {
  return (
    <>
        <div className={`card w-100 ${style.cardDesc} mb-3`}>
            <div className={`card-body ${style.cardBodyDesc}`}>
                <h5 className={`${style.headDesc}`}>Deskripsi</h5>
                <p className={`${style.parDesc}`}>{props.products.description}</p>
            </div>
        </div>
    </>
  )
}

export default Desc