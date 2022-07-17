import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './float.css';

const FloatButton = () => {
  return (
    <div className='container'>
      <Link to='/add' className='text-decoration-none'><button type="button" className='float'><IoIosAdd className='m-1'/>Jual</button></Link>
    </div>
  )
}

export default FloatButton