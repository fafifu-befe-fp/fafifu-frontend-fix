import React, { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { BsWhatsapp } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone';
import axios from "axios";
import Card from './DaftarJualCard';
import style from './DaftarJual.module.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom'

const DaftarJual = () => {
    
  const [productsProfile, setProductsProfile] = useState([])
    
    useEffect(() => {
        axios
            .get(`https://fafifu-backend-api.herokuapp.com/v1/product/shop/${localStorage.getItem('sessionId')}`, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                },
            })
            .then((res) => {
                console.log('ini res', res.data.data);
                setProductsProfile(res.data.data);
            });
  }, []);
  return (
    <>
        <Navbar />
        <div className={'container'}>
            <div className={'row mt-2 d-flex justify-content-center'}>
                <div className={'col-sm-9 col-md-9 col-lg-9 forminfo'}>
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
                            <div className={`col-auto ${style.sellerName}`}>
                                <div>
                                    {localStorage.getItem('sessionName')}
                                </div>
                                <div className={`${style.kota}`}>
                                    {localStorage.getItem('sessionCity')}
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
                </div>
            </div>
            <div className={`row py-3 mb-3 d-flex justify-content-center ${style.containerProfile}` }>
                <div className={`${style.cardContainer} col-lg-3 px-4`}>
                    <div className={`row mb-3 ms-0 ${style.titleCategory}`}>
                        Kategori
                    </div>
                    <div className={`row ${style.categoryContainer}`}>
                        <div className={"col-auto d-flex align-items-center"}>
                            <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/box.svg' alt=""/>
                        </div>
                        <div className={`col ${style.textCategory} py-2`}>
                            Semua Produk
                        </div>
                        <div className={`col-auto ${style.svg} d-flex align-items-center`}>
                            <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                        </div>
                    </div>
                    <hr/>
                    <div className={`row ${style.categoryContainer}`}>
                        <div className={"col-auto d-flex align-items-center"}>
                            <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/heart.svg' alt=""/>
                        </div>
                        <div className={`col ${style.textCategory} py-2`}>
                            Diminati
                        </div>
                        <div className={`col-auto ${style.svg} d-flex align-items-center`}>
                            <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                        </div>
                    </div>
                    <hr/>
                    <div className={`row ${style.categoryContainer}`}>
                        <div className={"col-auto d-flex align-items-center"}>
                            <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/dollar.svg' alt=""/>
                        </div>
                        <div className={`col ${style.textCategory} py-2`}>
                            Terjual
                        </div>
                        <div className={`col-auto ${style.svg} d-flex align-items-center`}>
                            <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                        </div>
                    </div>
                    <hr/>
                    <div className={`row ${style.categoryContainer}`}>
                        <div className={"col-auto d-flex align-items-center"}>
                            <img className={`img-fluid w-100 h-auto ${style.svg}`} src='img/star.svg' alt=""/>
                        </div>
                        <div className={`col ${style.textCategory} py-2`}>
                            Wishlist
                        </div>
                        <div className={`col-auto ${style.svg} d-flex align-items-center`}>
                            <img className={"img-fluid w-100 h-auto"} src='img/arrow-right.svg' alt=""/>
                        </div>
                    </div>
                </div>
                <div className={`col-lg-9 d-flex mt-3 flex-wrap ${style.productContainer}`}>
                    {productsProfile.map((productProfile) => {
                        return(
                            <div className='col-lg-3'>
                                <Link to={`/infop/${productProfile.publicId}`} className='text-decoration-none'>
                                    <Card productProfile={productProfile}/>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
    
  )
}

export default DaftarJual