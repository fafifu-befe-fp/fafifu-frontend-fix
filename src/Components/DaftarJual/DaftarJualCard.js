import React from 'react'
import style from './DaftarJual.module.css'

const DaftarJualCard = () => {
  return (
    <div className="col-auto p-2 mx-2 mb-3 shadow rounded">
        <div className="">
            <div className="">
                <img className="" src='img/casio.svg' alt=''/>
            </div>
        </div>
        <div className="mx-1 mt-3">
            Jam Tangan Casio
        </div>
        <div className={`mx-1 ${style.keteranganCategory}`}>
            Aksesoris
        </div>
        <div className="mx-1 mt-2 mb-2">
            Rp. 250.000
        </div>
    </div>
  )
}

export default DaftarJualCard