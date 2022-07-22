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
import {useRef} from 'react';
import {FiSearch} from 'react-icons/fi';

const Notification = () => {
    const [offerList, setOfferList] = useState([])
    const [statusCode, setStatusCode] = useState()
    const [filterNotify, setFilterNotify] = useState()
      
    useEffect(() => {
        axios
            .get(`https://fafifu-backend-api.herokuapp.com/v1/notification/all`, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                },
            })
            .then((res) => {
                setStatusCode(res.status);
                setOfferList(res.data.data);
            })
            .catch((err) => {
                // 
            });           

    }, []);
    console.log('ini offer list: ', offerList)
    
    const ref = useRef(null);
  
    const getAll = () => {
      if (localStorage.getItem("jwtToken")) {
        axios
          .get(
            `https://fafifu-backend-api.herokuapp.com/v1/notification/all`,
            {
              headers: {
                Authorization: localStorage.getItem("jwtToken"),
              },
            }
          )
          .then((res) => {
            console.log('ini ress', res)
            setOfferList(res.data.data);
            setFilterNotify(null)
          })
          .catch((err) => {
            // 
          });
      } else {
        axios
          .get(
            `https://fafifu-backend-api.herokuapp.com/v1/notification/all`,
          )
          .then((res) => {
            setOfferList(res.data.data);
            setFilterNotify(null)
          })
          .catch((err) => {
            // 
          });
      }
    };

    return (
        <div className={'container-fluid'}>
            <div className={'row mt-4 d-flex justify-content-center'}>
                <div className={'col-sm-6 col-md-12 col-lg-8 forminfo'}>
                <Link to="/" className={`text-decoration-none`}><IoMdArrowBack size={20} className={`${style.backlogo}`}/>Kembali</Link>
                
                <div className={`d-flex flex-row my-3 overflow-auto`}>
                    <button type='button' ref={ref} value="Get All" onClick={() => setFilterNotify(null)} className={`${style.btn}`}><FiSearch className={'fi m-1'}/>Semua</button>
                    {/* <button type='button' ref={ref} value="Get All" onClick={getAll} className={`${style.btn}`}><FiSearch className={'fi m-1'}/>Semua</button> */}
                    <button type='button' ref={ref} value="Incoming Offer" onClick={() => setFilterNotify('Incoming Offer')} className={`${style.btn}`}><FiSearch className={'fi m-1'}/>Incoming Offer</button>
                    <button type='button' ref={ref} value="Published Product" onClick={() => setFilterNotify('Published Product')} className={`${style.btn}`}><FiSearch className={'fi m-1'}/>Published Product</button>
                    <button type='button' ref={ref} value="Published Offer" onClick={() => setFilterNotify('Published Offer')} className={`${style.btn}`}><FiSearch className={'fi m-1'}/>Published Offer</button>
                    <button type='button' ref={ref} value="Accepted Offer" onClick={() => setFilterNotify('Accepted Offer')} className={`${style.btn}`}><FiSearch className={'fi m-1'}/>Accepted Offer</button>
                </div>

                {/* Div Notifikasi */}
                {console.log('ini filterNotify: ', filterNotify)}

                {offerList
                    .map((offerLists) => {
                    return(
                        <>
                            {
                                offerLists.statusNotification === 'Incoming Offer' &&
                                <Link 
                                    style={{ textDecoration: 'none'}} 
                                    to={`/penawaran/${offerLists.offer.publicId}`}
                                    className={`text-black`}
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
                                    <div className={`row d-flex flex-row shadow py-3 px-1 mt-3 rounded ${style.notificationContainer}`}>
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
                                                <div className={`d-flex flex-row`}>
                                                    <div className={`d-flex flex-row ${style.textDitawar}`}>
                                                        Ditawar
                                                    </div>
                                                    <div>
                                                        <NumberFormat className={`d-flex flex-row ${style.hargaDitawar}`} value={offerLists.product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            }
                            {
                                offerLists.statusNotification === 'Accepted Offer' &&
                                <Link className={`text-black`} style={{ textDecoration: 'none' }} to={`/infopb/${offerLists.product.publicId}`}>
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
                                offerLists.statusNotification === 'Published Product' &&
                                <Link className={`text-black`} style={{ textDecoration: 'none' }} to={`/infop/${offerLists.product.publicId}`}>
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
                                offerLists.statusNotification === 'Published Offer' &&
                                <Link className={`text-black`} style={{ textDecoration: 'none' }} to={`/infopb/${offerLists.product.publicId}`}>
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
                        </>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Notification