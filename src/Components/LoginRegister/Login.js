import React from 'react'
import style from './LogReg.module.css'

const Login = () => {
  return (
    <div className={`row justify-content-center align-items-center h-100 ${style.logregRes}`}>
        <div className='col-10 col-sm-8 col-lg-6'>
            <h1 className='mb-3'>Masuk</h1>
            <form>
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="InputEmail" placeholder='Contoh: johndee@gmail.com' />
                </div>
                <div class="mb-3">
                  <label for="InputPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="InputPassword" placeholder='Masukkan password'/>
                </div>
                <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-5`}>Submit</button>
                <div className='wrapper-signup text-center'>
                  <span>Belum punya akun? <a href='#' className='text-decoration-none'>Daftar di sini</a></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login