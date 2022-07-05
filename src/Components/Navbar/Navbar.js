import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {FaUser, FaBell, FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className={`navbar sticky-top d-flex justify-content-between align-items-center`}>
      <div className='container d-flex'>
        <div className='row d-flex justify-content-between align-items-center'>
          <Link to="/" className='col-auto'>
            <img src='img/logokotak.svg' alt='logoimg' className={`${style.logoKotak}`} />
          </Link>
          <div className='col d-flex flex-row'>
            <form className='d-flex' role='search'>
              <input className={`${style.searchBar} form-control`} type='search' placeholder='Cari di sini' />
            </form>
            <div className="col-auto d-flex mx-4">
              <ul className="nav-menu list-inline mb-0">
                <li className="d-flex list-inline-item">
                  <Link to="/"  className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <FaBars/>
                  </Link>
                  <Link to="/notification" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <FaBell/>
                  </Link>
                  <Link to="/profile" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <FaUser/>
                  </Link>
                </li>
              </ul>                    
            </div>
            <Link to="/logout">
              <button type="submit" className={`${style.buttonLogout} w-100 text-white`}>Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar