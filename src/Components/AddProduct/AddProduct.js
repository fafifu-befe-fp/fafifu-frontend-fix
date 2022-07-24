import React from 'react'
import FormAddProduct from './FormAddProduct'
import FormAdd from './FormAdd'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import style from './AddProduct.module.css'
import Navbar from '../Navbar/Navbar'

const AddProduct = () => {
  return (
    <>
        <Navbar />
        <div className='container d-block'>
            <div className='row mt-5 d-flex justify-content-center'>
                <div className={`col-12 col-sm-10 col-md-8 col-lg-6 ${style.formInfo}`}>
                    <Link to='/'>
                      <IoMdArrowBack className={`${style.backlogo} mt-2 text-decoration-none`} size={20} />
                    </Link>
                    <FormAddProduct />
                </div>
            </div>
        </div>    
    </>
    
  )
}

export default AddProduct