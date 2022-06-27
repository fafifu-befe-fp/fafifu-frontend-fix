import React from 'react'
import CarouselProduct from '../../Components/Produk/Carousel'
import Desc from '../../Components/Produk/Desc'
import Product from '../../Components/Produk/Product'
import Seller from '../../Components/Produk/Seller'
import style from './fixingcss.module.css'

const InfoProduk = () => {
  return (
    <div className={`container d-sm-flex justify-content-center mt-4 ${style.containerProduct}`}>
        <div className='row'>
            <div className='col-12 col-md-8'>
                <CarouselProduct />
                <Desc />
            </div>
            <div className='col-12 col-md-4'>
                <Product />
                <Seller />
            </div>

        </div>
    </div>
  )
}

export default InfoProduk