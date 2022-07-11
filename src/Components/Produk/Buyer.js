import React, { useState, useEffect } from 'react'
import style from './product.module.css'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

const Buyer = (props) => {

  const param = useParams()
  const navigate = useNavigate()
  const [ wishlistStatus, setWishlistStatus ] = useState({
      success: false,
      message: "",
  });

  const formDeleteHandler = () => {
    console.log('ini header ', localStorage.getItem('jwtToken'))
    axios.delete(`https://fafifu-backend-api.herokuapp.com/v1/product/${param.id}/wishlist`, {}, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      },
    })
    .then ( res => 
      console.log(res)
    )
    .catch ( err =>
      setWishlistStatus({
        success: false,
        message: 'Sorry something is wrong, please try again.'
      })
    )
  }

  const formSubmitHandler = () => {
    console.log('ini header ', localStorage.getItem('jwtToken'))
    axios.post(`https://fafifu-backend-api.herokuapp.com/v1/product/${param.id}/wishlist`, {}, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      },
    })
    .then ( res => 
      console.log(res)
    )
    .catch ( err =>
      setWishlistStatus({
        success: false,
        message: 'Sorry something is wrong, please try again.'
      })
    )
  }
  

  // if (localStorage.getItem('jwtToken')) {
  //   axios
  //     .get(`https://fafifu-backend-api.herokuapp.com/v1/product/`, {
  //       headers: {
  //         Authorization: localStorage.getItem('jwtToken'),
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setProducts(res.data.data);
  //     });
  // }else{
  //   axios.get(`https://fafifu-backend-api.herokuapp.com/v1/product/`)
  //     .then((res) => {
  //       setProducts(res.data.data)
  //       console.log(res.data.data);
  //     })
  // }

  return (
    <div className={`card w-100 ${style.cardProductBuyer} mb-4`}>
      <div className='card-body mx-2'>
        <div className={`d-flex flex-row justify-content-between align-items-center`}>
          <h5 className={`${style.namaBarang}`}>{props.products[0].name}</h5>
          {
            // if(myObj.hasOwnProperty('key')){
            //     // <AiFillStar onClick={formSubmitHandler} className={`${style.wishlist}`}/>
            // }
          }
        </div>
        <p className={`${style.jenisBarang}`}>
          {props.products[0].category.map((productCategory) => {
            return(
              <div>
                {productCategory.name}
              </div>
            )
          })}
        </p>
        <h5 className={`${style.hargaBarang}`}>Rp. {props.products[0].price}</h5>
        <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-3 mt-3`}>Saya tertarik dan ingin nego</button>
      </div>
    </div>
  )
}

export default Buyer