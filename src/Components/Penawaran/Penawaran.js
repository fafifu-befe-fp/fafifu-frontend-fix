import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import style from './Penawaran.module.css'
import { Modal, Button } from 'react-bootstrap'
// import Match from '../Modals/Match'

const Penawaran = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className={'container-fluid'}>
            <IoMdArrowBack className={`${style.backlogo} mt-2`} size={20} />
            <div className={'row mt-3 d-flex justify-content-center'}>
                <div className={'col-sm-6 col-md-12 col-lg-6 forminfo'}>
                    <div className={"row d-flex flex-row shadow py-3 px-1 mb-3 rounded"}>
                        <div className={"col-auto px-2 d-flex justify-content-center align-items-center"}>
                            <img className={"col-auto p-0 m-0 h-auto"} src='img/Picture.svg' alt=''/>
                        </div>
                        <div className={"col-auto"}>
                            <div className={`${style.textNama}`}>
                                Nama Pembeli
                            </div>
                            <div className={`${style.textKota}`}>
                                Kota
                            </div>
                        </div>
                    </div>
                    <div className={`${style.produkText}`}>
                        Daftar Produkmu Yang Ditawar
                    </div>
                    <div className={"row d-flex flex-row shadow py-3 px-1 mt-3 rounded"}>
                        <div className={"d-flex flex-row"}>
                            <div className={"col-auto"}>
                                <img className={"col-auto p-0 m-0 h-auto"} src='img/Produk.svg' alt=''/>
                            </div>
                            <div className={"col-10 mx-3"}>
                                <div className={"d-flex justify-content-between w-100"}>
                                    <div className={`${style.textSecondary}`}>
                                        Penawaran Produk
                                    </div>
                                    <div className={`${style.textSecondary} ml-auto`}>
                                        20 Apr, 14.00
                                    </div>
                                </div>
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
                        <div className={'row d-flex justify-content-end pt-3'}>
                            <button type="button" className={`col-4 mx-2 btn ${style.buttonPenawaranTolak}`}>
                                Tolak
                            </button>
                            <button type="button" className={`col-4 btn ${style.buttonPenawaranTerima}`} onClick={() => setModalShow(true)}>
                                Terima
                            </button>
                        </div>
                        <Match
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Match(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton/>
        <Modal.Body>
            <div className={"d-flex flex-column justify-content-center align-items-center my-2"}>
                <p className={`px-2 mb-2 ${style.modalTitle}`}>
                    Yeay kamu berhasil mendapat harga yang sesuai
                </p>
                <p className={`px-2 mb-2 ${style.modalDescription}`}>
                    Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
                </p>
                <div className={`row ${style.dataContainer} d-flex flex-row pt-3 px-2 mx-0 mb-3 rounded justify-content-center align-items-center w-80`}>
                    <div className={`text-center ${style.modalTitle}`}>
                        Product Match
                    </div>
                    <div className={"d-flex flex-row py-2 px-1"}>
                        <div className={"col-auto p-0 me-2"}>
                            <img className={"col-auto p-0 m-0 h-auto"} src='img/Picture.svg' alt=''/>
                        </div>
                        <div className={`${style.text}`}>
                            <div>
                                Nama Pembeli
                            </div>
                            <div>
                                Kota
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex flex-row py-2 px-1"}>
                        <div className={"col-auto p-0 me-2"}>
                            <img className={"col-auto p-0 m-0 h-auto"} src='img/Produk.svg' alt=''/>
                        </div>
                        <div className={`col-auto ${style.text}`}>
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
                <button type="button" className={`col-12 btn ${style.buttonMatchTerima}`}>
                    Hubungi via WhattsApp <BsWhatsapp className={"mb-1 mx-1"}/>
                </button>
            </div>
        </Modal.Body>
      </Modal>
    );
}

export default Penawaran