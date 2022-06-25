import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import './Styles/Match.css'

const ModalHubungi = () => {
  return (
    <div className="d-flex flex-column justify-content-end align-items-end px-3 py-3 col-12 col-md-8 shadow p-3 mb-5 bg-white rounded">
        <IoMdClose size={30} />
        <div className="d-flex flex-column justify-content-center align-items-center my-2">
            <p className="px-2 mb-2 font-weight-bold">
                Yeay kamu berhasil mendapat harga yang sesuai
            </p>
            <p className="px-2 mb-2">
                Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
            </p>
            <div className="row data-container d-flex flex-row py-3 px-1 mx-2 mb-3 rounded justify-content-center align-items-center w-80">
                <div className="text-center">
                    Product Match
                </div>
                <div className="d-flex flex-row py-2 px-1">
                    <div className="col-auto px-4">
                        <img className="row w-15" src='img/Picture.svg' alt=''/>
                    </div>
                    <div className="col-auto">
                        <div>
                            Nama Pembeli
                        </div>
                        <div>
                            Kota
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row py-2 px-1">
                    <div className="col-auto px-4">
                        <img className="row w-15" src='img/Produk.svg' alt=''/>
                    </div>
                    <div className="col-auto">
                        <div>
                            Jam Tangan Casio
                        </div>
                        <div>
                            Rp. 250.000
                        </div>
                        <div>
                            Ditawar Rp. 200.000
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="col-4 btn button-match-terima">
                Hubungi di <BsWhatsapp className="mb-1 mx-1"/>
            </button>
        </div>
    </div>
  )
}

export default ModalHubungi