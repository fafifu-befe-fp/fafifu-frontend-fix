import React from 'react'
import style from './LogReg.module.css'

const LeftSide = () => {
  return (
    <div className='carousel-item active'>
        <img src='img/login.svg' className={`d-block ${style.imgLogin}`}/>
    </div>
  )
}

export default LeftSide