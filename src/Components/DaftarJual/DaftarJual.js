import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import Card from './DaftarJualCard';
import style from './DaftarJual.module.css'

const DaftarJual = () => {
  return (
    <div className={'container-fluid'}>
        <div className={'row mt-2 d-flex justify-content-center'}>
            <div className={'col-sm-9 col-md-9 col-lg-9 forminfo'}>
                <h4 className={'my-3 font-weight-bold'}>
                    Daftar Jual Saya
                </h4>
                {/* <IoMdArrowBack className={'backlogo mt-2'} size={20} /> */}
                <div className={"row d-flex flex-row shadow rounded p-3"}>
                    <img className={"col-auto p-0 m-0 d-flex justify-content-center align-items-center h-auto me-3"} src='img/Penjual.svg' alt='Penjual'/>
                    <div className={"col d-flex flex-row justify-content-between align-items-center p-0 m-0"}>
                        <div className={"col-auto"}>
                            <div>
                                Nama Penjual
                            </div>
                            <div className={`${style.kota}`}>
                                Kota
                            </div>
                        </div>
                        <div className={"col-auto"}>
                            <button type="button" className={`btn ${style.editButton} d-flex justify-content-center align-items-center`}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                {/* <Hubungi/> */}
                <div className={"row d-flex flex-row py-3 mb-3"}>
                    <div className={"col-lg-3 px-4 shadow rounded h-50"}>
                        <div className={`row my-3 ${style.titleCategory}`}>
                            Kategori
                        </div>
                        <div className={`row py-0 ${style.categoryContainer}`}>
                            <div className={"col-auto p-0 m-0 d-flex align-items-center"}>
                                <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/box.svg' alt=""/>
                            </div>
                            <div className={`col ${style.textCategory} py-2`}>
                                Semua Produk
                            </div>
                            <div className={`col-auto p-0 m-0 ${style.svg} d-flex align-items-center`}>
                                <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                            </div>
                        </div>
                        <hr/>
                        <div className={`row py-0 ${style.categoryContainer}`}>
                            <div className={"col-auto p-0 m-0 d-flex align-items-center"}>
                                <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/heart.svg' alt=""/>
                            </div>
                            <div className={`col ${style.textCategory} py-2`}>
                                Diminati
                            </div>
                            <div className={`col-auto p-0 m-0 ${style.svg} d-flex align-items-center`}>
                                <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                            </div>
                        </div>
                        <hr/>
                        <div className={`row py-0 mb-4 ${style.categoryContainer}`}>
                            <div className={"col-auto p-0 m-0 d-flex align-items-center"}>
                                <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/dollar.svg' alt=""/>
                            </div>
                            <div className={`col ${style.textCategory} py-2`}>
                                Terjual
                            </div>
                            <div className={`col-auto p-0 m-0 ${style.svg} d-flex align-items-center`}>
                                <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                            </div>
                        </div>
                        <hr/>
                        <div className={`row py-0 mb-4 ${style.categoryContainer}`}>
                            <div className={"col-auto p-0 m-0 d-flex align-items-center"}>
                                <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/star.svg' alt=""/>
                            </div>
                            <div className={`col ${style.textCategory} py-2`}>
                                Wishlist
                            </div>
                            <div className={`col-auto p-0 m-0 ${style.svg} d-flex align-items-center`}>
                                <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-9 py-0 d-flex flex-wrap ${style.productContainer}`}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DaftarJual