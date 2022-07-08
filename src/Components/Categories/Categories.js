import React, { useEffect, useState } from 'react'
import style from './Categories.module.css';
import Card from '../Card/Card';
import {FiSearch} from 'react-icons/fi';
import axios from "axios";
import {useRef} from 'react';
import { Link } from 'react-router-dom'

const Category = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      axios
        .get(`https://fafifu-backend-api.herokuapp.com/v1/product/`, {
          headers: {
            Authorization: localStorage.getItem('jwtToken'),
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setProducts(res.data.data);
        });
    }else{
      axios.get(`https://fafifu-backend-api.herokuapp.com/v1/product/`)
        .then((res) => {
          setProducts(res.data.data)
          console.log(res.data.data);
        })
    }
  }, []);
  
  const ref = useRef(null);
  
  const filterCategory = event => {
    axios.get(`https://fafifu-backend-api.herokuapp.com/v1/product?categoryId=${event.currentTarget.id}`)
    .then((res) => {
      setProducts(res.data.data)
    })
  }

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

        {/* CARDS */}
        <div className={`row ${style.productContainer}`}>
          {products.map((product) => {
              return(
                <div className={`col-lg-3 col-md-4 col-sm-6 col-10`}>
                  <div className={` container ${style.containerCard} p-0 mb-4`}>
                      <Link to={`/infopb/${product.publicId}`} className='text-decoration-none w-100'>
                        <div className={`${style.cardProduct}`}>
                          <img className={`card-img-top ${style.imgProduct}`} src={product.imageUrl[0].imageUrl} alt="Card image" />
                          <div className={"card-body py-2"}>
                            <h5 className={`card-title ${style.cardTitle}`}>{product.name}</h5>
                            <small className={`card-text ${style.cardCategory} d-flex flex-row flex-wrap`}>
                              {product.category.map((productCategory) => {
                                return(
                                  <div className={`${style.commaText}`}>
                                    {productCategory.name}
                                  </div>
                                )
                              })}
                            </small>
                            <div className={`mt-4 ${style.cardPrice}`}>Rp. {product.price}</div>
                          </div>
                        </div>
                      </Link>
                  </div>
                </div>
              )
          })} 
        </div>
    </div>
  )
}

export default Category