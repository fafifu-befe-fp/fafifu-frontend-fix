import React, { useState, useEffect } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { useDropzone } from 'react-dropzone';
import { IoMdClose } from 'react-icons/io'
import style from './Notification.module.css'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios";

const Notification = () => {
    const [offerList, setofferList] = useState([])
    const [statusCode, setStatusCode] = useState()
      
    useEffect(() => {
        axios
            // .get(`https://fafifu-backend-api.herokuapp.com/v1/product/offer${localStorage.getItem('sessionId')}`, {
            .get(`https://fafifu-backend-api.herokuapp.com/v1/product/offer`, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                },
            })
            .then((res) => {
                setStatusCode(res.status);
                setofferList(res.data.data);
            })
            .catch((err) => {
                // setStatusCode(err.response.status);
                // setofferList(err.response.data.message);
            });           

            console.log('ini offer list: ', offerList)
    }, []);
    

    return (
        <div className={'container-fluid'}>
            <Link to="/"><IoMdArrowBack className={`${style.backlogo} mt-2`} size={20} /></Link>
            <div className={'row mt-3 d-flex justify-content-center'}>
                <div className={'col-sm-6 col-md-12 col-lg-6 forminfo'}>

                    {/* Div Notifikasi */}
                    <Link style={{ textDecoration: 'none' }} to='/listpenawar'>
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
                                    <div className={`${style.textSecondary} ml-auto d-flex`}>
                                        <div className={`${style.textSecondary} mx-2`}>
                                            20 Apr, 14.00
                                        </div>
                                        <div className={`${style.iconSecondary}`}>
                                            <GoPrimitiveDot/>
                                        </div>
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
                    </div>
                    </Link>

                    {/* Div Notifikasi */}
                    <Link style={{ textDecoration: 'none' }} to='/listpenawar'>
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
                                    <div className={`${style.textSecondary} ml-auto d-flex`}>
                                        <div className={`${style.textSecondary} mx-2`}>
                                            20 Apr, 14.00
                                        </div>
                                        <div className={`${style.iconSecondary}`}>
                                            <GoPrimitiveDot/>
                                        </div>
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
                    </div>
                    </Link>

                    {/* Div Notifikasi */}
                    <Link style={{ textDecoration: 'none' }} to='/listpenawar'>
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
                                    <div className={`${style.textSecondary} ml-auto d-flex`}>
                                        <div className={`${style.textSecondary} mx-2`}>
                                            20 Apr, 14.00
                                        </div>
                                        <div className={`${style.iconSecondary}`}>
                                            <GoPrimitiveDot/>
                                        </div>
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
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Notification