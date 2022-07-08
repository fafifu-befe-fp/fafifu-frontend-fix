import React from 'react'
import Penawaran from '../../Components/Penawaran/Penawaran'
import Navbar from '../../Components/Navbar/Navbar';

const Notification = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Penawaran/>
      </div>
    </>
  )
}

export default Notification