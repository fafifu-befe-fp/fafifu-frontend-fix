import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FiUser, FiLogIn } from 'react-icons/fi'
import { MdNotificationsNone } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const NavbarMobile = () => {

    const user = useSelector( store => store.user.data )

  return (
    <div className={`container-fluid d-flex justify-content-between d-lg-none ${style.navMobile} my-auto`}>
        <Link className={`${style.logoKotak} navbar-brand`} to='/'>
          SecondHand.
        </Link>
        <button className={`${style.iconNavBorder} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`${style.iconNav} navbar-toggler-icon`}></span>
        </button>
        <div className={`${style.navBackground} collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className={`${style.ulText} navbar-nav mb-3 mt-3 me-2 text-end`}>
                {/* Public */}
                { user === null && <li className='nav-item'>
                    <button type="submit" className={`${style.buttonLogin}`}>
                        <FiLogIn className='me-1'/>
                        <Link to='/login' className={`${style.masuk}`}>Masuk</Link>
                    </button>
                </li> }
                {/* Protected */}

                { user !== null && <li className='nav-item mb-3 '>
                    <Link to='/' className={` ${style.linkText} text-decoration-none`}><AiOutlineUnorderedList className={`${style.aiOutline} me-3`}/>Daftar Jual</Link>
                </li> }
                { user !== null && <li className='nav-item mb-3'>
                    <Link to='/' className={` ${style.linkText} text-decoration-none`}><MdNotificationsNone className={`${style.mdNotif} me-3`}/>Notifikasi</Link>
                </li> }
                { user !== null && <li className='nav-item mb-3'>
                    <Link to='/' className={` ${style.linkText} text-decoration-none`}><FiUser className={`${style.fiUser} me-3`}/>Profil</Link>
                </li> }

                { user !== null && <button type="submit" className={`${style.buttonLogout}`}>
                    <FiLogIn className='me-1'/>
                    <Link to='/logout' className={`${style.masuk}`}>Logout</Link>
                </button> }
                
            </ul>
            <form className="d-flex float-end pb-3 me-2" role="search">
                <input className={`${style.searchBar} form-control`} type="search" placeholder="Cari di sini ..." aria-label="Search" />
            </form>
        </div>
    </div>
  )
}

export default NavbarMobile