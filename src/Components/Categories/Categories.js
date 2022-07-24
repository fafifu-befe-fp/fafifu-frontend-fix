import React, { useEffect, useState } from 'react'
import style from './Categories.module.css';
import {FiSearch} from 'react-icons/fi';
import {RiArrowDownSLine} from 'react-icons/ri';
import axios from "axios";
import {useRef} from 'react';
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format';
import { useForm } from 'react-hook-form'

const Category = () => {

  const [products, setProducts] = useState([])
  const [statusCode, setStatusCode] = useState()
  const [search, setSearch] = useState();

  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
      axios
        .get(`https://api-fafifu-secondhand.herokuapp.com/v1/product/`, {
          headers: {
            Authorization: localStorage.getItem('jwtToken'),
          },
        })
        .then((res) => {
          setProducts(res.data.data);
          setStatusCode(res.status);
        })
        .catch((err) => {
          setStatusCode(err.response.status);
        });
    }else{
      axios.get(`https://api-fafifu-secondhand.herokuapp.com/v1/product/`)
        .then((res) => {
          setProducts(res.data.data)
          setStatusCode(res.status);
        })
        .catch((err) => {
          setStatusCode(err.response.status);
        });
    }
  }, []);
  
  const ref = useRef(null);
  
  const filterCategory = (event) => {
    if (localStorage.getItem("jwtToken")) {
      axios
        .get(
          `https://api-fafifu-secondhand.herokuapp.com/v1/product?categoryId=${event.currentTarget.id}`,
          {
            headers: {
              Authorization: localStorage.getItem("jwtToken"),
            },
          }
        )
        .then((res) => {
          setSearch(event);
          setProducts(res.data.data);
          setStatusCode(res.status);
        })
        .catch((err) => {
          setStatusCode(err.response.status);
        });
    } else {
      axios
        .get(
          `https://api-fafifu-secondhand.herokuapp.com/v1/product?categoryId=${event.currentTarget.id}`
        )
        .then((res) => {
          setSearch(event);
          setProducts(res.data.data);
          setStatusCode(res.status);
        })
        .catch((err) => {
          setStatusCode(err.response.status);
        });
    }
  };
  
  const { register, handleSubmit, formState } = useForm()

  const filterSearch = (data) => {
    if (localStorage.getItem("jwtToken")) {
      axios
        .get(
          `https://api-fafifu-secondhand.herokuapp.com/v1/product/search?search=${data.value}`,
          {
            headers: {
              Authorization: localStorage.getItem("jwtToken"),
            },
          }
        )
        .then((res) => {
          setSearch(data.value);
          setProducts(res.data.data);
          setStatusCode(res.status);
        })
        .catch((err) => {
          setStatusCode(err.response.status);
        });
    } else {
      axios
        .get(
          `https://api-fafifu-secondhand.herokuapp.com/v1/product/search?search=${data.value}`,
        )
        .then((res) => {
          setProducts(res.data.data);
          setStatusCode(res.status);
          setSearch(data.value);
        })
        .catch((err) => {
          setStatusCode(err.response.status);
        });
    }
  };

  return (
    <div className={`container ${style.categoryContainer}`}>
        <h6 className={'mt-1 mx-4'}><b>Telusuri Kategori</b></h6>
        <div className={`d-flex flex-column`}>
          <form onSubmit={handleSubmit(filterSearch)} className="d-flex mx-4 mt-2" role="search">
            <input 
              className={`${style.searchBar} form-control me-2`} 
              type="search" 
              placeholder="Cari barang di sini ..." 
              aria-label="Search"
              {...register('value')}
            />
            <button className={`${style.btnSearch}`} type="submit" id='searchBar'>
              Cari
            </button>
            
          </form>
          <div className={`d-flex flex-row m-3 overflow-auto`}>
            <select name="sort" id="homepageSort" className={`${style.homepageSort} m-2`}><RiArrowDownSLine className={'text-dark'}/>
              <option selected disabled>Sort</option>
              <option value="default">Default</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="expensive">Expensive</option>
              <option value="cheap">Cheap</option>
            </select>
            <button type='button' ref={ref} onClick={filterCategory} className={`${style.btn} ${style.btnActive} m-2`}><FiSearch className={'fi m-1'}/>Semua</button>
            <button type='button' ref={ref} onClick={filterCategory} id="1" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Hobi</button>
            <button type='button' ref={ref} onClick={filterCategory} id="2" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Kendaraan</button>
            <button type='button' ref={ref} onClick={filterCategory} id="3" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Baju</button>
            <button type='button' ref={ref} onClick={filterCategory} id="4" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Elektronik</button>
            <button type='button' ref={ref} onClick={filterCategory} id="5" className={`${style.btn} m-2`}><FiSearch className={'fi m-1'}/>Kesehatan</button>
          </div>
        </div>

        {/* CARD FIX */}
        <section className={`d-flex h-100 ${style.gede}`}>
          <div className='container'>
            <div className={`row gy-4 ${style.productContainer}`}> 
            {
              (statusCode === 404) &&
                  <>
                    <div className='container d-flex justify-content-center'>
                        <div className='row d-flex flex-column '>
                            <img src='/img/product.png' className={`${style.wishlistImage}`}/>
                            <div className={`${style.blankMessage} text-center`}>Barang / Kategori tersebut tidak ditemukan</div>
                        </div>
                    </div>
                  </>
            }
            {
              (statusCode === 200) &&
              <>
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
                </>
              }
            </div>
          </div>
        </section>
      </div>
  )
}

export default Category