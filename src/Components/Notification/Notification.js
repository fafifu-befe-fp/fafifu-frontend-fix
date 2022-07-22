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
import NumberFormat from 'react-number-format';

const Notification = () => {
    const [offerList, setofferList] = useState([])
    const [statusCode, setStatusCode] = useState()
      
    useEffect(() => {
        axios
            // .get(`https://fafifu-backend-api.herokuapp.com/v1/product/offer${localStorage.getItem('sessionId')}`, {
            .get(`https://fafifu-backend-api.herokuapp.com/v1/notification/all`, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                },
            })
            .then((res) => {
                setStatusCode(res.status);
                // console.log('ini res notif: ', res.data.data)
                setofferList(res.data.data);
            })
            .catch((err) => {
                // setStatusCode(err.response.status);
                // setofferList(err.response.data.message);
            });           

    }, []);
    console.log('ini offer list: ', offerList)

    return (
        <div className={'container-fluid'}>
            <Link to="/"><IoMdArrowBack className={`${style.backlogo} mt-2`} size={20} /></Link>
            <div className={'row mt-3 d-flex justify-content-center'}>
                <div className={'col-sm-6 col-md-12 col-lg-6 forminfo'}>

                    {/* Div Notifikasi */}
                {offerList.map((offerLists) => {
                    return(
                        <>
                            {
                                offerLists.statusNotification === 'Incoming Offer' &&
                                <Link 
                                    style={{ textDecoration: 'none' }} 
                                    to={`/penawaran/${offerLists.offer.publicId}`}
                                    onClick={

                                        ( () => {
                                            axios
                                                .post(`https://fafifu-backend-api.herokuapp.com/v1/notification/${offerLists.publicId}/read`, {},
                                                {
                                                    headers: {
                                                        Authorization: localStorage.getItem("jwtToken"),
                                                    }
                                                })
                                        })
                                    }
                                >
                                    <div className={"row d-flex flex-row shadow py-3 px-1 mt-3 rounded"}>
                                        <div className={"d-flex flex-row"}>
                                            <div className={"col-auto"}>
                                                <img className={`col-auto p-0 m-0 h-auto ${style.profilePhoto}`} src={offerLists.product.image} alt=''/>
                                            </div>
                                            <div className={"col-10 mx-3"}>
                                                <div className={"d-flex justify-content-between w-100"}>
                                                    <div className={`${style.textSecondary}`}>
                                                        {offerLists.statusNotification}
                                                    </div>
                                                    <div className={`${style.textSecondary} ml-auto d-flex`}>
                                                        <div className={`${style.textSecondary} mx-2`}>
                                                            {(offerLists.createdAt).substring(0, 10)}
                                                        </div>
                                                        {/* CONDITIONAL */}
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === false)) &&
                                                                <div className={`${style.iconUnread}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === true)) &&
                                                                <div className={`${style.iconRead}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    {offerLists.product.name}
                                                </div>
                                                <div>
                                                    <NumberFormat value={offerLists.product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                            {
                                offerLists.statusNotification === 'Accepted Offer' &&
                                <Link style={{ textDecoration: 'none' }} to={`/infopb/${offerLists.product.publicId}`}>
                                    <div className={"row d-flex flex-row shadow py-3 px-1 mt-3 rounded"}>
                                        <div className={"d-flex flex-row"}>
                                            <div className={"col-auto"}>
                                                <img className={`col-auto p-0 m-0 h-auto ${style.profilePhoto}`} src={offerLists.product.image} alt=''/>
                                            </div>
                                            <div className={"col-10 mx-3"}>
                                                <div className={"d-flex justify-content-between w-100"}>
                                                    <div className={`${style.textSecondary}`}>
                                                        {offerLists.statusNotification}
                                                    </div>
                                                    <div className={`${style.textSecondary} ml-auto d-flex`}>
                                                        <div className={`${style.textSecondary} mx-2`}>
                                                            {offerLists.createdAt}
                                                        </div>
                                                        {/* CONDITIONAL */}
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === false)) &&
                                                                <div className={`${style.iconUnread}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === true)) &&
                                                                <div className={`${style.iconRead}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    {offerLists.product.name}
                                                </div>
                                                <div>
                                                    <NumberFormat value={offerLists.product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                            {
                                offerLists.statusNotification === 'Published Product' &&
                                <Link style={{ textDecoration: 'none' }} to={`/infop/${offerLists.product.publicId}`}>
                                    <div className={"row d-flex flex-row shadow py-3 px-1 mt-3 rounded"}>
                                        <div className={"d-flex flex-row"}>
                                            <div className={"col-auto"}>
                                                <img className={`col-auto p-0 m-0 h-auto ${style.profilePhoto}`} src={offerLists.product.image} alt=''/>
                                            </div>
                                            <div className={"col-10 mx-3"}>
                                                <div className={"d-flex justify-content-between w-100"}>
                                                    <div className={`${style.textSecondary}`}>
                                                        {offerLists.statusNotification}
                                                    </div>
                                                    <div className={`${style.textSecondary} ml-auto d-flex`}>
                                                        <div className={`${style.textSecondary} mx-2`}>
                                                            {offerLists.createdAt}
                                                        </div>
                                                        {/* CONDITIONAL */}
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === false)) &&
                                                                <div className={`${style.iconUnread}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === true)) &&
                                                                <div className={`${style.iconRead}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    {offerLists.product.name}
                                                </div>
                                                <div>
                                                    <NumberFormat value={offerLists.product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                            {
                                offerLists.statusNotification === 'Published Offer' &&
                                <Link style={{ textDecoration: 'none' }} to={`/infopb/${offerLists.product.publicId}`}>
                                    <div className={"row d-flex flex-row shadow py-3 px-1 mt-3 rounded"}>
                                        <div className={"d-flex flex-row"}>
                                            <div className={"col-auto"}>
                                                <img className={`col-auto p-0 m-0 h-auto ${style.profilePhoto}`} src={offerLists.product.image} alt=''/>
                                            </div>
                                            <div className={"col-10 mx-3"}>
                                                <div className={"d-flex justify-content-between w-100"}>
                                                    <div className={`${style.textSecondary}`}>
                                                        {offerLists.statusNotification}
                                                    </div>
                                                    <div className={`${style.textSecondary} ml-auto d-flex`}>
                                                        <div className={`${style.textSecondary} mx-2`}>
                                                            {offerLists.createdAt}
                                                        </div>
                                                        {/* CONDITIONAL */}
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === false)) &&
                                                                <div className={`${style.iconUnread}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                        {
                                                            (localStorage.getItem('jwtToken') && (offerLists.isRead === true)) &&
                                                                <div className={`${style.iconRead}`}>
                                                                    <GoPrimitiveDot/>
                                                                </div>
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    {offerLists.product.name}
                                                </div>
                                                <div>
                                                    <NumberFormat value={offerLists.product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                        </>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Notification