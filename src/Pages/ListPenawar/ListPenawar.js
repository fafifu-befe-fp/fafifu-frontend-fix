import React from 'react'
import Penawaran from '../../Components/Penawaran/Penawaran'
import Navbar from '../../Components/Navbar/Navbar';

const ListPenawar = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Penawaran/>
      </div>
    </>
  )
}

export default ListPenawar