import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FiUser, FiLogIn } from 'react-icons/fi'
import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const NavbarMobile = () => {
  return (
    <div className={`container-fluid d-flex justify-content-between d-lg-none ${style.navMobile} my-auto`}>
        <Link className='navbar-brand' to='/'>
            <img className={`${style.logoKotak}` } src='img/logokotak.svg' alt='logoSecondHand' />
        </Link>
        <button className={`${style.iconNavBorder} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`${style.iconNav} navbar-toggler-icon`}></span>
        </button>
        <div className={`${style.navBackground} collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className={`${style.ulText} navbar-nav mb-3 mt-3 me-2 text-end`}>
                <li className='nav-item mb-3 '>
                    <Link to='/' className={` ${style.linkText} text-decoration-none`}><AiOutlineUnorderedList className={`${style.aiOutline} me-3`}/>Daftar Jual</Link>
                </li>
                <li className='nav-item mb-3'>
                    <Link to='/' className={` ${style.linkText} text-decoration-none`}><MdNotificationsNone className={`${style.mdNotif} me-3`}/>Notifikasi</Link>
                </li>
                <li className='nav-item mb-3'>
                    <Link to='/' className={` ${style.linkText} text-decoration-none`}><FiUser className={`${style.fiUser} me-3`}/>Profil</Link>
                </li>
                <li className='nav-item'>
                    <button type="submit" className={`${style.buttonLogin}`}>
                        <FiLogIn className='me-1'/>
                        <Link to='/Login' className={`${style.masuk}`}>Masuk</Link>
                    </button>
                </li>
            </ul>
            <form className="d-flex float-end pb-3 me-2" role="search">
                <input className={`${style.searchBar} form-control`} type="search" placeholder="Cari di sini ..." aria-label="Search" />
            </form>



          {/* <div className={`icon_wrapper ms-auto`}>
            <AiOutlineUnorderedList className={`${style.aiOutline} me-3`}/>
            <MdNotificationsNone className={`${style.mdNotif} me-3`}/>
            <FiUser className={`${style.fiUser} me-3`}/>           
            <button type="submit" className={`${style.buttonLogin}`}>
              <FiLogIn className='me-1'/>
              <Link to='/Login' className={`${style.masuk}`}>Masuk</Link>
            </button>
          </div> */}
        </div>
    </div>
  )
}

export default NavbarMobile