import React, { useState } from 'react'
import style from './LogReg.module.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

// require("dotenv").config();

const Register = () => {

  const { register, handleSubmit, formState } = useForm()
    const [ regStatus, setRegStatus ] = useState({
        success: false,
        message: "",
    });
    const navigate = useNavigate()

    const formSubmitHandler = (data) => {
      const postData = {
        email: data.email,
        password: data.password,
        name: data.name
      }
      axios.post('https://fafifu-backend-api.herokuapp.com/v1/auth/register', postData)
      .then ( res => 
        console.log(res),
        navigate('/login')
      )
      .catch ( err =>
        setRegStatus({
          success: false,
          message: 'Sorry something is wrong, please try again.'
        })
      )
    }

  return (
    <div className='row justify-content-center align-items-center h-100 logregRes'>
        <div className='col-10 col-sm-8 col-lg-6'>
            <h1 className='mb-3'>Daftar</h1>
            { (!regStatus.success && regStatus.message) && <p className='text-danger'>{regStatus.message}</p>}
            <form onSubmit={ handleSubmit(formSubmitHandler) }> 
                <div className='mb-3'>
                    <label for="inputName" className="form-label">Nama</label>
                    <input type="text" className="form-control" placeholder="Nama Lengkap" aria-label="First name" {...register('name', {required: true})} autoComplete="true" />
                </div>
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="InputEmail" placeholder='Contoh: johndee@gmail.com' {...register('email', {required: true})} autoComplete="true"/>
                </div>
                <div class="mb-3">
                  <label for="InputPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="InputPassword" placeholder='Masukkan password' {...register('password',  {required: true})} autoComplete="true"/>
                </div>
                <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-5`}>Submit</button>
                <div className='wrapper-signup text-center'>
                  <span>Sudah punya akun? <Link to='/login' className='text-decoration-none'>Masuk di sini</Link></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register