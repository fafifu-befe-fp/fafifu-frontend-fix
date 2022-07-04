import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`navbar sticky-top d-flex justify-content-between align-items-center`}>
      <div className='container d-flex'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-auto'>
            <img src='img/logokotak.svg' alt='logoimg' className={`${style.logoKotak}`} />
          </div>
          <div className='col'>
            <form className='d-flex' role='search'>
              <input className={`${style.searchBar} form-control`} type='search' placeholder='Cari di sini' />
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar