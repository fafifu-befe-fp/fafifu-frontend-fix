import React from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
  return (
    <nav className={`navbar sticky-top navbar-expand-lg`}>
      <NavbarDesktop />
      <NavbarMobile />
    </nav>
  )
}

export default Navbar