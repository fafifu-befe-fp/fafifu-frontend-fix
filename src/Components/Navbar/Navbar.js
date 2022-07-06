import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import {FaUser, FaBell, FaBars} from 'react-icons/fa'
import { FiUser, FiLogIn } from 'react-icons/fi'
import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className={`navbar sticky-top navbar-expand-lg`}>
      <div className='container d-flex align-items-center justify-content-center'>
        <Link className='navbar-brand' to='/'>
          <img className={`${style.logoKotak}` } src='img/logokotak.svg' alt='logoSecondHand' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input className={`${style.searchBar} form-control me-2`} type="search" placeholder="Cari di sini ..." aria-label="Search" />
          </form>
          <div className={`icon_wrapper ms-auto`}>
            <AiOutlineUnorderedList className={`${style.aiOutline} me-3`}/>
            <MdNotificationsNone className={`${style.mdNotif} me-3`}/>
            <FiUser className={`${style.fiUser} me-3`}/>           
            <button type="submit" class={`${style.buttonLogin}`}>
              <FiLogIn className='me-1'/>
              <Link to='/Login' className={`${style.masuk}`}>Masuk</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar