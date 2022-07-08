import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FiUser, FiLogIn } from 'react-icons/fi'
import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const NavbarDesktop = () => {

  const user = useSelector( store => store.user.data )

  return (
    <div className='container d-lg-flex align-items-center justify-content-center d-none'>
        <Link className={`${style.logoKotak} navbar-brand`} to='/'>
          SecondHand.
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input className={`${style.searchBar} form-control me-2`} type="search" placeholder="Cari di sini ..." aria-label="Search" />
          </form>
          <div className={`icon_wrapper ms-auto`}>
            {/* Public */}
            { user === null && <button type="submit" className={`${style.buttonLogin}`}>
              <FiLogIn className='me-1'/>
              <Link to='/login' className={`${style.masuk}`}>Masuk</Link>
            </button> }

            {/* Protected */}
            { user !== null && <AiOutlineUnorderedList className={`${style.aiOutline} me-3`}/>}

            { user !== null && <Link to='/notification'>
              <MdNotificationsNone className={`${style.mdNotif} me-3`}/>
            </Link> }

            { user !== null &&  <Link to='/profile'>
              <FiUser className={`${style.fiUser} me-3`}/>      
            </Link> }    
            
            { user !== null && <button type="submit" className={`${style.buttonLogout}`}>
              <FiLogIn className='me-1'/>
              <Link to='/logout' className={`${style.masuk}`}>Logout</Link>
            </button> }
          </div>
        </div>
    </div>
  )
}

export default NavbarDesktop