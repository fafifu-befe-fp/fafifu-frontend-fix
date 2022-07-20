import React, { useEffect, useState } from 'react'
import style from './Categories.module.css';
import Card from '../Card/Card';
import {FiSearch} from 'react-icons/fi';
import axios from "axios";
import {useRef} from 'react';
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format';

// const API_URL = process.env.REACT_APP_API_URL

const Category = () => {

  const [products, setProducts] = useState([])
  const [statusCode, setStatusCode] = useState()

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      axios
        // .get(API_URL + '/v1/product/', {
        .get(`https://fafifu-backend-api.herokuapp.com/v1/product/`, {
          headers: {
            Authorization: localStorage.getItem('jwtToken'),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setProducts(res.data.data);
          setStatusCode(res.status);
        });
    }else{
      axios.get(`https://fafifu-backend-api.herokuapp.com/v1/product/`)
        .then((res) => {
          setProducts(res.data.data)
          setStatusCode(res.status);
          console.log(res.data.data);
        })
    }
  }, []);
  
  const ref = useRef(null);
  
  const filterCategory = (event) => {
    if (localStorage.getItem("jwtToken")) {
      axios
        .get(
          `https://fafifu-backend-api.herokuapp.com/v1/product?categoryId=${event.currentTarget.id}`,
          {
            headers: {
              Authorization: localStorage.getItem("jwtToken"),
            },
          }
        )
        .then((res) => {
          setProducts(res.data.data);
        });
    } else {
      axios
        .get(
          `https://fafifu-backend-api.herokuapp.com/v1/product?categoryId=${event.currentTarget.id}`
        )
        .then((res) => {
          setProducts(res.data.data);
        });
    }
  };

  return (
    <div className={`container ${style.categoryContainer}`}>
        <h6 className={'mt-1 mx-4'}><b>Telusuri Kategori</b></h6>
        <div className={`d-flex flex-row m-3 overflow-auto`}>
          <button type='button' ref={ref} onClick={filterCategory} className={`${style.btn} ${style.btnActive} m-2`}><FiSearch className={'fi m-1'}/>Semua</button>
          <button type='button' ref={ref} onClick={filterCategory} id="1" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Hobi</button>
          <button type='button' ref={ref} onClick={filterCategory} id="2" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Kendaraan</button>
          <button type='button' ref={ref} onClick={filterCategory} id="3" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Baju</button>
          <button type='button' ref={ref} onClick={filterCategory} id="4" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Elektronik</button>
          <button type='button' ref={ref} onClick={filterCategory} id="5" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Kesehatan</button>
        </div>


        {/* CARD FIX */}
        <section className={`d-flex h-100 ${style.gede}`}>
          <div className='container'>
            <div className={`row gy-4 ${style.productContainer}`}>
              {products.map((product) => {
                  return(
                    <div className='d-flex justify-content-center justify-content-lg-start col-xl-2 col-lg-3 col-md-4 col-sm-6 col-10'>
                      <div className={`box h-100 d-flex flex-row flex-wrap ${style.cardProduct}`}>
                      <Link to={`/infopb/${product.publicId}`} className='text-decoration-none'>
                        <img className={`${style.imgProduct} justify-content-center`} src={product.imageUrl} alt="Card image" />
                        <h5 className={`card-title mt-2 ${style.cardTitle}`}>{product.name}</h5>
                        <small className={`card-text mt-2 ${style.cardCategory} d-flex flex-row flex-wrap`}>
                          {product.category.map((productCategory) => {
                            return(
                              <div className={`${style.commaText}`}>
                                {productCategory.name}
                              </div>
                            )
                          })}
                        </small>
                        <div className={`mt-2 ${style.cardPrice}`}>
                          <NumberFormat value={product.price} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
                        </div>
                      </Link>
                      </div>
                    </div>
                  )
              })} 
            </div>
          </div>
        </section>
      </div>
  )
}

export default Category