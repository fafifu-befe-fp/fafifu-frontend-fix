import React from 'react'
import style from './InfoProfile.module.css'
import FormInfoProfile from './Form'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <div className='container d-block'>
        <div className='row mt-5 d-flex justify-content-center'>
            <div className={`col-12 col-sm-10 col-md-8 col-lg-6 ${style.formInfo}`}>
                <Link to='/profile/semua'>
                  <IoMdArrowBack className={`${style.backlogo} mt-2`} size={20} />
                </Link>
                <FormInfoProfile />
            </div>
        </div>
    </div>
  )
}

export default Info