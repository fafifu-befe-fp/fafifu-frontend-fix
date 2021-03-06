import React from 'react'
import LeftSide from '../../Components/LoginRegister/LeftSide'
import RegisterComponent from '../../Components/LoginRegister/Register'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='login-page d-flex m-0 '>
        <div className='login-left w-50 h-100 d-none d-sm-block'>
          <Link to='/'>
            <LeftSide />
          </Link>
        </div>
        <div className='login-right w-50 h-100'>
          <div className='text-center logo d-block d-sm-none'>
            <img src='img/logo-sh.svg' className='imglogo mb-3'/>
          </div>
          <RegisterComponent />
        </div>
    </div>
  )
}

export default Register