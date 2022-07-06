import React from 'react'
import style from './product.module.css'

const Buyer = () => {
  return (
    <div className={`card w-100 ${style.cardProductBuyer} mb-4`}>
            <div className='card-body mx-2'>
                <h5 className={`${style.namaBarang}`}>Nama Barang</h5>
                <p className={`${style.jenisBarang}`}>Jenis Barang</p>
                <h5 className={`${style.hargaBarang}`}>Rp Harga Barang</h5>
                <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-3 mt-3`}>Saya tertarik dan ingin nego</button>
            </div>
        </div>
  )
}

export default Buyer