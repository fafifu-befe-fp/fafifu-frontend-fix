import React from 'react'
import style from './LogReg.module.css'

const Register = () => {
  return (
    <div className='row justify-content-center align-items-center h-100 logregRes'>
        <div className='col-10 col-sm-8 col-lg-6'>
            <h1 className='mb-3'>Daftar</h1>
            <form>
                <div className='mb-3'>
                    <label for="inputName" className="form-label">Nama</label>
                    <input type="text" className="form-control" placeholder="Nama Lengkap" aria-label="First name" />
                </div>
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="InputEmail" placeholder='Contoh: johndee@gmail.com' />
                </div>
                <div class="mb-3">
                  <label for="InputPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="InputPassword" placeholder='Masukkan password' />
                </div>
                <button type="submit" class={`${style.buttonsimpan} w-100 text-white mb-5`}>Submit</button>
                <div className='wrapper-signup text-center'>
                  <span>Sudah punya akun? <a href='#' className='text-decoration-none'>Masuk di sini</a></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register