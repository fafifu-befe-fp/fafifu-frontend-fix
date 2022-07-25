import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './DaftarJualCard';
import axios from "axios";
import { GiNothingToSay } from 'react-icons/gi';
import style from './DaftarJual.module.css'

const Semua = () => {
    const [productsProfile, setProductsProfile] = useState([])
    const [statusCode, setStatusCode] = useState()
      
    useEffect(() => {
        axios
            .get(`https://api-fafifu-secondhand.herokuapp.com/v1/product/user/${localStorage.getItem('sessionId')}`, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                },
            })
            .then((res) => {
                setStatusCode(res.status);
                setProductsProfile(res.data.data);
            })
            .catch((err) => {
                setStatusCode(err.response.status);
                setProductsProfile(err.response.data.message);
            });
    }, []);

    if (statusCode === 404) {
        return (
          <>
            <div className='container d-flex justify-content-center'>
                <div className='row d-flex flex-column '>
                    <img src='/img/product.png' className={`${style.wishlistImage}`}/>
                    <div className={`${style.wishlistText} text-center`}>Barang mu masih kosong nih D:</div>
                </div>
            </div>
          </>
        );
      }

    return (
        <>
            <div className={`col-lg-12 py-0 d-flex flex-wrap justify-content-between`}>
                {productsProfile.map((productProfile) => {
                    return(
                        <>
                            <div className='d-flex'>
                                <div className={`box h-100 d-flex flex-row flex-wrap`}>
                                    <Link to={`/infop/${productProfile.publicId}`} className={`text-decoration-none`}>
                                        <Card productProfile={productProfile}/>
                                    </Link>
                                </div>
                            </div>      
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Semua