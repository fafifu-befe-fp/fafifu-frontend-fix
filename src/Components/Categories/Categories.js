import React, { useEffect, useState } from 'react'
import style from './Categories.module.css';
import styleCard from '../Card/Card.module.css';
import Card from '../Card/Card';
import {FiSearch} from 'react-icons/fi';
import axios from "axios";
import {useRef} from 'react';

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
    <div className={'container'}>
        <h6 className={'mt-1 mx-4'}><b>Telusuri Kategori</b></h6>
        <div className={'d-flex flex-row m-3'}>
          <button type='button' ref={ref} onClick={filterCategory} className={`${style.btn} ${style.btnActive} m-2`}><FiSearch className={'fi m-1'}/>Semua</button>
          <button type='button' ref={ref} onClick={filterCategory} id="1" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Hobi</button>
          <button type='button' ref={ref} onClick={filterCategory} id="2" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Kendaraan</button>
          <button type='button' ref={ref} onClick={filterCategory} id="3" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Baju</button>
          <button type='button' ref={ref} onClick={filterCategory} id="4" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Elektronik</button>
          <button type='button' ref={ref} onClick={filterCategory} id="5" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Kesehatan</button>
        </div>

        {/* CARDS */}
        <div className={'container'}>
        <div className={'row p-3'}>
          {products.map((product) => {
              return(
                <div className={'col-lg-2 col-sm-6 p-1'}>
                  <div className={'container'}>
                    <div className={`${styleCard.card} p-2 shadow rounded border`}>
                      <img className={`card-img-top`} src={product.imageUrl[0].imageUrl} alt="Card image" />
                      <div className={"card-body py-3"}>
                        <h5 className={"card-title"}>{product.name}</h5>
                        <small className={"card-text text-muted"}>
                          {product.category.map((productCategory) => {
                            return(
                              <div>
                                {productCategory.name}
                              </div>
                            )
                          })}
                        </small>
                        <p className={'mt-2'}>Rp. {product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
          })}

          {/* Card lama */}
          {/* <div className={'col-lg-2 col-sm-6 p-1'}><Card /></div> */}
          
        </div>
        </div>

        {/* FLOATING ACTION BUTTON */}
        {/* <FloatButton /> */}

    </div>
  )
}

export default Category