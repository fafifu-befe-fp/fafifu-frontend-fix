import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './DiminatiCard';
import axios from "axios";
import style from './DaftarJual.module.css'

const Diminati = () => {
    const [productsDiminati, setProductsDiminati] = useState([])
    const [statusCode, setStatusCode] = useState();
        
        useEffect(() => {
            axios
                .get(`https://fafifu-backend-api.herokuapp.com/v1/product/offer`, {
                    headers: {
                        Authorization: localStorage.getItem('jwtToken'),
                    },
                })
                .then((res) => {
                    setStatusCode(res.status);
                    setProductsDiminati(res.data.data);
                })
                .catch((err) => {
                    setStatusCode(err.response.status);
                    setProductsDiminati(err.response.data.message);
                });
    }, []);

    if (statusCode === 404) {
        return (
          <>
            <div className='container d-flex justify-content-center'>
                <div className='row d-flex flex-column '>
                    <img src='/img/diminati.png' className={`${style.wishlistImage}`}/>
                    <div className={`${style.wishlistText} text-center`}>Barang mu belum menarik nih D:</div>
                </div>
            </div>

          </>
        );
      }

    return (
        <>
            <div className={`col-lg-12 py-0 d-flex flex-wrap justify-content-center justify-content-lg-between`}></div>
                {productsDiminati.map((productDiminati) => {
                    return(
                        <>
                            <div className='d-flex'>
                                <div className={`box h-100 d-flex flex-row flex-wrap`}>
                                    <Link to={`/infop/${productDiminati.publicId}`} className={`text-decoration-none`}>
                                        <Card productDiminati={productDiminati}/>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )
                })}
        </>
    )
}

export default Diminati