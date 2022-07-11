import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './DiminatiCard';
import axios from "axios";

const Diminati = () => {
    const [productsDiminati, setProductsDiminati] = useState([])
        
        useEffect(() => {
            axios
                .get(`https://fafifu-backend-api.herokuapp.com/v1/offer`, {
                    headers: {
                        Authorization: localStorage.getItem('jwtToken'),
                    },
                })
                .then((res) => {
                    console.log('ini diminati', res.data.data);
                    setProductsDiminati(res.data.data);
                });
    }, []);

    return (
        <>
            {productsDiminati.map((productDiminati) => {
                return(
                    <>
                        <Link to={`/infop/${productDiminati.publicId}`} className={`text-decoration-none`}>
                            <Card productDiminati={productDiminati}/>
                        </Link>
                    </>
                )
            })}
        </>
    )
}

export default Diminati