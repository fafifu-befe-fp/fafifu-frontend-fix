import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import './Styles/Match.css'

const Tawar = () => {
  return (
    <div className="d-flex flex-column justify-content-end align-items-end px-3 py-3 col-12 col-md-8 shadow p-3 mb-5 bg-white rounded">
        <IoMdClose size={30} />
        <div className="d-flex flex-column my-2">
            <p className="px-2 mb-2 font-weight-bold">
                Masukkan Harga Tawarmu
            </p>
            <p className="px-2 mb-2">
                Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.
            </p>
            <div className="row data-container d-flex flex-row py-2 px-1 mx-0 mb-3 rounded justify-content-center align-items-center w-100 p-3">
                <div className="text-center"/>
                <div className="d-flex flex-row py-2 px-1">
                    <div className="col-auto px-4">
                        <img className="row w-15" src='img/Penjual.svg' alt=''/>
                    </div>
                    <div className="col-auto">
                        <div>
                            Jam Tangan Casio
                        </div>
                        <div>
                            Rp. 250.000
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Harga Tawar</label>
                    <input type="email" class="form-control mb-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <button type="submit" className="col-4 btn button-kirim w-100">
                    Kirim
                </button>
            </form>
        </div>
    </div>
  )
}

export default Tawar