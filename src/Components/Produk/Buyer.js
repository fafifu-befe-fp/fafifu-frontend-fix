import React, { useState, useEffect } from 'react'
import style from './product.module.css'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

const Buyer = (props) => {

  const param = useParams()
  const navigate = useNavigate()

  const [ isWishlist, setIsWishlist ] = useState(props.products.status.wishlist)

  const [ wishlistStatus, setWishlistStatus ] = useState({
      success: false,
      message: "",
  });

  const formDeleteHandler = () => {
    setIsWishlist(!isWishlist);
    console.log('ini header ', localStorage.getItem('jwtToken'))
    axios.delete(`https://fafifu-backend-api.herokuapp.com/v1/product/${param.id}/wishlist`, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      },
    })
    .then ( res => 
      console.log(res),
      console.log('BERHASIL MENGHAPUS')
    )
    .catch ( err =>
      setWishlistStatus({
        success: false,
        message: 'Sorry something is wrong, please try again.'
      })
    )
  }

  const formSubmitHandler = () => {
    setIsWishlist(!isWishlist);
    console.log('ini header ', localStorage.getItem('jwtToken'))
    axios.post(`https://fafifu-backend-api.herokuapp.com/v1/product/${param.id}/wishlist`, {}, {
      headers: {
        Authorization: localStorage.getItem('jwtToken')
      },
    })
    .then ( res => 
      console.log(res),
      console.log('BERHASIL MENAMBAH')
    )
    .catch ( err =>
      setWishlistStatus({
        success: false,
        message: 'Sorry something is wrong, please try again.'
      })
    )
  }

  return (
    <div className={`card w-100 ${style.cardProductBuyer} mb-4`}>
      <div className='card-body mx-2'>
        <div className={`d-flex flex-row justify-content-between`}>
          <h5 className={`${style.namaBarang}`}>{props.products.name}</h5>
          <div>
            {
              localStorage.getItem('jwtToken') &&
                <AiFillStar 
                  onClick={isWishlist ? formDeleteHandler : formSubmitHandler}
                  className={isWishlist ? `${style.wishlistOn}`: `${style.wishlistOff}`}
                />
            }
          </div>
        </div>
        <p className={`${style.jenisBarang}`}>
          {props.products.category.map((productCategory) => {
            return(
              <div>
                {productCategory.name}
              </div>
            )
          })}
        </p>
        <h5 className={`${style.hargaBarang}`}>Rp. {props.products.price}</h5>
        <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-3 mt-3`}>Saya tertarik dan ingin nego</button>
      </div>
    </div>
  )
}

export default Buyer