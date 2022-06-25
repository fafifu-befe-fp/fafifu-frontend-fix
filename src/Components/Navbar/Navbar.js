import React, { useState } from 'react';
import style from './Navbar.module.css'
import {Link} from 'react-router-dom';
import { BiListUl } from 'react-icons/bi';
import {IoIosNotificationsOutline} from 'react-icons/io'
import { BsPerson } from 'react-icons/bs';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header>
      <nav className={'mh-50'}>
        <div className={'container'}>
          <div className={'row align-items-center justify-content-between'}>
            <div className={'col flex-grow-1'}>
              <Link to='/'><img src='../../img/logo.png' /></Link>
            </div>
            <div className={'col flex-grow-2'}>
              <input type='text' placeholder='Cari disini...' className={`${style.searchBar}`}/>
            </div>
            <div className={'col flex-grow-1'}>
              <ul>
                <li><Link to='/list'><BiListUl size={20}/></Link></li>
                <li><Link to='/notification'><IoIosNotificationsOutline size={20}/></Link></li>
                <li><Link to='/profile'><BsPerson size={20}/></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
    
    </>

    // <div className="Navbar">
    //   <Link to='/'><img src="/images/logo.png"/></Link>
    //   <div className={`nav-items ${isOpen && "open"}`}>
    //     <Link to="/list"><BiListUl /></Link>
    //     <Link to="/notification"><IoIosNotificationsOutline /></Link>
    //     <Link to="/profile"><BsPerson /></Link>
    //   </div>
    //   <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
    //     <div className="bar"></div>
    //   </div>
    // </div>
  );
};

export default Navbar;