import React, { useState, useEffect } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import { IoMdClose } from 'react-icons/io'
import style from './Penawaran.module.css'
import { Modal, Button } from 'react-bootstrap'

const Penawaran = () => {
    const [modalMatch, modalMatchShow] = React.useState(false);
    const [modalStatus, modalStatusShow] = React.useState(false);
    const [modalTawar, modalTawarShow] = React.useState(false);
    const [notification, notificationShow] = React.useState(false);
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
                            <button type="button" className={`col-4 mx-2 btn ${style.buttonPenawaranTolak}`} onClick={() => modalStatusShow(true)}>
                                Tolak
                            </button>
                            <button type="button" className={`col-4 btn ${style.buttonPenawaranTerima}`} onClick={() => modalMatchShow(true)}>
                                Terima
                            </button>
                        </div>
                        {/* <Notification
                            show={notification}
                            onHide={() => notificationShow(false)}
                        /> */}
                        <Match
                            show={modalMatch}
                            onHide={() => modalMatchShow(false)}
                        />
                        <Status
                            show={modalStatus}
                            onHide={() => modalStatusShow(false)}
                        />
                        <Tawar
                            show={modalTawar}
                            onHide={() => modalTawarShow(false)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

// function Notification() {
//     return (
//         <div class="alert alert-warning alert-dismissible fade show" role="alert">
//             <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         </div>
//     )
// }

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

function Status(props) {
    const [message, messageShowModal] = React.useState(false);
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton/>
        <Modal.Body>
            <div className={`d-flex flex-column justify-content-center align-items-center my-2`}>
                <div className={"d-flex flex-column justify-content-center align-items-center my-2"}>
                    <p className={`px-2 mb-4 ${style.modalStatusTitle}`}>
                        Perbarui status penjualan produkmu
                    </p>
                    <div className={"d-flex flex-row px-2"}>
                        <div className={"form-check"}>
                            <input className={"form-check-input"} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className={"form-check-label px-2"} for="flexRadioDefault1"/>
                        </div>
                        <div className="">
                            <div className="">
                                Berhasil Terjual
                            </div>
                            <div className={"pt-2 mb-4"}>
                                Kamu telah sepakat menjual produk ini kepada pembeli
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex flex-row px-2"}>
                        <div className={"form-check"}>
                            <input className={"form-check-input"} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className={"form-check-label px-2"} for="flexRadioDefault1"/>
                        </div>
                        <div className="">
                            <div className="">
                                Batalkan transaksi
                            </div>
                            <div className={"pt-2 mb-4"}>
                                Kamu membatalkan transaksi produk ini dengan pembeli
                            </div>
                        </div>
                    </div>
                    <button type="button" className={`col-4 btn ${style.buttonKirim} w-100`}>
                    {/* <button type="button" onClick={() => messageShowModal(true)} className={`col-4 btn ${style.buttonKirim} w-100`}> */}
                        Kirim
                    </button>
                    {/* <Message
                        show={message}
                        onHide={() => messageShowModal(false)}
                    /> */}
                </div>
            </div>
        </Modal.Body>
        </Modal>
    )

    // function Message({ variant }){
    //     const [alert, setAlert] = useState(false);
    //         setTimeout(() => {
    //             setAlert(false);
    //         }, 2000);
            
    //     return (
    //         <>
    //             {alert && <div className={`alert alert-${variant}`}>Status produk berhasil diperbarui</div>}
    //         </>
    //     )
    // }
}

function Tawar(props) {
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
                <div className={"d-flex flex-column my-2"}>
                    <p className={"px-2 mb-2 font-weight-bold"}>
                        Masukkan Harga Tawarmu
                    </p>
                    <p className={"px-2 mb-2"}>
                        Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.
                    </p>
                    <div className={"row data-container d-flex flex-row py-2 px-1 mx-0 mb-3 rounded justify-content-center align-items-center w-100 p-3"}>
                        <div className={"text-center"}/>
                        <div className={`d-flex flex-row py-2 px-1 ${style.photoDetailContainer}`}>
                            <div className={"col-auto px-2"}>
                                <img className={"col-auto p-0 m-0 h-auto"} src='img/Produk.svg' alt=''/>
                            </div>
                            <div className={`col-auto ${style.photoDetailText}`}>
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
                        <div class={"form-group"}>
                            <label className={`mb-2 ${style.hargaTawarText}`}for="exampleInputEmail1">Harga Tawar</label>
                            <input type="email" className={"form-control mb-4"} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <button type="submit" className={`col-4 btn ${style.buttonKirim} w-100`}>
                            Kirim
                        </button>
                    </form>
                </div>
            </div>
        </Modal.Body>
        </Modal>
    )
}

export default Penawaran