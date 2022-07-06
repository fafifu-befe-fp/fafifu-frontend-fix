import React, { useState, useEffect } from 'react'
import CarouselProduct from '../../Components/Produk/Carousel'
import Desc from '../../Components/Produk/Desc'
import Buyer from '../../Components/Produk/Buyer'
import Seller from '../../Components/Produk/Seller'
import style from './fixingcss.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const InfoProdukBuyer = (props) => {

  const param = useParams()
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios.get(`https://fafifu-backend-api.herokuapp.com/v1/product/${param.id}`)
    .then((res) => {
      console.log('ini res:', res.data.data)
      setProducts(res.data.data)
    })
  },[])

  return (
    <>
      { products !== null &&
        <div className={`container d-sm-flex justify-content-center mt-4 ${style.containerProduct}`}>
            <div className='row'>
                <div className='col-12 col-md-8'>
                    <CarouselProduct products={products} />
                    <Desc />
                </div>
                <div className='col-12 col-md-4'>
                    <Buyer products={products} />
                    <Seller products={products}/>
                </div>
            </div>
        </div>
      }
    </>
  )
}

export default InfoProdukBuyer