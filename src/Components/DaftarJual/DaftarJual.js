import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import axios from "axios";
import Card from './DaftarJualCard';
import style from './DaftarJual.module.css'
import Navbar from '../Navbar/Navbar';
import Semua from './Semua'
import { Link, Outlet } from 'react-router-dom'

const DaftarJual = () => {
    
  return (
    <>
        <Navbar />
        <div className={'container'}>
            <div className={'row mt-2 d-flex justify-content-center'}>
                <div className={'col-10 col-sm-12 col-md-12 col-lg-9 forminfo'}>
                    <h4 className={`${style.daftarJualSaya} my-3 font-weight-bold`}>
                        Daftar Jual Saya
                    </h4>
                    {/* <IoMdArrowBack className={'backlogo mt-2'} size={20} /> */}
                    <div className={"row d-flex flex-row shadow rounded p-3"}>
                        <img 
                            className={`col-auto p-0 m-0 d-flex justify-content-center align-items-center h-auto me-3 shadow ${style.profilePhoto}`} 
                            src={localStorage.getItem('sessionImage')}
                            alt='Penjual'
                        />
                        <div className={"col d-flex flex-row justify-content-between align-items-center p-0 m-0"}>
                            <div className={"col-auto"}>
                                <div>
                                    {localStorage.getItem('sessionName')}
                                </div>
                                <div className={`${style.kota}`}>
                                    {localStorage.getItem('sessionCity')}
                                </div>
                            </div>
                            <div className={"col-auto"}>
                                <Link to="/info">
                                    <button type="button" className={`btn ${style.editButton} d-flex justify-content-center align-items-center`}>
                                        Edit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <Hubungi/> */}
                    <div className={`row py-3 mb-3 d-flex justify-content-center ${style.containerProfile}` }>
                        <div className={`col-lg-3 col-11 col-sm-8 px-4 shadow rounded h-50 ${style.cardContainer}`}>
                            <div className={`row my-3 ${style.titleCategory}`}>
                                Kategori
                            </div>
                            <Link to="/profile/semua">
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
                            </Link>
                            <hr/>
                            <Link to="/profile/diminati">
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
                            </Link>
                            <hr/>
                            <Link to="/profile/terjual">
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
                            </Link>
                            <hr/>
                            <Link to="/profile/wishlist">
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
                            </Link>
                        </div>
                        <div className={`col-lg-9 py-0 d-flex flex-wrap ${style.productContainer}`}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default DaftarJual