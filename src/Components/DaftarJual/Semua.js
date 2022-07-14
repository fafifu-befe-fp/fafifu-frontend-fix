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
            .get(`https://fafifu-backend-api.herokuapp.com/v1/product/user/${localStorage.getItem('sessionId')}`, {
                headers: {
                    Authorization: localStorage.getItem('jwtToken'),
                },
            })
            .then((res) => {
                setStatusCode(res.status)
                if (statusCode == 200) {
                    setProductsProfile([...res.data.data]);
                }
            })
            .catch((err) => {
                setStatusCode(err.response.status)
            });            
    }, []);

    return (
        <div>
            <div>Status Codee: {statusCode}</div>
            { statusCode == 200 &&
                <div className={`col-lg-12 py-0 d-flex flex-wrap`}>   
                    {productsProfile.map((productProfile) => {
                        return(
                            <>
                                <Link to={`/infop/${productProfile.publicId}`} className={`text-decoration-none`}>
                                    <Card productProfile={productProfile}/>
                                </Link>
                            </>
                        )
                    })}
                </div>
                // Ada bug harus di TRIGGER refresh
            }
            { statusCode == 404 &&
                <div className={`col-lg-12 m-0 p-0 d-flex justify-content-center align-items-center`}>
                    <div className={`d-flex flex-column justify-content-center align-items-center `}>
                        <div>
                            <GiNothingToSay className={`${style.smile}`}/>
                        </div>
                        <div className={`${style.smileText}`}>
                            Tidak ada barang
                        </div>
                    </div>
                </div>
                // Ini ga perlu TRIGGER, kenapa?
            }
        </div>
    )
}

export default Semua