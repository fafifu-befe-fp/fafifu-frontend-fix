import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './DaftarJualCard';
import axios from "axios";

const Semua = () => {
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
            {productsProfile.map((productProfile) => {
                return(
                    <>
                        <Link to={`/infop/${productProfile.publicId}`} className={`text-decoration-none`}>
                            <Card productProfile={productProfile}/>
                        </Link>
                    </>
                )
            })}
        </>
    )
}

export default Semua