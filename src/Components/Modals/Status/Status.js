import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import './Styles/Match.css'

const Status = () => {
  return (
    <div className="d-flex flex-column justify-content-end align-items-end px-3 py-3 col-12 col-md-8 shadow p-3 mb-5 bg-white rounded">
        <IoMdClose size={30} />
        <div className="d-flex flex-column justify-content-center align-items-center my-2">
            <p className="px-2 mb-2 font-weight-bold">
                Perbarui status penjualan produkmu
            </p>
            <div className="d-flex flex-row px-2">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label px-2" for="flexRadioDefault1"/>
                </div>
                <div className="">
                    <div className="">
                        Berhasil Terjual
                    </div>
                    <div className="pt-2 mb-4">
                        Kamu telah sepakat menjual produk ini kepada pembeli
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row px-2">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label px-2" for="flexRadioDefault1"/>
                </div>
                <div className="">
                    <div className="">
                        Batalkan transaksi
                    </div>
                    <div className="pt-2 mb-4">
                        Kamu membatalkan transaksi produk ini dengan pembeli
                    </div>
                </div>
            </div>
            <button type="button" className="col-4 btn button-kirim w-100">
                Kirim
            </button>
        </div>
    </div>
  )
}

export default Status